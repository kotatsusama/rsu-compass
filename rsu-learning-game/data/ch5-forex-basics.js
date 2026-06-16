// ============================================================
// Chapter 5: タイガー道場・為替の試練
// ============================================================
//
// vn-engine.js が読み込むシナリオデータ。
// type: dialog（会話）, info（解説パネル）, quiz（クイズ）
// 登場キャラクター: fuji, kotatsu
// ============================================================

const CH5_DATA = {
  id: 'ch5',
  title: 'タイガー道場・為替の試練',
  scenes: [
    // === イントロ: 道場入門 ===
    {
      type: 'dialog',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'fuji',
      text: 'よく来たな弟子よ。ここはタイガー道場…RSUの「為替」を叩き込む修行の場だ。覚悟はいいか？'
    },
    {
      type: 'dialog',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'ふじ姉師範！よろしくお願いします！…あの、為替ってRSUに関係あるんですか？'
    },
    {
      type: 'dialog',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'fuji',
      text: '大アリだ！AmazonのRSUはドル建てだ。だがお前が税金を払うのは「円」だろう？ドルから円に換算するとき、為替レートが全てを左右する。これを知らずにRSUは語れん。'
    },

    // === セクション1: RSUと為替レートの関係 ===
    {
      type: 'info',
      background: 'ch5-forex',
      characters: [
        { id: 'fuji', position: 'center' }
      ],
      title: '📖 RSUと為替レートの関係',
      text: 'AmazonのRSU（AMZN株）は米ドル建て。\\n\\n日本の税務申告では全て「円」で計算する必要がある。\\n\\n▼ 為替が関わるポイント:\\n① Vest時 → ドル建て株価を円換算 → 給与所得額が決まる\\n② 売却時 → ドル建て売却額を円換算 → 譲渡所得を計算\\n\\nつまり「同じ$200の株」でも、為替レート次第で税額が大きく変わる！'
    },
    {
      type: 'dialog',
      background: 'ch5-forex',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'え、株価が同じでも為替で金額が変わるんですか！？'
    },
    {
      type: 'dialog',
      background: 'ch5-forex',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'fuji',
      text: 'そうだ。例えば$200の株が1ドル=150円なら30,000円、1ドル=120円なら24,000円だ。同じ株なのに6,000円も差が出る。これが為替の力だ。修行の第一歩、しかと心に刻め！'
    },

    // === クイズ1: RSUと為替の基本 ===
    {
      type: 'quiz',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'center' }
      ],
      speaker: 'fuji',
      question: '【修行その一】AmazonのRSUを日本で確定申告する際、なぜ為替レートが重要なのか？',
      options: [
        'RSUの付与数が為替で変動するから',
        'ドル建ての株価・売却額を円換算して申告する必要があるから',
        'Morgan Stanleyの手数料が為替で変わるから',
        '為替差益には税金がかからないから'
      ],
      correct: 1,
      explanation: '日本の確定申告は全て「円」で行います。ドル建てのRSU（株価・売却額）は為替レートで円換算して申告するため、レートが税額に直接影響します。RSUの付与「株数」自体は為替に影響されません。'
    },

    // === セクション2: TTMとは ===
    {
      type: 'dialog',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'fuji',
      text: 'さて弟子よ、次の修行だ。為替レートにも色々あるが、確定申告で使う特別なレートがある。それが「TTM」だ！'
    },
    {
      type: 'info',
      background: 'ch5-forex',
      characters: [
        { id: 'fuji', position: 'center' }
      ],
      title: '📖 TTM（Telegraphic Transfer Middle rate）',
      text: 'TTM = 電信仲値（対顧客電信売買相場の仲値）\\n\\n▼ 為替レートの種類:\\n・TTS（売レート）… 銀行がドルを「売る」レート（顧客が円→ドル）\\n・TTB（買レート）… 銀行がドルを「買う」レート（顧客がドル→円）\\n・TTM（仲値）… TTSとTTBの中間値\\n\\n▼ 確定申告での使い方:\\n国税庁は「TTM（仲値）」を使って換算することを原則としている。\\n\\n▼ どこで確認する？:\\n三菱UFJ銀行の公表する対顧客電信売買相場（TTM）が一般的に使われる。'
    },
    {
      type: 'dialog',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'TTS、TTB、TTM…3つもあるんですね。確定申告ではTTMを使えばいいんですね！'
    },
    {
      type: 'dialog',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'fuji',
      text: 'その通りだ。TTMは売りと買いの中間、つまり最も公平なレートだ。国税庁もこれを推奨している。三菱UFJ銀行のWebサイトで過去のTTMを調べられるぞ。'
    },

    // === クイズ2: TTM ===
    {
      type: 'quiz',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'center' }
      ],
      speaker: 'fuji',
      question: '【修行その二】確定申告でRSUの円換算に原則使用する為替レートはどれか？',
      options: [
        'TTS（対顧客電信売相場）',
        'TTB（対顧客電信買相場）',
        'TTM（対顧客電信売買相場の仲値）',
        'その日のYahoo!ファイナンスのレート'
      ],
      correct: 2,
      explanation: '国税庁は原則として「TTM（電信売買相場の仲値）」を使用するよう定めています。TTSは円→ドル変換時、TTBはドル→円変換時に使うレートですが、確定申告での外貨建て所得の換算にはTTMを使います。'
    },

    // === セクション3: Vest時のTTM換算 ===
    {
      type: 'dialog',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'fuji',
      text: 'よし弟子よ、ここからが本番の修行だ。Vest時にどうやって給与所得額が決まるか、実例で叩き込む！'
    },
    {
      type: 'info',
      background: 'ch5-forex',
      characters: [
        { id: 'fuji', position: 'center' }
      ],
      title: '📖 Vest時の円換算 → 給与所得',
      text: '▼ 計算式:\\n給与所得額 = Vest時の株価（USD） × 株数 × Vest日のTTM\\n\\n▼ 例:\\nVest日の株価: $200\\nVest株数: 5株\\nVest日のTTM: 150円/ドル\\n\\n給与所得額 = $200 × 5株 × 150円 = 150,000円\\n\\n※ この金額に対して所得税・住民税がかかる\\n※ 会社がvest時に一部を源泉徴収（sell to cover）するのが一般的'
    },
    {
      type: 'dialog',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: '$200 × 5株 × 150円で15万円…なるほど、vest日のTTMがポイントなんですね。'
    },
    {
      type: 'dialog',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'fuji',
      text: 'そうだ。vest「日」のTTMだ。前日でも翌日でもない。その日のレートが全てを決める。Morgan Stanleyの明細にはドル建て金額が載っているが、申告時は自分でTTMを調べて円換算する必要があるぞ。'
    },

    // === セクション4: 円安 vs 円高のインパクト ===
    {
      type: 'dialog',
      background: 'ch5-forex',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'fuji',
      text: '修行だ！同じ株でも為替次第でどれだけ差が出るか…具体例で体に覚え込ませる！'
    },
    {
      type: 'info',
      background: 'ch5-forex',
      characters: [
        { id: 'fuji', position: 'center' }
      ],
      title: '📖 円安 vs 円高 — 給与所得への影響',
      text: '▼ 条件: $200 × 5株 = $1,000（ドル建て同額）\\n\\n【円安のケース】TTM = 150円/ドル\\n給与所得 = $1,000 × 150 = 150,000円\\n→ 税金も多くなる 😓\\n\\n【円高のケース】TTM = 120円/ドル\\n給与所得 = $1,000 × 120 = 120,000円\\n→ 税金は少なくなる 😊\\n\\n▼ 差額: 30,000円（税率30%なら約9,000円の税差）\\n\\n⚠️ 円安 = 円換算額が大きい = 税金が高い\\n⚠️ 円高 = 円換算額が小さい = 税金が安い'
    },
    {
      type: 'dialog',
      background: 'ch5-forex',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: '3万円も違う！円安のときにvestすると税金が増えるのか…これは痛いですね。'
    },
    {
      type: 'dialog',
      background: 'ch5-forex',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'fuji',
      text: 'そうだ。ただしvest日は自分では選べない。スケジュール通りに自動でvestする。だからこそ「為替リスクを知っておく」ことが大事なのだ。知った上で備える…それが道場の教えだ。'
    },

    // === クイズ3: 円安・円高の影響 ===
    {
      type: 'quiz',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'center' }
      ],
      speaker: 'fuji',
      question: '【修行その三】$200×5株のRSUがvestした。TTMが150円の場合と120円の場合、給与所得額の差はいくらか？',
      options: [
        '10,000円',
        '20,000円',
        '30,000円',
        '50,000円'
      ],
      correct: 2,
      explanation: '$200×5株=$1,000。TTM150円の場合: $1,000×150=150,000円。TTM120円の場合: $1,000×120=120,000円。差額は150,000-120,000=30,000円です。円安ほど円換算額が大きくなり、税負担も増えます。'
    },

    // === クイズ4: 円安の意味 ===
    {
      type: 'quiz',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'center' }
      ],
      speaker: 'fuji',
      question: '【修行その四】RSUのvest時に「円安」だった場合、日本での税務上の影響はどうなるか？',
      options: [
        '給与所得の円換算額が小さくなり、税金が減る',
        '給与所得の円換算額が大きくなり、税金が増える',
        '為替は税金に影響しない',
        '円安の時はRSUの付与株数が減る'
      ],
      correct: 1,
      explanation: '円安（例:1ドル=150円）の場合、同じドル金額でも円換算すると金額が大きくなります。RSUのvest時給与所得は「ドル建て株価×TTM」で計算されるため、円安=円換算額UP=税金UP。付与株数は為替に影響されません。'
    },

    // === セクション5: Vest時と売却時の為替差 ===
    {
      type: 'dialog',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'fuji',
      text: 'さて弟子よ、ここから上級の修行に入る。vest時と売却時、為替が両方に絡む…「譲渡所得への為替影響」だ。'
    },
    {
      type: 'info',
      background: 'ch5-forex',
      characters: [
        { id: 'fuji', position: 'center' }
      ],
      title: '📖 Vest時と売却時の為替差 → 譲渡所得',
      text: '▼ 譲渡所得の計算（円建て）:\\n譲渡所得 = 売却額（円） − 取得費（円） − 手数料（円）\\n\\n・取得費 = Vest時の株価（USD） × Vest日のTTM\\n・売却額 = 売却時の株価（USD） × 売却日のTTM\\n\\n▼ 例:\\nVest時: $200 × TTM150円 = 取得費 30,000円/株\\n売却時: $220 × TTM140円 = 売却額 30,800円/株\\n\\n譲渡所得 = 30,800 − 30,000 = 800円/株\\n\\n⚠️ 株価は$20上がったのに、円高になったため\\n円建ての利益はわずか800円に。\\n逆に円安が進めば、株価横ばいでも円建て利益が出ることも！'
    },
    {
      type: 'dialog',
      background: 'ch5-forex',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'うわ、株価が上がったのに円高で利益が減った…！逆もあり得るんですね。為替って怖い…'
    },
    {
      type: 'dialog',
      background: 'ch5-forex',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'fuji',
      text: 'その通りだ。RSUを保有している間は「株価変動リスク」と「為替変動リスク」の二重リスクを背負っている。これを理解することが修行の核心だ！'
    },

    // === クイズ5: 譲渡所得と為替 ===
    {
      type: 'quiz',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'center' }
      ],
      speaker: 'fuji',
      question: '【修行その五】Vest時: $200, TTM=150円。売却時: $200（株価変動なし）, TTM=160円。この場合の1株あたり譲渡所得はいくらか？',
      options: [
        '0円（株価が変わっていないから）',
        '2,000円の利益',
        '2,000円の損失',
        '10円の利益'
      ],
      correct: 1,
      explanation: '取得費=$200×150円=30,000円。売却額=$200×160円=32,000円。譲渡所得=32,000-30,000=2,000円の利益。株価（ドル建て）は変わっていなくても、円安が進んだことで円建てでは利益が発生します。この「為替差益」にも課税されます。'
    },

    // === セクション6: 為替レートの確認方法 ===
    {
      type: 'dialog',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'fuji',
      text: 'よし弟子よ、ここからは実践の修行だ。実際に確定申告するとき、TTMをどこで確認するか教える。'
    },
    {
      type: 'info',
      background: 'ch5-forex',
      characters: [
        { id: 'fuji', position: 'center' }
      ],
      title: '📖 確定申告でのTTM確認方法',
      text: '▼ 推奨ソース:\\n三菱UFJ銀行「外国為替相場」ページ\\nhttps://www.bk.mufg.jp/gdocs/kinri/list_j/kinri/kawase.html\\n\\n▼ 確認手順:\\n① 三菱UFJ銀行のWebサイトにアクセス\\n② 「外国為替相場」→「過去の為替相場」を選択\\n③ Vest日または売却日の日付でTTM（仲値）を確認\\n④ 土日祝の場合は、直前の営業日のレートを使用\\n\\n▼ 注意点:\\n・必ず「Vest日当日」のレートを使う\\n・Morgan Stanleyの明細に記載のレートとは異なる場合がある\\n・国税庁は三菱UFJ銀行のTTMを認めている'
    },
    {
      type: 'dialog',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: '三菱UFJ銀行のサイトでTTMを確認すればいいんですね。土日の場合は前の営業日…メモメモ。'
    },
    {
      type: 'dialog',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'fuji',
      text: 'よいぞ。Morgan Stanleyの明細にもレートは出ているが、あくまで参考値だ。確定申告に使うのは三菱UFJ銀行公表のTTM。ここを間違えると修正申告の羽目になるぞ！'
    },

    // === クイズ6: TTM確認方法 ===
    {
      type: 'quiz',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'center' }
      ],
      speaker: 'fuji',
      question: '【修行その六】RSUのvest日が土曜日だった場合、確定申告で使うTTMはどの日のものか？',
      options: [
        '翌月曜日のTTM',
        '直前の金曜日（営業日）のTTM',
        '土曜日はvestしないので該当しない',
        'その週の平均レート'
      ],
      correct: 1,
      explanation: 'TTMは銀行営業日にのみ公表されます。vest日が土日祝の場合は、直前の営業日のTTMを使用します。通常、土曜日のvestなら直前の金曜日のレートを使います。なお実際にはvestは営業日に行われることが多いですが、制度上はこのルールを覚えておきましょう。'
    },

    // === セクション7: 為替リスク管理 ===
    {
      type: 'dialog',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'fuji',
      text: '最後の修行だ弟子よ！為替リスクとどう向き合うか…実戦で使える知恵を授ける。'
    },
    {
      type: 'info',
      background: 'ch5-forex',
      characters: [
        { id: 'fuji', position: 'center' }
      ],
      title: '📖 為替リスク管理の基本',
      text: '▼ 即売り（Vest後すぐ売却）の場合:\\n・為替リスク: 最小限（Vest日≒売却日でレート差なし）\\n・株価リスク: 最小限\\n・メリット: 確実に利益確定、計算もシンプル\\n・デメリット: 株価上昇の恩恵を受けられない\\n\\n▼ 保有する場合:\\n・為替リスク: 大きい（Vest〜売却の間にレートが変動）\\n・株価リスク: 大きい\\n・メリット: 株価上昇＋円安なら大きなリターン\\n・デメリット: 株価下落＋円高で二重の損失も\\n\\n▼ リスク管理のポイント:\\n・生活費に必要な分は即売りが安全\\n・保有する場合は「いくらまで下がっても耐えられるか」を事前に決める\\n・為替と株価、2つの変数があることを常に意識する'
    },
    {
      type: 'dialog',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: '即売りなら為替リスクはほぼなし…保有するなら株と為替の二重リスク。なるほど、だからvestしたらすぐ売る人が多いんですね。'
    },
    {
      type: 'dialog',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'fuji',
      text: 'その通りだ。即売りは「確実性」、保有は「可能性」だ。どちらが正解ということはない。大事なのはリスクを理解した上で自分の判断で選ぶことだ。それが道場の教えの真髄よ！'
    },

    // === クイズ7: 為替リスク管理 ===
    {
      type: 'quiz',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'center' }
      ],
      speaker: 'fuji',
      question: '【最終修行】RSUをvest後に保有し続ける場合に背負うリスクとして正しいものはどれか？',
      options: [
        '株価変動リスクのみ',
        '為替変動リスクのみ',
        '株価変動リスクと為替変動リスクの両方',
        'vest後は一切リスクはない'
      ],
      correct: 2,
      explanation: 'RSUがvestした後も保有し続ける場合、①株価の変動リスク（ドル建て株価が上下する）と②為替変動リスク（ドル円レートが変わる）の二重リスクを背負います。即売り（vest直後に売却）すればこの両方のリスクを最小化できます。'
    },

    // === エンディング ===
    {
      type: 'dialog',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'fuji',
      text: 'よくぞ全ての修行を乗り越えた弟子よ！為替の基本はこれで身についたはずだ。'
    },
    {
      type: 'dialog',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'ありがとうございます師範！TTMの確認方法も、円安円高の影響も、よくわかりました！'
    },
    {
      type: 'dialog',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'fuji',
      text: 'うむ。だが修行はまだ続く…次の「タイガー道場・実践編」では、実際の計算問題や間違い探しで実力を試す。覚悟しておけ！'
    },
    {
      type: 'info',
      background: 'ch5-dojo',
      characters: [
        { id: 'fuji', position: 'center' }
      ],
      title: '🎉 Chapter 5 クリア！',
      text: '【学んだこと まとめ】\\n\\n✅ RSUはドル建て → 日本の申告は円建て → 為替レートが重要\\n✅ 確定申告にはTTM（電信売買相場の仲値）を使用\\n✅ Vest日のTTMで給与所得額が決まる\\n✅ 円安 = 円換算額UP = 税金UP\\n✅ 保有中は株価+為替の二重リスク\\n✅ TTMは三菱UFJ銀行のWebサイトで確認\\n✅ 即売り=リスク最小 / 保有=リターンの可能性+リスク大\\n\\n→ 次回: Chapter 6「タイガー道場・実践編」'
    }
  ]
};
