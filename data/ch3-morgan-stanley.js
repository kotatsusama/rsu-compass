// ============================================================
// Chapter 3: Morgan Stanleyの試練
// ============================================================
//
// vn-engine.js が読み込むシナリオデータ。
// type: dialog（会話）, info（解説パネル）, quiz（クイズ）
// 登場キャラクター: money, kotatsu
// ============================================================

const CH3_DATA = {
  id: 'ch3',
  title: 'Morgan Stanleyの試練',
  scenes: [
    // --- イントロ ---
    {
      type: 'dialog',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'money',
      text: 'やあ、こたつくん。ボクはマネー。Morgan Stanley At Workのナビゲーターさ。今日はRSUを管理するプラットフォームの使い方を教えてあげるよ。'
    },
    {
      type: 'dialog',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'マネーさん！よろしくお願いします。RSUがvestしたらMorgan Stanleyで管理するって聞いたんですけど、何から始めればいいのか全然わからなくて…'
    },
    {
      type: 'dialog',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'money',
      text: '大丈夫。一つずつ一緒に見ていこう。まずは「Morgan Stanley At Workって何？」ってところからだね。'
    },

    // --- セクション1: Morgan Stanley At Workとは ---
    {
      type: 'info',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'center' }
      ],
      title: '🏦 Morgan Stanley At Work とは',
      text: 'AmazonがRSU管理のために提携している証券プラットフォーム。\\n\\n・vestしたAmazon株はここに入庫される\\n・株の保有状況、Vest履歴をすべて確認できる\\n・株の売却もここから行う\\n・税務書類のダウンロードもここから\\n\\nURL: stockplan.morganstanley.com\\n\\n※AmazonのPeopleSoft（社内システム）とは別サービス。'
    },
    {
      type: 'dialog',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'なるほど、RSUの「お財布」みたいなものですね。vestした株はここに届くと。'
    },
    {
      type: 'dialog',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'money',
      text: 'そうそう！いい例えだね。じゃあ最初のステップ、アカウントセットアップから見ていこう。'
    },

    // --- セクション2: 初回ログイン・アカウントセットアップ ---
    {
      type: 'info',
      background: 'ch3-login',
      characters: [
        { id: 'money', position: 'center' }
      ],
      title: '🔑 初回ログイン・アカウントセットアップ',
      text: '【セットアップ手順】\\n\\n① Amazonから届くWelcomeメール内のリンクをクリック\\n② Employee ID と 個人情報（SSN相当＝マイナンバー）で本人確認\\n③ ユーザーID・パスワードを設定\\n④ セキュリティ質問を3つ設定\\n⑤ 二段階認証（SMS or 認証アプリ）を有効化\\n\\n⚠️ 注意: 初回vestの数週間前には必ず完了しておくこと！\\nvestした株が入庫されても、アカウント未設定だと確認できない。'
    },
    {
      type: 'dialog',
      background: 'ch3-login',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'vest前にセットアップしておかないとダメなんですね。早めにやっておきます！'
    },
    {
      type: 'dialog',
      background: 'ch3-login',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'money',
      text: 'そう。「vest日に初めてログインしようとしてパスワードがわからない！」って焦る人、毎回いるからね。余裕をもって準備しよう。'
    },

    // --- クイズ1: Morgan Stanley At Workの役割 ---
    {
      type: 'quiz',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'center' }
      ],
      speaker: 'money',
      question: 'Morgan Stanley At Workの主な役割として「正しくない」ものはどれ？',
      options: [
        'vestしたAmazon株の保有・管理',
        'RSUのGrant（付与）申請を行う',
        '株の売却注文を出す',
        '税務書類をダウンロードする'
      ],
      correct: 1,
      explanation: 'Grant（付与）はAmazonの人事・報酬システム側で決定されるもので、Morgan Stanley At Workで申請するものではありません。Morgan Stanleyはvestした株の管理・売却・税務書類取得に使います。'
    },

    // --- セクション3: ダッシュボードの見方 ---
    {
      type: 'dialog',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'money',
      text: 'じゃあログインしたあとの画面、ダッシュボードの見方を説明するよ。'
    },
    {
      type: 'info',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'center' }
      ],
      title: '📊 ダッシュボードの主要セクション',
      text: '【Holdings（保有株一覧）】\\n・現在保有しているAmazon株の数量と時価\\n・Sell to Cover後に手元に残った株がここに表示\\n\\n【Grant Summary（付与サマリー）】\\n・過去に付与されたRSUの一覧\\n・各Grantの付与日、総株数、vest済み株数\\n\\n【Vesting Schedule（Vest予定）】\\n・次回以降のvest日と株数の予定表\\n・「次にいつ、何株vestするか」がひと目でわかる\\n\\n【Account Value（口座時価総額）】\\n・保有株の現在価値（USD & JPY概算）'
    },
    {
      type: 'dialog',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'Grant Summaryで全体の付与状況を見て、Vesting Scheduleで次のvestを確認、Holdingsで今持ってる株がわかるんですね。'
    },
    {
      type: 'dialog',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'money',
      text: 'パーフェクト！その流れで把握すればOKだよ。ちなみにダッシュボードの数字はリアルタイムの株価と連動しているから、市場が開いてる間は常に変動するよ。'
    },

    // --- クイズ2: ダッシュボード ---
    {
      type: 'quiz',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'center' }
      ],
      speaker: 'money',
      question: '「次にいつ、何株vestするか」を確認できるダッシュボードのセクションはどれ？',
      options: [
        'Holdings（保有株一覧）',
        'Transaction History（取引履歴）',
        'Vesting Schedule（Vest予定）',
        'Account Value（口座時価総額）'
      ],
      correct: 2,
      explanation: 'Vesting Scheduleでは今後のvest予定日と株数が一覧で確認できます。Holdingsは「今持っている株」、Transaction Historyは「過去の取引」を確認する画面です。'
    },

    // --- セクション4: Vest履歴の確認方法 ---
    {
      type: 'dialog',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'money',
      text: '次に、確定申告で超重要な「Vest履歴」の確認方法だよ。ここの情報は税務申告に必須だからね。'
    },
    {
      type: 'info',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'center' }
      ],
      title: '📋 Vest履歴の確認方法',
      text: '【確認手順】\\nStock Plan > My Account > Transaction History\\n\\n【各Vest記録に含まれる情報】\\n・Vest日（権利確定日）\\n・Vest株数\\n・Vest時の株価（Fair Market Value = FMV）\\n・Sell to Coverで売却された株数\\n・Sell to Cover時の売却価格\\n・源泉徴収された税額\\n・手元に残った株数（Net Shares）\\n\\n⚠️ 確定申告時にはこのFMV（公正市場価格）が「取得価額」の基準になる！'
    },
    {
      type: 'dialog',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'FMVってvest時の株価ですよね。確定申告で使うデータがここに全部あるんですね！'
    },
    {
      type: 'dialog',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'money',
      text: 'そのとおり。特にSell to Cover時の売却価格は「譲渡所得」の計算で必要だから、確定申告シーズンの前にスクショ撮っておくのがおすすめだよ。'
    },

    // --- クイズ3: Vest履歴 ---
    {
      type: 'quiz',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'center' }
      ],
      speaker: 'money',
      question: 'Vest履歴で確認できる「FMV（Fair Market Value）」とは何のこと？',
      options: [
        'Grant時点でのAmazon株価',
        'Vest日時点でのAmazon株価（公正市場価格）',
        '売却時点でのAmazon株価',
        'AmazonがIRで発表する目標株価'
      ],
      correct: 1,
      explanation: 'FMV（Fair Market Value＝公正市場価格）はvest日時点の市場株価です。これが確定申告における「取得価額」の基準となります。Grant時の株価ではないので注意しましょう。'
    },

    // --- セクション5: 売却方法の種類 ---
    {
      type: 'dialog',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'money',
      text: '次は株を売る時の話。vestして手元に残った株を売りたい時、2つの注文方法があるよ。'
    },
    {
      type: 'info',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'center' }
      ],
      title: '💰 売却注文の種類',
      text: '【Market Order（成行注文）】\\n・現在の市場価格ですぐに売却\\n・メリット: 確実に約定する（ほぼ即座に売れる）\\n・デメリット: 価格を指定できない（急変動時は注意）\\n\\n【Limit Order（指値注文）】\\n・指定した価格以上になったら売却\\n・メリット: 希望価格で売れる\\n・デメリット: 株価が指定価格に達しないと約定しない\\n・有効期限を設定する必要あり（Day / GTC等）\\n\\n⚠️ 初心者はMarket Orderが安心。「この価格で売りたい」が明確ならLimit Orderを活用しよう。'
    },
    {
      type: 'dialog',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'Market Orderは「今すぐ売りたい」時、Limit Orderは「この値段以上で売りたい」時ってことですね。'
    },
    {
      type: 'dialog',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'money',
      text: 'その通り！あと注意点として、米国市場の取引時間は日本時間の23:30〜翌6:00（夏時間は22:30〜翌5:00）だよ。市場が閉まっている時間に出したMarket Orderは翌営業日の始値で約定するから気をつけてね。'
    },

    // --- クイズ4: 売却方法 ---
    {
      type: 'quiz',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'center' }
      ],
      speaker: 'money',
      question: 'Limit Order（指値注文）の特徴として正しいものはどれ？',
      options: [
        '現在の市場価格で即座に約定する',
        '指定価格に達しないと約定しないが、希望価格で売れる',
        'Amazon株専用の特別な注文方式',
        '注文後24時間以内に必ず約定する'
      ],
      correct: 1,
      explanation: 'Limit Order（指値注文）は「この価格以上なら売る」と指定する注文方法です。希望価格で売れるメリットがありますが、株価が指定価格に達しない場合は約定しません。すぐに売りたい場合はMarket Orderを使います。'
    },

    // --- セクション6: W-8BENフォームの重要性 ---
    {
      type: 'dialog',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'money',
      text: 'さて、ここからが実は一番大事かもしれない話。「W-8BEN」って聞いたことある？'
    },
    {
      type: 'dialog',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'W-8BEN…？初めて聞きました。何の書類ですか？'
    },
    {
      type: 'info',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'center' }
      ],
      title: '📄 W-8BEN フォーム（超重要！）',
      text: '【W-8BENとは】\\n米国の非居住者が提出する税務フォーム。\\n日米租税条約に基づき、米国での源泉徴収税率を軽減するための書類。\\n\\n【なぜ必要？】\\n・未提出の場合: 配当金に米国で30%課税される\\n・提出済みの場合: 日米租税条約により10%に軽減\\n\\n【提出タイミング】\\n・Morgan Stanleyのアカウント開設時に電子提出\\n・有効期限: 3年間（期限切れ前に再提出が必要）\\n\\n⚠️ 期限切れに気づかず放置すると30%課税に戻る！\\nカレンダーにリマインダーを設定しておこう。'
    },
    {
      type: 'dialog',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: '30%と10%じゃ全然違いますね！これ出し忘れたら大損じゃないですか…'
    },
    {
      type: 'dialog',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'money',
      text: 'そう。例えば配当金が$1,000だった場合、W-8BEN未提出なら$300も税金取られるけど、提出済みなら$100で済む。$200の差だよ。しかもこの米国で課税された分は、日本の確定申告で「外国税額控除」として取り戻せるんだ。'
    },

    // --- クイズ5: W-8BEN ---
    {
      type: 'quiz',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'center' }
      ],
      speaker: 'money',
      question: 'W-8BENフォームを提出しない場合、配当金にかかる米国源泉徴収税率は何%？',
      options: [
        '0%（日本居住者は免除）',
        '10%（日米租税条約の軽減税率）',
        '20%',
        '30%（未提出時のデフォルト税率）'
      ],
      correct: 3,
      explanation: 'W-8BENを提出しないと、米国のデフォルト源泉徴収税率30%が適用されます。日米租税条約を適用するにはW-8BENの提出が必須で、提出すると10%に軽減されます。3年ごとに再提出が必要な点も要注意です。'
    },

    // --- クイズ6: W-8BENの有効期限 ---
    {
      type: 'quiz',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'center' }
      ],
      speaker: 'money',
      question: 'W-8BENフォームの有効期限は何年間？',
      options: [
        '1年間（毎年更新が必要）',
        '2年間',
        '3年間（期限前に再提出が必要）',
        '無期限（一度出せばOK）'
      ],
      correct: 2,
      explanation: 'W-8BENの有効期限は3年間です。期限切れになると自動的に30%の源泉徴収に戻ってしまいます。Morgan Stanley At Work上でステータスを定期確認し、期限切れ前に電子的に再提出しましょう。'
    },

    // --- セクション7: 税務書類のダウンロード ---
    {
      type: 'dialog',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'money',
      text: '最後に、確定申告に必須の税務書類のダウンロード方法を教えるよ。年に1回のことだけど、知っておかないと困るからね。'
    },
    {
      type: 'info',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'center' }
      ],
      title: '📥 税務書類のダウンロード',
      text: '【確認手順】\\nStock Plan > My Account > Tax Documents\\n\\n【主な書類】\\n\\n① Gain/Loss Report（損益計算書）\\n  ・売却した株の取得価額と売却価額\\n  ・確定申告の「譲渡所得」計算に必須\\n\\n② Transaction Summary（取引明細）\\n  ・年間のすべてのvest・売却の一覧\\n  ・日付、株数、価格が一目でわかる\\n\\n③ 1042-S（米国源泉徴収票）\\n  ・配当に対する米国源泉徴収税の証明書\\n  ・外国税額控除の申告に必要\\n\\n⚠️ 書類は通常1〜2月に前年分が発行される。\\n確定申告期限（3月15日）に間に合うよう早めにダウンロード！'
    },
    {
      type: 'dialog',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'Gain/Loss Reportが売買の損益、1042-Sが配当の源泉徴収…。確定申告にはこの2つが特に大事ってことですね。'
    },
    {
      type: 'dialog',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'money',
      text: 'バッチリ！あと一つアドバイス。Morgan Stanleyの書類は英語だから、数字の読み方に注意してね。例えば「1,234.56」はカンマが千の位の区切り、ピリオドが小数点だよ。日本と逆だから間違えやすいんだ。'
    },

    // --- クイズ7: 税務書類 ---
    {
      type: 'quiz',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'center' }
      ],
      speaker: 'money',
      question: '確定申告で「外国税額控除」を申告する際に必要なMorgan Stanleyの書類はどれ？',
      options: [
        'Gain/Loss Report（損益計算書）',
        'Transaction Summary（取引明細）',
        '1042-S（米国源泉徴収票）',
        'W-8BEN（非居住者申告書）'
      ],
      correct: 2,
      explanation: '1042-Sは米国で源泉徴収された税額の証明書です。日本の確定申告で「外国税額控除」を申請し、米国で課税された分を取り戻す際にこの書類が必要になります。Gain/Loss Reportは譲渡所得の計算に使う書類です。'
    },

    // --- エンディング ---
    {
      type: 'dialog',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'money',
      text: 'おめでとう、こたつくん！Morgan Stanley At Workの基本操作は完璧だね。まとめると…'
    },
    {
      type: 'info',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'center' }
      ],
      title: '✅ Chapter 3 まとめ',
      text: '① Morgan Stanley At Work = RSU管理の証券プラットフォーム\\n② 初回ログインはvest前に余裕をもって完了\\n③ ダッシュボードでGrant・Vest予定・保有株を確認\\n④ Vest履歴のFMVは確定申告の基準価格\\n⑤ 売却はMarket Order（即売）とLimit Order（指値）の2種類\\n⑥ W-8BENは必ず提出（配当税率30%→10%に軽減）\\n⑦ 税務書類は1〜2月にダウンロード（確定申告に必須）'
    },
    {
      type: 'dialog',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'マネーさん、ありがとうございます！特にW-8BENの話は知らなかったら大変なことになるところでした。'
    },
    {
      type: 'dialog',
      background: 'ch3-computer',
      characters: [
        { id: 'money', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'money',
      text: 'いつでも聞いてね。次はセンパイが「売るか持つか」の戦略を教えてくれるよ。Morgan Stanleyで売却する前に、ちゃんと作戦を立てようね！'
    }
  ]
};
