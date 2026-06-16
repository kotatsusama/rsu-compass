/**
 * ============================================================
 * RSU Learning Game — 多言語切替モジュール (i18n)
 * ============================================================
 * 
 * 【このファイルの役割】
 * 日本語と英語を切り替える機能を提供する。
 * 言語設定はlocalStorageに保存され、ページを跨いで維持される。
 * 
 * 【使い方】
 * 1. HTMLに <script src="../js/i18n.js"></script> を追加
 * 2. 翻訳対象の要素に data-i18n="キー名" 属性を付ける
 * 3. 言語切替ボタンが自動生成される（右上に配置）
 * 
 * 【仕組み】
 * - UI要素: data-i18n 属性で静的テキストを翻訳
 * - シナリオ: 各チャプターデータに en フィールドを追加して対応
 * - 切替時: ページをリロードせず、DOMを直接書き換え
 * 
 * ============================================================
 */
(function () {
  'use strict';

  // ============================================================
  // UI翻訳辞書 — ページ共通のUIテキスト
  // data-i18n="キー名" で参照される
  // ============================================================
  var TRANSLATIONS = {
    // --- トップページ ---
    'top.title': { ja: 'RSU Compass', en: 'RSU Compass' },
    'top.subtitle': { ja: 'RSUと確定申告を楽しく学ぼう！', en: 'Learn RSU & Tax Filing the Fun Way!' },
    'top.mode.rpg': { ja: 'RPGモード', en: 'RPG Mode' },
    'top.mode.rpg.desc': { ja: 'ストーリーで学ぶ', en: 'Learn through story' },
    'top.mode.rpg.btn': { ja: 'ストーリーを進める ＞', en: 'Start Story ＞' },
    'top.mode.chapters': { ja: 'チャプター選択', en: 'Chapter Select' },
    'top.mode.chapters.desc': { ja: '好きな章から学習', en: 'Pick any chapter' },
    'top.mode.chapters.btn': { ja: 'チャプターを選ぶ ＞', en: 'Choose Chapter ＞' },
    'top.mode.sim': { ja: 'シミュレーション', en: 'Simulation' },
    'top.mode.sim.desc': { ja: '実際に計算してみる', en: 'Try real calculations' },
    'top.mode.sim.btn': { ja: 'シミュレーションを開始 ＞', en: 'Start Simulation ＞' },
    'top.continue': { ja: 'つづきから', en: 'Continue' },
    'top.footer': { ja: 'RSU学習ツール', en: 'RSU Learning Tool' },

    // --- チャプター選択ページ ---
    'chapters.title': { ja: '📖 チャプター選択', en: '📖 Chapter Select' },
    'chapters.breadcrumb.top': { ja: 'トップ', en: 'Home' },
    'chapters.breadcrumb.current': { ja: 'チャプター選択', en: 'Chapter Select' },
    'chapters.footer': { ja: 'RSU学習ツール', en: 'RSU Learning Tool' },

    // --- RPGモード ---
    'rpg.breadcrumb.top': { ja: 'トップ', en: 'Home' },
    'rpg.breadcrumb.chapters': { ja: 'チャプター選択', en: 'Chapters' },
    'rpg.breadcrumb.current': { ja: 'RPGモード', en: 'RPG Mode' },
    'rpg.prompt': { ja: 'クリックまたはEnterでスタート', en: 'Click or Press Enter to Start' },
    'rpg.next': { ja: '▼ クリックで次へ', en: '▼ Click to continue' },
    'rpg.nextbtn': { ja: '次へ ▶', en: 'Next ▶' },
    'rpg.preparing': { ja: '準備中', en: 'Coming Soon' },
    'rpg.result.accuracy': { ja: '正答率', en: 'Accuracy' },
    'rpg.result.grade': { ja: '評価', en: 'Grade' },
    'rpg.result.learned': { ja: '📖 今回学んだこと', en: '📖 What You Learned' },
    'rpg.result.review': { ja: '💡 見直しポイント', en: '💡 Review Points' },
    'rpg.result.next': { ja: '次のチャプターへ ＞', en: 'Next Chapter ＞' },
    'rpg.result.complete': { ja: '🎉 全チャプター完了！', en: '🎉 All Chapters Complete!' },
    'rpg.result.retry': { ja: '↺ もう一度挑戦', en: '↺ Try Again' },
    'rpg.result.home': { ja: '🏠 トップへ戻る', en: '🏠 Back to Home' },
    'rpg.result.perfect': { ja: '✨ パーフェクト！', en: '✨ Perfect!' },
    'rpg.result.cleared': { ja: 'チャプター完了！', en: 'Chapter Complete!' },
    'rpg.correct': { ja: '🎉 正解！', en: '🎉 Correct!' },
    'rpg.wrong': { ja: '😢 不正解...', en: '😢 Incorrect...' },

    // --- シミュレーター ---
    'sim.title': { ja: '📊 シミュレーションツール', en: '📊 Simulation Tool' },
    'sim.subtitle': { ja: '実際の数字で計算してみよう — RSUの損益・手取りを体感', en: 'Try real numbers — experience RSU gains & take-home pay' },
    'sim.breadcrumb.top': { ja: 'トップ', en: 'Home' },
    'sim.breadcrumb.current': { ja: 'シミュレーション', en: 'Simulation' },

    // --- チャプタータイトル ---
    'ch1.title': { ja: 'こたつの入社 — RSUって何？', en: "Kotatsu's First Day — What is RSU?" },
    'ch2.title': { ja: '申告の迷宮 — 確定申告って必要？', en: 'Tax Filing Maze — Do I Need to File?' },
    'ch3.title': { ja: 'Morgan Stanleyの試練', en: 'The Morgan Stanley Challenge' },
    'ch4.title': { ja: '売るか持つか、それが問題だ', en: 'To Sell or To Hold, That Is the Question' },
    'ch5.title': { ja: 'タイガー道場・為替の試練', en: 'Tiger Dojo — The Forex Challenge' },
    'ch6.title': { ja: '失敗道場 — よくあるRSUの落とし穴', en: 'Failure Dojo — Common RSU Pitfalls' },
    'ch7.title': { ja: '給与明細の謎を解け', en: 'Decode Your Payslip' },

    // --- 評価コメント ---
    'grade.S': { ja: '完璧な理解度です！', en: 'Perfect understanding!' },
    'grade.A': { ja: 'しっかり理解できました！', en: 'Solid understanding!' },
    'grade.B': { ja: '基本は押さえています！', en: 'Basics covered!' },
    'grade.C': { ja: 'もう少し復習しましょう', en: 'Review a bit more' },
    'grade.D': { ja: '再チャレンジがおすすめ', en: 'Try again recommended' }
  };

  // ============================================================
  // 現在の言語を取得（localStorageから。デフォルトは日本語）
  // ============================================================
  function getLang() {
    return localStorage.getItem('rsu_lang') || 'ja';
  }

  // 言語を設定してlocalStorageに保存
  function setLang(lang) {
    localStorage.setItem('rsu_lang', lang);
  }

  // ============================================================
  // 翻訳テキストを取得する
  // @param {string} key - 辞書のキー
  // @returns {string} 現在の言語に対応するテキスト
  // ============================================================
  function t(key) {
    var lang = getLang();
    if (TRANSLATIONS[key] && TRANSLATIONS[key][lang]) {
      return TRANSLATIONS[key][lang];
    }
    // キーが見つからない場合は日本語 or キー名をそのまま返す
    if (TRANSLATIONS[key] && TRANSLATIONS[key]['ja']) {
      return TRANSLATIONS[key]['ja'];
    }
    return key;
  }

  // ============================================================
  // ページ上の data-i18n 属性を持つ要素を一括翻訳
  // ============================================================
  function translatePage() {
    var elements = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < elements.length; i++) {
      var key = elements[i].getAttribute('data-i18n');
      var text = t(key);
      // input要素はplaceholderを、それ以外はtextContentを書き換え
      if (elements[i].tagName === 'INPUT') {
        elements[i].placeholder = text;
      } else {
        elements[i].textContent = text;
      }
    }
  }

  // ============================================================
  // 言語切替ボタンをページ右上に生成
  // ============================================================
  function createLangToggle() {
    // 既にボタンがある場合は作らない
    if (document.getElementById('lang-toggle')) return;

    var btn = document.createElement('button');
    btn.id = 'lang-toggle';
    btn.setAttribute('aria-label', 'Switch language');
    updateToggleLabel(btn);

    // スタイル
    // スマホかどうかで位置・サイズ調整
    var isMobile = window.innerWidth <= 480;
    btn.style.cssText = 'position:fixed;top:' + (isMobile ? '6px' : '12px') + ';right:' + (isMobile ? '8px' : '16px') + ';z-index:9999;' +
      'padding:' + (isMobile ? '4px 10px' : '6px 14px') + ';border-radius:20px;border:1px solid rgba(255,255,255,0.2);' +
      'background:rgba(10,15,35,0.7);backdrop-filter:blur(8px);' +
      'color:#fff;font-size:' + (isMobile ? '0.68rem' : '0.78rem') + ';font-weight:600;cursor:pointer;' +
      'transition:all 0.2s;letter-spacing:0.5px;';

    // ホバー効果
    btn.addEventListener('mouseenter', function() {
      this.style.background = 'rgba(255,153,0,0.3)';
      this.style.borderColor = 'rgba(255,153,0,0.5)';
    });
    btn.addEventListener('mouseleave', function() {
      this.style.background = 'rgba(10,15,35,0.7)';
      this.style.borderColor = 'rgba(255,255,255,0.2)';
    });

    // クリックで言語切替
    btn.addEventListener('click', function() {
      var current = getLang();
      var next = (current === 'ja') ? 'en' : 'ja';
      setLang(next);
      updateToggleLabel(btn);
      translatePage();
      // カスタムイベントを発火（VNエンジン等が反応できるように）
      window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: next } }));
    });

    document.body.appendChild(btn);
  }

  // ボタンのラベルを現在の言語に応じて更新
  function updateToggleLabel(btn) {
    var lang = getLang();
    btn.textContent = (lang === 'ja') ? '🌐 EN' : '🌐 日本語';
  }

  // ============================================================
  // 初期化 — DOMContentLoadedで自動実行
  // ============================================================
  function init() {
    createLangToggle();
    translatePage();
  }

  // DOMが読み込まれたら初期化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // ============================================================
  // 公開API — window.I18n として外部からアクセス可能
  // ============================================================
  window.I18n = {
    t: t,                   // 翻訳テキスト取得
    getLang: getLang,        // 現在の言語取得
    setLang: setLang,       // 言語設定
    translatePage: translatePage, // ページ全体を再翻訳
    TRANSLATIONS: TRANSLATIONS   // 辞書データ（外部から追加可能）
  };

})();
