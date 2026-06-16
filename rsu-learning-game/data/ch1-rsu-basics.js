// ============================================================
// Chapter 1: こたつの入社 — RSUって何？
// RSU Learning Game - ビジュアルノベル形式
// ============================================================

const CH1_DATA = {
  id: 'ch1',
  title: 'こたつの入社 — RSUって何？',
  scenes: [
    // --- イントロ ---
    {
      type: 'dialog',
      background: 'office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: 'こたつくん！入社おめでとう。KIXチームへようこそ。ところで、オファーレターに「RSU」って書いてあったの見た？'
    },
    {
      type: 'dialog',
      background: 'office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'あ、センパイ！ありがとうございます。RSU…見ました。なんか株がもらえるみたいなこと書いてありましたけど、正直よくわかってなくて…'
    },
    {
      type: 'dialog',
      background: 'office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: 'だよね。最初はみんなそうだよ。RSUはAmazonの報酬パッケージの超重要な部分だから、ちゃんと理解しておこう。私が教えてあげるね。'
    },

    // --- RSUの基本定義 ---
    {
      type: 'info',
      background: 'office',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      title: '📖 RSU = Restricted Stock Unit',
      text: '＝ 譲渡制限付き株式ユニット\\n\\nRSUは「将来、条件を満たしたら本物のAmazon株をあげるよ」という会社からの約束。\\n\\n・Grant（付与）の時点では株は「まだあなたのものじゃない」\\n・Vest（権利確定）して初めて実際の株になる\\n・Vestするまでは売ることも譲ることもできない — だから「Restricted（制限付き）」'
    },
    {
      type: 'dialog',
      background: 'office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'なるほど…つまり「もらった！」って喜んでも、すぐには使えないってことですか？'
    },
    {
      type: 'dialog',
      background: 'office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: 'そのとおり。よく「RSU 100株もらった！」って言う人いるけど、正確には「100株分のRSUを付与（Grant）された」だけ。Vestして初めてあなたの株になるの。'
    },

    // --- クイズ1: GrantとVestの違い ---
    {
      type: 'quiz',
      background: 'office',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      speaker: 'senpai',
      question: 'RSUにおける「Grant（付与）」と「Vest（権利確定）」の違いとして正しいものはどれ？',
      options: [
        'Grantで株を受け取り、Vestで売却できるようになる',
        'Grantは約束の段階で、Vestして初めて実際の株を受け取る',
        'GrantもVestも同じ意味で、会社によって呼び方が違うだけ',
        'Grantで半分の株を受け取り、Vestで残り半分を受け取る'
      ],
      correct: 1,
      explanation: 'Grantは「将来株をあげる」という約束（付与）の段階です。Vest（権利確定）して初めて実際のAmazon株があなたの証券口座に入ります。Grant時点では所有権はありません。'
    },

    // --- Vesting Scheduleの説明 ---
    {
      type: 'dialog',
      background: 'office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: 'じゃあ次に大事なのが「いつVestするか」ね。これをVesting Schedule（ベスティング・スケジュール）って言うの。'
    },
    {
      type: 'info',
      background: 'meeting-room',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      title: '📅 Vesting Schedule（権利確定スケジュール）',
      text: 'Amazonの従来型RSUスケジュール（4年間）:\\n\\n・1年目: 5%\\n・2年目: 15%\\n・3年目: 40%\\n・4年目: 40%\\n\\n※2025年以降の新規採用者は年次均等vest（毎年25%）のケースも増加中。\\n\\n3年目・4年目に大きくvestするバックロード型が特徴的。'
    },
    {
      type: 'dialog',
      background: 'meeting-room',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'えっ、1年目は5%しかもらえないんですか？けっこう少ない…'
    },
    {
      type: 'dialog',
      background: 'meeting-room',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: 'そう。だからAmazonは1-2年目にSign-on Bonusを出して補填してくれるの。で、3年目以降にドカンとvestする。長く働くインセンティブ設計ね。'
    },

    // --- クイズ2: Vesting Schedule ---
    {
      type: 'quiz',
      background: 'meeting-room',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      speaker: 'senpai',
      question: 'Amazonの従来型vestingスケジュールで、3年目と4年目の合計vest割合は？',
      options: [
        '60%',
        '70%',
        '80%',
        '55%'
      ],
      correct: 2,
      explanation: '3年目40% + 4年目40% = 80%です。Amazonのバックロード型では、付与されたRSUの8割が後半2年でvestします。'
    },

    // --- Cliffの説明 ---
    {
      type: 'dialog',
      background: 'office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: 'あと覚えておきたいのが「Cliff（クリフ）」ね。崖って意味なんだけど。'
    },
    {
      type: 'info',
      background: 'office',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      title: '🧗 Cliff（クリフ）= 1年目の崖',
      text: 'Cliffとは「最初のvestまでの待機期間」のこと。\\n\\nAmazonの場合、入社から1年経過するまで1株もvestしない。\\n\\n→ 1年未満で退職した場合、RSUは1株も受け取れない。\\n→ だから「崖から落ちる＝全部失う」というイメージ。\\n\\n※1年経過後の最初のvestが「Cliff vest」と呼ばれる。'
    },

    // --- クイズ3: Cliff ---
    {
      type: 'quiz',
      background: 'office',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      speaker: 'senpai',
      question: 'RSUの「Cliff（クリフ）」とは何のこと？',
      options: [
        '株価が急落すること',
        '入社から最初のvestまでの待機期間（この間退職すると0株）',
        'RSUの税金が急に高くなるタイミング',
        '一度にまとめてvestする大量の株のこと'
      ],
      correct: 1,
      explanation: 'Cliff＝最初のvestまでの待機期間です。Amazonでは入社1年目がcliffで、この期間に退職するとRSUは1株も受け取れません。'
    },

    // --- 課税タイミング ---
    {
      type: 'dialog',
      background: 'office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: 'そして一番大事なのが税金ね。RSUがvestした時、タダでもらえるわけじゃないの。税金がかかるのよ。'
    },
    {
      type: 'dialog',
      background: 'office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'え！税金かかるんですか？もらうだけなのに？'
    },
    {
      type: 'info',
      background: 'office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      title: '💰 Vest時の課税（超重要！）',
      text: 'RSUがvestした時点で「給与所得」として課税される。\\n\\n▶ vest日の株価 × 株数 × TTMレート ＝ 給与所得額\\n\\n適用される税金:\\n・所得税（累進税率 5%〜45%）\\n・復興特別所得税（所得税の2.1%）\\n・住民税（10%）\\n\\n※会社がSell to Cover（自動売却）で税金分を天引きしてくれる。'
    },

    // --- クイズ4: 課税タイミング ---
    {
      type: 'quiz',
      background: 'office',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      speaker: 'senpai',
      question: 'RSUの税金が発生するタイミングはいつ？',
      options: [
        'Grant（付与）された時',
        'Vest（権利確定）した時',
        '株を売却した時のみ',
        '確定申告をした時'
      ],
      correct: 1,
      explanation: 'RSUはVest時点で「給与所得」として課税されます。Grant時は非課税。売却時には別途「譲渡所得」として課税されますが、vest時の課税が最初のポイントです。'
    },

    // --- クイズ5: 適用税率 ---
    {
      type: 'quiz',
      background: 'office',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      speaker: 'senpai',
      question: 'RSUのvest時に適用される税金の組み合わせとして正しいのは？',
      options: [
        '所得税 + 消費税 + 住民税',
        '所得税 + 復興特別所得税 + 住民税',
        '譲渡所得税 + 住民税',
        '所得税のみ（住民税は翌年）'
      ],
      correct: 1,
      explanation: 'Vest時は「給与所得」として、所得税（累進5〜45%）+ 復興特別所得税（2.1%）+ 住民税（10%）が課税されます。Sell to Coverで会社が自動的に株を売って税金に充てます。'
    },

    // --- Sell to Cover説明 ---
    {
      type: 'dialog',
      background: 'office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'うわ、結構税金取られるんですね…。でも手元に現金がない時どうやって払うんですか？'
    },
    {
      type: 'dialog',
      background: 'office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: 'いい質問ね。Amazonでは「Sell to Cover」っていう仕組みがあって、vest時に自動的に一部の株を売却して税金に充ててくれるの。だから自分で現金を用意する必要はないのよ。'
    },

    // --- クイズ6: Sell to Cover ---
    {
      type: 'quiz',
      background: 'office',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      speaker: 'senpai',
      question: '「Sell to Cover」とは何のこと？',
      options: [
        '株価が下がった時に損失を補填する保険',
        'vest時に自動的に一部の株を売却し税金に充てる仕組み',
        '株を全部売却して現金化すること',
        '確定申告時に追加で株を売って税金を払うこと'
      ],
      correct: 1,
      explanation: 'Sell to Cover = vest時に税金相当分の株を自動売却し、源泉徴収として納税する仕組みです。例えば10株vestして、3株分を売却→税金に充当、残り7株が手元に残ります。'
    },

    // --- クイズ7: 総合理解 ---
    {
      type: 'quiz',
      background: 'office',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      speaker: 'senpai',
      question: '以下のうち、RSUについて「間違っている」ものはどれ？',
      options: [
        'Grant時点ではまだ自分の株ではない',
        'Vest時に給与所得として課税される',
        'Amazonの従来型は4年間で均等にvestする',
        'Cliff期間中に退職するとRSUは受け取れない'
      ],
      correct: 2,
      explanation: 'Amazonの従来型バックロードでは「5%-15%-40%-40%」で均等ではありません。3年目と4年目に大きくvestするのが特徴です（ただし近年は均等vestも増加中）。'
    },

    // --- エンディング ---
    {
      type: 'dialog',
      background: 'office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: 'よし、基本はバッチリね！次は確定申告について学ぼう。vestした株には確定申告が必要になるケースがあるからね。'
    },
    {
      type: 'dialog',
      background: 'office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'ありがとうございます、センパイ！確定申告…ちょっと怖いけど、頑張ります！'
    }
  ]
};
