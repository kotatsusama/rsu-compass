/**
 * ============================================================
 * RSU Learning Game - ビジュアルノベルエンジン v3.1
 * ============================================================
 * 
 * このファイルはゲーム全体の「エンジン」です。
 * ビジュアルノベル（テキストと画像で物語を進める形式）を
 * ブラウザ上で動かすための仕組みがすべて入っています。
 * 
 * 【主な機能】
 * - チャプタートップ画像の表示
 * - ダイアログ（会話）シーンの表示
 * - 情報パネル（解説）の表示
 * - クイズの出題と採点
 * - タイプライター風テキスト表示
 * - 結果画面（スコア・評価・学んだこと）
 * - 間違えた問題のリトライ機能
 * 
 * 【設計パターン】
 * IIFE（即時実行関数）で囲み、グローバル汚染を防止。
 * window.VNEngine として外部からアクセスできるAPIのみ公開。
 * ============================================================
 */
(function () {
  'use strict'; // 厳格モード: うっかりミスをエラーとして検出してくれる

  // ============================================================
  // ゲームの状態（State）を管理するオブジェクト
  // ゲーム中に変化するデータはすべてここに格納する
  // ============================================================
  var state = {
    chapterData: null,    // 現在プレイ中のチャプターデータ全体
    scenes: [],           // シーン（場面）の配列
    currentIndex: 0,      // 今何番目のシーンを表示しているか
    score: 0,             // 正解した数
    totalQuizzes: 0,      // チャプター内のクイズ総数
    wrongAnswers: [],     // 間違えた問題を記録（リトライ用）
    isRetryMode: false,   // リトライモード中かどうか
    retryScenes: [],      // リトライ対象のシーン
    isTyping: false,      // テキストがタイプ中かどうか
    typeTimer: null,      // タイプライター用のタイマーID
    fullText: ''          // 現在表示中のテキスト全文
  };

  // タイプライターの速度（ミリ秒/1文字）。小さいほど速い
  var TYPING_SPEED = 25;

  // 現在の言語を取得するヘルパー（I18nモジュールがあれば使う）
  function currentLang() {
    return (window.I18n && window.I18n.getLang) ? window.I18n.getLang() : 'ja';
  }

  // I18n翻訳テキスト取得ショートカット
  function t(key) {
    return (window.I18n && window.I18n.t) ? window.I18n.t(key) : key;
  }


  // シーンのテキストを現在の言語で取得する
  // シーンのテキストを現在の言語で取得する
  // 1. scene.en.field があればそれを使う（インライン翻訳）
  // 2. EN_TRANSLATIONS["ch1_0"].field があればそれを使う（外部翻訳ファイル）
  // 3. なければ日本語の scene.field を返す
  function getSceneText(scene, field) {
    field = field || 'text';
    var lang = currentLang();
    if (lang === 'en') {
      // 方法1: シーン内のenオブジェクト
      if (scene.en && scene.en[field]) {
        return scene.en[field];
      }
      // 方法2: 外部翻訳ファイル（translations-en.js）
      if (typeof EN_TRANSLATIONS !== 'undefined' && state.chapterData) {
        var chId = state.chapterData.id || 'ch1';
        var key = chId + '_' + state.currentIndex;
        if (EN_TRANSLATIONS[key] && EN_TRANSLATIONS[key][field]) {
          return EN_TRANSLATIONS[key][field];
        }
      }
    }
    return scene[field] || '';
  }

  // ============================================================
  // 背景IDのエイリアス（別名）マッピング
  // シーンデータで "office" と書くだけで "ch1-office" に変換される
  // ============================================================
  var BG_ALIASES = {
    'office': 'ch1-office',
    'meeting-room': 'ch1-meeting',
    'meeting': 'ch1-meeting',
    'home-desk': 'ch2-home-desk',
    'tax-office': 'ch2-tax-office',
    'computer': 'ch3-computer',
    'login': 'ch3-login',
    'stock-chart': 'ch4-stock-chart',
    'dojo': 'ch5-dojo',
    'forex': 'ch5-forex'
  };

  // ============================================================
  // 初期化 — チャプター開始時に呼ばれる最初の関数
  // ============================================================
  function init(chapterData) {
    // 状態をリセット
    state.chapterData = chapterData;
    state.scenes = chapterData.scenes || [];
    state.currentIndex = 0;
    state.score = 0;
    state.totalQuizzes = 0;
    state.wrongAnswers = [];
    state.isRetryMode = false;
    state.retryScenes = [];

    // チャプター内のクイズ数をカウント
    for (var i = 0; i < state.scenes.length; i++) {
      if (state.scenes[i].type === 'quiz') state.totalQuizzes++;
    }

    // チャプタートップ画像を表示してスタート待機
    showChapterTop();
  }

  // ============================================================
  // チャプタートップ画像表示
  // チャプター開始時に全画面で表示される導入画像
  // クリックまたはEnterキーでゲーム本編が始まる
  // ============================================================
  function showChapterTop() {
    // チャプター番号を取得（例: "ch3" → "3" → "03"）
    var chNum = state.chapterData.id ? state.chapterData.id.replace('ch', '') : '1';
    var chPad = chNum.padStart(2, '0'); // 1桁を2桁に（"3"→"03"）
    var topImg = '../images/backgrounds/ch' + chPad + '-top.webp';

    // 背景を黒にリセット
    var bgEl = document.getElementById('vn-background');
    if (bgEl) {
      bgEl.style.backgroundImage = 'none';
      bgEl.style.background = '#000';
      var ph = bgEl.querySelector('.vn-background-placeholder');
      if (ph) ph.style.display = 'none';
    }

    // キャラクターを非表示
    hideCharacters();

    // トップ画像のHTMLを生成して表示
    var container = document.getElementById('vn-ui');
    container.innerHTML = '<div class="vn-chapter-top" id="vn-chapter-top">' +
      '<img src="' + topImg + '" alt="Chapter ' + chNum + '" class="vn-chapter-top__img" onerror="this.style.display=\'none\'">' +
      '<div class="vn-chapter-top__overlay">' +
      '<div class="vn-chapter-top__prompt">Click or Press Enter to Start</div>' +
      '</div></div>';

    // クリックまたはEnterでチャプター開始
    function startChapter(e) {
      if (e.type === 'keydown' && e.key !== 'Enter') return;
      document.removeEventListener('keydown', startChapter);
      var topEl = document.getElementById('vn-chapter-top');
      if (topEl) {
        topEl.classList.add('vn-chapter-top--fadeout'); // フェードアウト演出
        setTimeout(function() { renderScene(0); }, 400); // 0.4秒後に最初のシーンへ
      } else {
        renderScene(0);
      }
    }

    // イベントリスナーの登録
    var topEl = document.getElementById('vn-chapter-top');
    if (topEl) topEl.addEventListener('click', startChapter);
    document.addEventListener('keydown', startChapter);
  }

  // ============================================================
  // シーン描画 — ゲームの中核。シーンの種類に応じて表示を切り替える
  // ============================================================
  function renderScene(index) {
    // リトライモードか通常モードかで参照するシーン配列を切り替え
    var scenes = state.isRetryMode ? state.retryScenes : state.scenes;

    // 全シーン終了 → 結果画面へ
    if (index >= scenes.length) { showResults(); return; }

    state.currentIndex = index;
    var scene = scenes[index];
    updateProgress(); // プログレスバー更新

    // シーンのタイプに応じて描画関数を呼び分ける
    switch (scene.type) {
      case 'dialog': renderDialog(scene); break;  // 会話シーン
      case 'info': renderInfo(scene); break;      // 情報パネル
      case 'quiz': renderQuiz(scene); break;      // クイズ
      default: renderDialog(scene);               // 不明なタイプはダイアログとして表示
    }
  }

  // ============================================================
  // 背景画像の解決 — 短い名前から実際の背景IDを探す
  // ============================================================
  function resolveBgId(bgId) {
    if (!bgId) return null;
    // backgrounds.jsに直接定義されている場合
    if (typeof BACKGROUNDS !== 'undefined' && BACKGROUNDS[bgId]) return bgId;
    // エイリアス（別名）で定義されている場合
    if (BG_ALIASES[bgId]) return BG_ALIASES[bgId];
    // チャプターIDをプレフィックスとして試す（例: "ch4" + "-" + "office"）
    var chId = state.chapterData ? state.chapterData.id : '';
    var chPrefix = chId ? chId + '-' : '';
    if (typeof BACKGROUNDS !== 'undefined' && BACKGROUNDS[chPrefix + bgId]) return chPrefix + bgId;
    return bgId;
  }

  // ============================================================
  // 背景画像の描画
  // 画像読み込みに成功すれば表示、失敗すればグラデーション背景にフォールバック
  // ============================================================
  function renderBackground(bgId) {
    var bgEl = document.getElementById('vn-background');
    if (!bgEl) return;

    var resolvedId = resolveBgId(bgId);
    var bg = (typeof BACKGROUNDS !== 'undefined' && BACKGROUNDS[resolvedId]) ? BACKGROUNDS[resolvedId] : null;

    if (bg && bg.image) {
      // 画像をプリロードしてから表示（ちらつき防止）
      var img = new Image();
      img.onload = function () {
        bgEl.style.backgroundImage = 'url(../' + bg.image + ')';
        bgEl.style.backgroundSize = 'cover';
        bgEl.style.backgroundPosition = 'center';
        bgEl.style.backgroundColor = '';
        var ph = bgEl.querySelector('.vn-background-placeholder');
        if (ph) ph.style.display = 'none';
      };
      img.onerror = function () { showBgPlaceholder(bgEl, bg); };
      img.src = '../' + bg.image;
    } else if (bg) {
      // 画像パスがないがデータはある → プレースホルダー表示
      showBgPlaceholder(bgEl, bg);
    } else {
      // データ自体がない → デフォルトのグラデーション背景
      bgEl.style.backgroundImage = 'none';
      bgEl.style.background = 'linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)';
      var ph2 = bgEl.querySelector('.vn-background-placeholder');
      if (ph2) { ph2.style.display = 'flex'; ph2.textContent = ''; }
    }
  }

  // 背景プレースホルダー表示（画像がないときの代替表示）
  function showBgPlaceholder(bgEl, bg) {
    bgEl.style.backgroundImage = 'none';
    bgEl.style.background = bg.gradient || 'linear-gradient(180deg, #1a1a2e 0%, #0f3460 100%)';
    var ph = bgEl.querySelector('.vn-background-placeholder');
    if (ph) { ph.style.display = 'flex'; ph.textContent = bg.label || ''; }
  }

  // ============================================================
  // キャラクター描画
  // シーンに登場するキャラクターのバスト画像を左右に配置する
  // ============================================================
  function renderCharacters(characters, speakerId) {
    var charEl = document.getElementById('vn-characters');
    if (!charEl) return;
    charEl.innerHTML = ''; // 前のキャラクターをクリア
    if (!characters || characters.length === 0) return;

    for (var i = 0; i < characters.length; i++) {
      var c = characters[i];
      var charData = getCharData(c.id); // characters.jsからキャラ情報を取得
      var isSpeaking = (c.id === speakerId); // 今話しているキャラか？
      // こたつ（主人公）は常に左、他キャラはデータの指定位置
      var pos = (c.id === 'kotatsu') ? 'left' : (c.position || 'center');

      // キャラクター表示用のdiv要素を作成
      var div = document.createElement('div');
      div.className = 'vn-character vn-character--' + pos;
      // 話し中のキャラは明るく、そうでないキャラは暗く表示
      div.className += isSpeaking ? ' vn-character--speaking' : ' vn-character--silent';

      // 画像パス（バスト画像を優先、なければ全身画像にフォールバック）
      var bustPath = '../images/characters/' + c.id + '-bust.webp';
      var fullPath = '../images/characters/' + c.id + '.webp';

      var img = document.createElement('img');
      img.src = bustPath;
      img.alt = charData ? charData.name : c.id;
      img.className = 'vn-character__img';
      // 画像読み込みエラー時のフォールバック処理（クロージャで変数を保持）
      img.onerror = (function(fp, cd, cid) {
        return function() {
          this.onerror = function() {
            // 全身画像もエラー → 絵文字プレースホルダーを表示
            this.style.display = 'none';
            this.parentElement.appendChild(createCharPlaceholder(cd, cid));
          };
          this.src = fp; // 全身画像を試す
        };
      })(fullPath, charData, c.id);

      div.appendChild(img);
      charEl.appendChild(div);
    }
  }

  // キャラクターを全て非表示にする
  function hideCharacters() {
    var charEl = document.getElementById('vn-characters');
    if (charEl) charEl.innerHTML = '';
  }

  // 画像がないキャラクター用の絵文字プレースホルダーを作成
  function createCharPlaceholder(charData, charId) {
    var ph = document.createElement('div');
    ph.className = 'vn-character-placeholder';
    ph.style.backgroundColor = (charData && charData.color) || '#6366f1';
    var emoji = document.createElement('span');
    emoji.className = 'vn-character-placeholder__emoji';
    emoji.textContent = (charData && charData.placeholder) || '\u{1F464}';
    var name = document.createElement('span');
    name.className = 'vn-character-placeholder__name';
    name.textContent = (charData && charData.name) || charId;
    ph.appendChild(emoji);
    ph.appendChild(name);
    return ph;
  }

  // characters.jsからキャラクターデータを取得するヘルパー
  function getCharData(charId) {
    if (typeof CHARACTERS !== 'undefined' && CHARACTERS[charId]) return CHARACTERS[charId];
    return null;
  }

  // ============================================================
  // ダイアログ（会話）シーンの描画
  // 背景・キャラ・テキストボックスを表示し、タイプライター開始
  // ============================================================
  function renderDialog(scene) {
    renderBackground(scene.background || 'office');
    renderCharacters(scene.characters, scene.speaker || scene.character);

    var container = document.getElementById('vn-ui');
    var speakerId = scene.speaker || scene.character || '';
    var charData = getCharData(speakerId);
    var speakerName = charData ? (currentLang() === 'en' && charData.nameEn ? charData.nameEn : charData.name) : speakerId;

    // テキストボックスのHTMLを生成
    container.innerHTML = '<div class="vn-textbox" id="vn-textbox" onclick="window.VNEngine.handleClick()">' +
      '<div class="vn-speaker">' + escapeHtml(speakerName) + '</div>' +
      '<div class="vn-text" id="vn-text"></div>' +
      '<div class="vn-next-indicator" id="vn-next-indicator" style="display:none;">' + t('rpg.next') + '</div>' +
      '</div>';

    // テキストをタイプライター風に表示開始
    startTyping(getSceneText(scene, 'text'));
  }

  // ============================================================
  // 情報パネル（解説）の描画
  // RSUの仕組みなどを図解・箇条書きで表示するカード型UI
  // ============================================================
  function renderInfo(scene) {
    renderBackground(scene.background || 'office');
    hideCharacters(); // 情報パネル中はキャラ非表示

    var container = document.getElementById('vn-ui');
    // テキスト内の改行コード(\n)をHTMLの<br>に変換
    var text = (getSceneText(scene, 'text')).replace(/\\\\n/g, '<br>').replace(/\\n/g, '<br>');

    container.innerHTML = '<div class="vn-info-panel">' +
      '<div class="vn-info-panel__title">' + escapeHtml(getSceneText(scene, 'title') || '\u{1F4D6} 情報') + '</div>' +
      '<div class="vn-info-panel__text">' + text + '</div>' +
      '<button class="vn-info-panel__btn" onclick="window.VNEngine.nextScene()">' + t('rpg.nextbtn') + '</button>' +
      '</div>';
  }

  // ============================================================
  // クイズシーンの描画
  // 問題文と選択肢ボタンを表示する
  // ============================================================
  function renderQuiz(scene) {
    renderBackground(scene.background || 'office');
    hideCharacters();

    // 選択肢のHTMLを組み立て
    // 選択肢を現在の言語で取得
    var options = scene.options || scene.choices || [];
    if (currentLang() === 'en') {
      if (scene.en && scene.en.options) {
        options = scene.en.options;
      } else if (typeof EN_TRANSLATIONS !== 'undefined' && state.chapterData) {
        var key = (state.chapterData.id || 'ch1') + '_' + state.currentIndex;
        if (EN_TRANSLATIONS[key] && EN_TRANSLATIONS[key].options) {
          options = EN_TRANSLATIONS[key].options;
        }
      }
    }
    var optionsHtml = '';
    for (var i = 0; i < options.length; i++) {
      optionsHtml += '<button class="vn-quiz__option" data-index="' + i + '" onclick="window.VNEngine.handleQuizAnswer(' + i + ')">' + escapeHtml(options[i]) + '</button>';
    }

    var container = document.getElementById('vn-ui');
    container.innerHTML = '<div class="vn-quiz">' +
      '<div class="vn-quiz__question">❓ ' + escapeHtml(getSceneText(scene, 'question')) + '</div>' +
      '<div class="vn-quiz__options">' + optionsHtml + '</div>' +
      '<div id="vn-quiz-feedback"></div>' +
      '</div>';
  }

  // ============================================================
  // タイプライター効果
  // 文字を1文字ずつ表示して、ノベルゲーム風の演出を行う
  // ============================================================
  function startTyping(text) {
    state.isTyping = true;
    state.fullText = text;
    var textEl = document.getElementById('vn-text');
    var indicatorEl = document.getElementById('vn-next-indicator');
    if (!textEl) return;

    var charIndex = 0;
    textEl.innerHTML = '<span class="vn-cursor"></span>'; // カーソル表示
    if (state.typeTimer) clearInterval(state.typeTimer); // 前のタイマーを停止

    // setIntervalで一定間隔ごとに1文字追加
    state.typeTimer = setInterval(function () {
      if (charIndex >= text.length) {
        // 全文字表示完了
        clearInterval(state.typeTimer);
        state.isTyping = false;
        textEl.innerHTML = text.replace(/\\\\n/g, '<br>').replace(/\\n/g, '<br>');
        if (indicatorEl) indicatorEl.style.display = 'block'; // 「次へ」表示
        return;
      }
      // 途中経過を表示
      var current = text.substring(0, charIndex + 1).replace(/\\\\n/g, '<br>').replace(/\\n/g, '<br>');
      textEl.innerHTML = current + '<span class="vn-cursor"></span>';
      charIndex++;
    }, TYPING_SPEED);
  }

  // タイプ中にクリックすると全文を即座に表示（スキップ）
  function skipTyping() {
    if (state.typeTimer) clearInterval(state.typeTimer);
    state.isTyping = false;
    var textEl = document.getElementById('vn-text');
    var indicatorEl = document.getElementById('vn-next-indicator');
    if (textEl) textEl.innerHTML = state.fullText.replace(/\\\\n/g, '<br>').replace(/\\n/g, '<br>');
    if (indicatorEl) indicatorEl.style.display = 'block';
  }

  // ============================================================
  // クリックハンドラ
  // テキスト表示中→スキップ、表示完了後→次のシーンへ
  // ============================================================
  function handleClick() {
    if (state.isTyping) { skipTyping(); }
    else { nextScene(); }
  }

  // ============================================================
  // クイズ回答処理
  // 正解/不正解を判定し、フィードバックと解説を表示する
  // ============================================================
  function handleQuizAnswer(selectedIndex) {
    var scenes = state.isRetryMode ? state.retryScenes : state.scenes;
    var scene = scenes[state.currentIndex];
    var correct = scene.correct; // 正解のインデックス番号
    var isCorrect = (selectedIndex === correct);

    // 全ボタンを無効化し、正解/不正解の色を付ける
    var buttons = document.querySelectorAll('.vn-quiz__option');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.add('vn-quiz__option--disabled');
      buttons[i].disabled = true;
      if (i === correct) buttons[i].classList.add('vn-quiz__option--correct');
      if (i === selectedIndex && !isCorrect) buttons[i].classList.add('vn-quiz__option--wrong');
    }

    // フィードバック（正解/不正解メッセージ + 解説）を表示
    var feedbackEl = document.getElementById('vn-quiz-feedback');
    if (isCorrect) {
      state.score++;
      feedbackEl.innerHTML = '<div class="vn-quiz__feedback vn-quiz__feedback--correct">' +
        '<strong>' + t('rpg.correct') + '</strong>' +
        (getSceneText(scene, 'explanation') ? '<p>' + escapeHtml(getSceneText(scene, 'explanation')) + '</p>' : '') +
        '</div>' +
        '<button class="vn-quiz__next-btn" onclick="window.VNEngine.nextScene()">' + t('rpg.nextbtn') + '</button>';
    } else {
      // 不正解の問題をリトライ用に記録
      if (!state.isRetryMode) state.wrongAnswers.push(scene);
      feedbackEl.innerHTML = '<div class="vn-quiz__feedback vn-quiz__feedback--wrong">' +
        '<strong>' + t('rpg.wrong') + '</strong>' +
        (getSceneText(scene, 'explanation') ? '<p>\u{1F4A1} ' + escapeHtml(getSceneText(scene, 'explanation')) + '</p>' : '') +
        '</div>' +
        '<button class="vn-quiz__next-btn" onclick="window.VNEngine.nextScene()">' + t('rpg.nextbtn') + '</button>';
    }
    updateScoreDisplay();
  }

  // ============================================================
  // 次のシーンへ進む
  // ============================================================
  function nextScene() {
    renderScene(state.currentIndex + 1);
  }

  // ============================================================
  // プログレスバーとスコア表示の更新
  // ============================================================
  function updateProgress() {
    var scenes = state.isRetryMode ? state.retryScenes : state.scenes;
    var percent = Math.round(((state.currentIndex + 1) / scenes.length) * 100);
    var bar = document.getElementById('vn-progress-bar');
    if (bar) bar.style.width = percent + '%';
  }

  function updateScoreDisplay() {
    var el = document.getElementById('vn-score');
    if (el) el.textContent = '✦ ' + state.score + '/' + state.totalQuizzes;
  }

  // ============================================================
  // 結果画面（チャプタークリア時に表示）
  // 正答率・評価グレード・学んだこと・見直しポイントを表示
  // ============================================================
  function showResults() {
    // 正答率を計算
    var total = state.isRetryMode
      ? state.retryScenes.filter(function (s) { return s.type === 'quiz'; }).length
      : state.totalQuizzes;
    var percent = total > 0 ? Math.round((state.score / total) * 100) : 100;
    var cleared = percent >= 70; // 70%以上でクリア

    // チャプター番号を取得し、クリア状態をlocalStorageに保存
    var chNum = '1';
    if (state.chapterData && state.chapterData.id) {
      chNum = state.chapterData.id.replace('ch', '');
      if (cleared) localStorage.setItem('rsu_ch' + chNum + '_cleared', 'true');
    }

    var chPad = chNum.padStart(2, '0');
    var resultImg = '../images/special/ch' + chPad + '-result-clear.webp';

    // 正答率に応じた評価グレードとコメント
    var grade, gradeColor, comment;
    if (percent >= 90) { grade = 'S'; gradeColor = '#FFD700'; comment = (window.I18n ? window.I18n.t('grade.S') : '完璧な理解度です！'); }
    else if (percent >= 80) { grade = 'A'; gradeColor = '#C9A96E'; comment = (window.I18n ? window.I18n.t('grade.A') : 'しっかり理解できました！'); }
    else if (percent >= 70) { grade = 'B'; gradeColor = '#87CEEB'; comment = (window.I18n ? window.I18n.t('grade.B') : '基本は押さえています！'); }
    else if (percent >= 50) { grade = 'C'; gradeColor = '#90EE90'; comment = (window.I18n ? window.I18n.t('grade.C') : 'もう少し復習しましょう'); }
    else { grade = 'D'; gradeColor = '#FF6B6B'; comment = (window.I18n ? window.I18n.t('grade.D') : '再チャレンジがおすすめ'); }

    // 「今回学んだこと」— infoシーンのタイトルを収集
    var learned = [];
    for (var i = 0; i < state.scenes.length; i++) {
      if (state.scenes[i].type === 'info' && state.scenes[i].title) {
        var t = state.scenes[i].title.replace(/^[^\x00-\x7F]\s?/, ''); // 先頭の絵文字を除去
        if (t) learned.push(t);
      }
    }

    // 「見直しポイント」— 間違えた問題の質問文を収集
    var review = [];
    for (var j = 0; j < state.wrongAnswers.length; j++) {
      var q = state.wrongAnswers[j].question;
      if (q && q.length > 30) q = q.substring(0, 30) + '…'; // 長すぎる質問は省略
      review.push(q);
    }

    // 最大3件に制限
    learned = learned.slice(0, 3);
    review = review.slice(0, 3);

    // 学んだことのHTML生成
    var learnedHtml = '';
    for (var k = 0; k < learned.length; k++) {
      learnedHtml += '<div class="vn-result__item vn-result__item--ok">✔ ' + escapeHtml(learned[k]) + '</div>';
    }
    if (learned.length === 0) learnedHtml = '<div class="vn-result__item vn-result__item--ok">' + t('rpg.result.cleared') + '</div>';

    // 見直しポイントのHTML生成
    var reviewHtml = '';
    if (review.length > 0) {
      for (var m = 0; m < review.length; m++) {
        reviewHtml += '<div class="vn-result__item vn-result__item--review">● ' + escapeHtml(review[m]) + '</div>';
      }
    } else {
      reviewHtml = '<div class="vn-result__item vn-result__item--ok">' + t('rpg.result.perfect') + '</div>';
    }

    // 次のチャプターボタン or 全完了ボタン
    var nextCh = parseInt(chNum) + 1;
    var nextBtn = nextCh <= 7
      ? '<a href="rpg.html?ch=' + nextCh + '" class="vn-result__btn vn-result__btn--next">' + t('rpg.result.next') + '</a>'
      : '<a href="chapters.html" class="vn-result__btn vn-result__btn--next">' + t('rpg.result.complete') + '</a>';

    hideCharacters();

    // 背景にクリア画像を設定
    var bgEl = document.getElementById('vn-background');
    if (bgEl) {
      bgEl.style.backgroundImage = 'url(' + resultImg + ')';
      bgEl.style.backgroundSize = 'cover';
      bgEl.style.backgroundPosition = 'center';
      var ph = bgEl.querySelector('.vn-background-placeholder');
      if (ph) ph.style.display = 'none';
    }

    // 結果オーバーレイをbodyに追加（レイアウト崩れ防止のため）
    var existingOverlay = document.querySelector('.vn-result-overlay');
    if (existingOverlay) existingOverlay.remove();

    var overlay = document.createElement('div');
    overlay.className = 'vn-result-overlay';
    overlay.innerHTML = '' +
      '<div class="vn-result__score-area">' +
        '<div class="vn-result__percent-box">' +
          '<div class="vn-result__label">' + t('rpg.result.accuracy') + '</div>' +
          '<div class="vn-result__percent">' + percent + '%</div>' +
        '</div>' +
        '<div class="vn-result__grade-box">' +
          '<div class="vn-result__grade" style="color:' + gradeColor + '">' + grade + '</div>' +
          '<div class="vn-result__grade-label">' + t('rpg.result.grade') + '</div>' +
        '</div>' +
        '<div class="vn-result__comment">' + escapeHtml(comment) + '</div>' +
      '</div>' +
      '<div class="vn-result__panels">' +
        '<div class="vn-result__panel">' +
          '<div class="vn-result__panel-title">' + t('rpg.result.learned') + '</div>' +
          learnedHtml +
        '</div>' +
        '<div class="vn-result__panel">' +
          '<div class="vn-result__panel-title">' + t('rpg.result.review') + '</div>' +
          reviewHtml +
        '</div>' +
      '</div>' +
      '<div class="vn-result__actions">' +
        nextBtn +
        '<button class="vn-result__btn vn-result__btn--retry" onclick="window.VNEngine.restart()">' + t('rpg.result.retry') + '</button>' +
        '<a href="index.html" class="vn-result__btn vn-result__btn--home">' + t('rpg.result.home') + '</a>' +
      '</div>';
    document.body.appendChild(overlay);
  }

  // ============================================================
  // リトライ機能
  // 間違えた問題だけをもう一度出題する
  // ============================================================
  function retryWrong() {
    state.isRetryMode = true;
    state.retryScenes = state.wrongAnswers.slice(); // 配列をコピー
    state.wrongAnswers = [];
    state.score = 0;
    state.currentIndex = 0;
    renderScene(0);
  }

  // チャプターを最初からやり直す
  function restart() {
    var ol = document.querySelector('.vn-result-overlay');
    if (ol) ol.remove(); // 結果画面を除去
    init(state.chapterData); // 同じチャプターで初期化し直す
  }

  // ============================================================
  // ユーティリティ関数
  // ============================================================

  /**
   * HTMLエスケープ — ユーザー入力やデータの文字列を安全にHTML表示する
   * <script>タグなどの悪意あるコードが実行されないように変換する
   */
  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // ============================================================
  // 公開API — 外部（HTML内のonclickなど）から呼び出せる関数
  // window.VNEngine.init(data) のように使う
  // ============================================================
  window.VNEngine = {
    init: init,                       // チャプター初期化
    nextScene: nextScene,             // 次のシーンへ
    handleClick: handleClick,         // テキストボックスクリック
    handleQuizAnswer: handleQuizAnswer, // クイズ回答
    retryWrong: retryWrong,           // 間違えた問題リトライ
    restart: restart                  // 最初からやり直し
  };

})(); // IIFE終了 — ここまでの変数は外部から見えない
