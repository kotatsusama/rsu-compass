// ============================================================
// Chapter 4: 売るか持つか、それが問題だ
// ============================================================
//
// vn-engine.js が読み込むシナリオデータ。
// type: dialog（会話）, info（解説パネル）, quiz（クイズ）
// 登場キャラクター: senpai, kotatsu
// ============================================================

const CH4_DATA = {
  id: 'ch4',
  title: '売るか持つか、それが問題だ',
  scenes: [
    // === イントロ ===
    {
      type: 'dialog',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'センパイ！先月ついに初めてのVestがあったんです。Morgan Stanleyの口座にAmazon株が入ってて感動しました！'
    },
    {
      type: 'dialog',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: 'おめでとう、こたつくん。で、その株どうするか考えた？Vest後の判断はRSUで一番大事なポイントのひとつなの。'
    },
    {
      type: 'dialog',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'えっ、放っておけばいいんじゃ…？株価上がったらラッキーみたいな…'
    },
    {
      type: 'dialog',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: 'それも一つの選択肢だけど、「何もしない」も立派な投資判断なのよ。今日は「売るか持つか」をちゃんと考えてみよう。'
    },

    // === Vest後の選択肢 ===
    {
      type: 'info',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      title: '📖 Vest後の2つの選択肢',
      text: 'RSUがVestした後、あなたには大きく2つの道がある：\\n\\n① 即売り（すぐ売却）\\n→ Sell to Coverで税金分が売却された後、残りの株もすぐ売る\\n→ 現金化して確定利益を手に入れる\\n\\n② 保有し続ける\\n→ Amazon株として持ち続け、値上がり益を狙う\\n→ ただしリスクも抱え続ける\\n\\nどちらが正解かは「人による」。大事なのは意識的に判断すること。'
    },
    {
      type: 'dialog',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'Sell to Coverって何ですか？'
    },
    {
      type: 'info',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      title: '📖 Sell to Cover とは',
      text: 'Vest時に発生する所得税・住民税などの源泉徴収分を支払うため、Vestされた株の一部を自動的に売却する仕組み。\\n\\n例：10株Vestされた場合\\n→ 約4株分が税金支払いのため自動売却\\n→ 残り約6株があなたの手元に残る\\n\\nSell to Cover後に残った株を「さらに売るか、持つか」が今日のテーマ。'
    },

    // === クイズ1: Sell to Coverの理解 ===
    {
      type: 'quiz',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      speaker: 'senpai',
      question: 'Sell to Coverの目的として正しいものはどれ？',
      options: [
        'Vest時の手数料を支払うため',
        'Vest時に発生する税金（源泉徴収）を支払うため',
        '株価下落リスクを会社が回避するため',
        'Morgan Stanleyの口座維持費を払うため'
      ],
      correct: 1,
      explanation: 'Sell to Coverは、Vest時に発生する所得税・住民税等の源泉徴収分を支払うために、株の一部を自動売却する仕組みです。これにより従業員が自腹で税金を準備する必要がなくなります。'
    },

    // === 即売りのメリット・デメリット ===
    {
      type: 'dialog',
      background: 'ch4-stock-chart',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: 'じゃあまず「即売り」のメリットとデメリットを整理しよう。'
    },
    {
      type: 'info',
      background: 'ch4-stock-chart',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      title: '📖 即売りのメリット',
      text: '✅ 確実に現金化できる\\n→ Vest時点の株価で利益が確定。「もらった報酬」を確実に手にできる。\\n\\n✅ 株価下落リスクがゼロ\\n→ 売った後に株価が暴落しても影響なし。\\n\\n✅ 為替リスクも回避\\n→ ドル建て資産を円に換えるので、円高になっても損しない。\\n\\n✅ 確定申告がシンプル\\n→ Vest日と売却日がほぼ同じなので、譲渡所得がほぼゼロ。計算が簡単。'
    },
    {
      type: 'info',
      background: 'ch4-stock-chart',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      title: '📖 即売りのデメリット',
      text: '❌ 株価上昇の恩恵を受けられない\\n→ 売った後に株価が2倍になっても関係ない。\\n\\n❌ 「報酬の上乗せチャンス」を手放す\\n→ 長期保有で得られた可能性のあるリターンを諦める。\\n\\n❌ 売却のたびに為替レート・手数料の影響を受ける\\n→ タイミングによっては不利なレートで換金される場合も。'
    },

    // === 保有のリスクとリターン ===
    {
      type: 'dialog',
      background: 'ch4-stock-chart',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'じゃあ株価が上がると思うなら持ってた方がいいですよね？'
    },
    {
      type: 'dialog',
      background: 'ch4-stock-chart',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: '理屈上はね。でも「保有し続ける」にはちゃんとリスクを理解しないといけないの。ここ大事よ。'
    },
    {
      type: 'info',
      background: 'ch4-stock-chart',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      title: '📖 保有し続けるリスク',
      text: '⚠️ 株価下落リスク\\n→ Vest時$180だった株が$120に下がれば、33%の損失。\\n\\n⚠️ 為替リスク\\n→ 1ドル=150円でVest → 1ドル=130円に円高 → 円換算で目減り。\\n\\n⚠️ 集中投資リスク（★最重要★）\\n→ 給料もAmazon、RSUもAmazon、キャリアもAmazon。\\n→ 会社に何か起きたら全部が同時に影響を受ける。\\n\\n⚠️ 機会損失\\n→ 他の投資（インデックスファンド等）に回した方がリターンが良い場合も。'
    },

    // === クイズ2: 保有リスクの理解 ===
    {
      type: 'quiz',
      background: 'ch4-stock-chart',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      speaker: 'senpai',
      question: 'RSUを保有し続ける場合の「集中投資リスク」とは何を指す？',
      options: [
        '同じ銘柄を短期間に大量購入すること',
        '給料・RSU・キャリアが同一企業に依存し、リスクが偏ること',
        '投資信託を1本だけ買うこと',
        '為替ヘッジをしないこと'
      ],
      correct: 1,
      explanation: '集中投資リスクとは、収入源（給料）・資産（RSU）・人的資本（キャリア）がすべてAmazon一社に依存する状態を指します。会社の業績悪化や株価下落が発生すると、すべてが同時に影響を受けるため非常にリスクが高くなります。'
    },

    // === センパイの実体験 ===
    {
      type: 'dialog',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: '実は私、最初の2年はRSU全部持ち続けてたんだよね。'
    },
    {
      type: 'dialog',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'え、それでどうなったんですか？'
    },
    {
      type: 'dialog',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: '一時期は株価上がって嬉しかったけど、2022年に株価半分以下になって青ざめたの。給料も株も全部Amazonだから、精神的にかなりキツかった…。'
    },
    {
      type: 'dialog',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: 'それ以来、Vest後は半分売って分散投資に回すようにしてるの。全部売る必要はないけど、リスク分散は大事だって身をもって学んだわ。'
    },

    // === 集中投資リスクの深掘り ===
    {
      type: 'info',
      background: 'ch4-stock-chart',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      title: '📖 集中投資リスクの具体例',
      text: '例：資産の70%がAmazon株だった場合\\n\\n2021年末 → 2022年末の1年間：\\n・Amazon株価：約$170 → 約$85（▲50%）\\n・S&P500指数：約4,800 → 約3,840（▲20%）\\n\\n分散していれば▲20%で済んだ損失が、\\nAmazon集中だと▲50%に。\\n\\n💡 一般的なガイドライン：\\n「1銘柄に資産の10〜20%以上は集中させない」\\nという考え方が分散投資の基本。'
    },

    // === クイズ3: 集中投資 ===
    {
      type: 'quiz',
      background: 'ch4-stock-chart',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      speaker: 'senpai',
      question: '分散投資の一般的な考え方として、1銘柄への資産集中の目安は？',
      options: [
        '50%以下に抑える',
        '30%以下に抑える',
        '10〜20%以下に抑える',
        '特に制限はない'
      ],
      correct: 2,
      explanation: '一般的な分散投資のガイドラインでは、1銘柄に対する資産の集中は10〜20%以下に抑えることが推奨されます。特にRSUの場合、収入源も同じ企業であるため、より分散を意識すべきです。'
    },

    // === 譲渡所得の計算 ===
    {
      type: 'dialog',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: 'さて、ここからは「売った時の税金」の話ね。保有して後から売ると、譲渡所得が発生するの。'
    },
    {
      type: 'info',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      title: '📖 譲渡所得の計算方法',
      text: '【基本公式】\\n譲渡所得 ＝ 売却価格 − 取得価格（＝Vest時の株価）\\n\\n例：\\n・Vest時の株価：$180（取得価格）\\n・売却時の株価：$220\\n・譲渡益 = $220 − $180 = $40/株\\n\\n💡 ポイント：\\nRSUの「取得価格」は Grant日ではなく Vest日の株価。\\nVest時に給与所得として課税済みなので、\\nその時の株価が取得原価になる。\\n\\n📌 税率：\\n譲渡所得には約20.315%（所得税15.315% + 住民税5%）が課税される。'
    },
    {
      type: 'dialog',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'つまり即売りなら取得価格と売却価格がほぼ同じだから、譲渡所得はほぼゼロってことですか？'
    },
    {
      type: 'dialog',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: 'そのとおり！即売りの場合は譲渡所得がほぼ発生しないから確定申告も楽なの。保有して値上がりしてから売ると、差額分に約20%の税金がかかるのよ。'
    },

    // === クイズ4: 譲渡所得の計算 ===
    {
      type: 'quiz',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      speaker: 'senpai',
      question: 'RSUのVest時株価が$180、売却時株価が$220の場合、1株あたりの譲渡益はいくら？',
      options: [
        '$220',
        '$180',
        '$40',
        '$400'
      ],
      correct: 2,
      explanation: '譲渡益 = 売却価格 − 取得価格（Vest時の株価）= $220 − $180 = $40 です。RSUの取得価格はVest時の時価であることがポイントです。'
    },

    // === クイズ5: 取得価格の基準日 ===
    {
      type: 'quiz',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      speaker: 'senpai',
      question: 'RSUの譲渡所得を計算する際の「取得価格」は、いつの株価を基準にする？',
      options: [
        'Grant（付与）された日の株価',
        'Vest（権利確定）した日の株価',
        '入社日の株価',
        '売却を決めた日の株価'
      ],
      correct: 1,
      explanation: 'RSUの取得価格は「Vest日の株価」です。Vest時に給与所得として課税されているため、その時点の時価が取得原価（コストベース）となります。Grant日ではないので注意！'
    },

    // === 為替差益と譲渡所得 ===
    {
      type: 'dialog',
      background: 'ch4-stock-chart',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: 'さらに日本で確定申告するときは、すべて「円換算」で計算する必要があるの。ここが複雑になるポイントね。'
    },
    {
      type: 'info',
      background: 'ch4-stock-chart',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      title: '📖 為替差益と譲渡所得の関係',
      text: '【円換算での譲渡所得の計算】\\n\\n譲渡所得（円）= 売却価格（円換算）− 取得価格（円換算）\\n\\n例：\\n・Vest時：$180 × 140円 = 25,200円（取得価格）\\n・売却時：$180 × 155円 = 27,900円（売却価格）\\n\\n→ 譲渡益 = 27,900円 − 25,200円 = 2,700円\\n\\n💡 この例では株価は同じ$180なのに、\\n為替が円安に動いたことで2,700円の譲渡益が発生！\\n\\n⚠️ 株価が変わらなくても、為替変動だけで\\n課税対象の譲渡益が出ることがある。'
    },
    {
      type: 'dialog',
      background: 'ch4-stock-chart',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'えっ！株価が変わってなくても税金かかるんですか！？'
    },
    {
      type: 'dialog',
      background: 'ch4-stock-chart',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: 'そう。日本の税務は円建てで計算するからね。逆に円高になれば、ドル建てで利益が出ていても円建てでは損失になることもあるの。為替は両刃の剣よ。'
    },

    // === クイズ6: 為替と譲渡所得 ===
    {
      type: 'quiz',
      background: 'ch4-stock-chart',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      speaker: 'senpai',
      question: 'Vest時$200×140円/ドルで取得した株を、株価$200×160円/ドルで売却した場合、1株あたりの譲渡益（円）はいくら？',
      options: [
        '0円（株価が変わっていないので）',
        '2,000円',
        '4,000円',
        '28,000円'
      ],
      correct: 2,
      explanation: '取得価格 = $200 × 140円 = 28,000円、売却価格 = $200 × 160円 = 32,000円。譲渡益 = 32,000 − 28,000 = 4,000円。株価が同じでも為替変動だけで譲渡益が発生し、課税対象になります。'
    },

    // === ポートフォリオ分散の考え方 ===
    {
      type: 'dialog',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: '結局、どうするのがベストなんですか？全部売る？全部持つ？'
    },
    {
      type: 'dialog',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: '「唯一の正解」はないけど、考え方のフレームワークを教えるね。大事なのは「自分のリスク許容度」に合った判断をすることよ。'
    },
    {
      type: 'info',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      title: '📖 ポートフォリオ分散の考え方',
      text: '【判断のフレームワーク】\\n\\n① 自分の総資産に占めるAmazon株の割合を確認\\n→ 20%超なら分散を検討すべきサイン\\n\\n② ライフイベントの予定を確認\\n→ 住宅購入、結婚など近い出費があるなら現金化\\n\\n③ Amazon株への「信念」ではなく「依存度」で判断\\n→ 「上がると思う」だけで保有は投機的\\n\\n④ 分散先を決めてから売る\\n→ 売却資金の使い道：インデックスファンド、債券、現金…\\n\\n💡 よくある戦略：\\n・Vest毎に即売りし、インデックスファンドへ\\n・半分売り・半分保有でバランスを取る\\n・生活費6ヶ月分の現金を確保してから保有'
    },
    {
      type: 'dialog',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: '私は「Vest毎に半分売り、残りは次の判断タイミングまで保有」ってルールにしてるの。感情で判断しないように、ルールを事前に決めておくのがコツだよ。'
    },
    {
      type: 'dialog',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: '「株価を見てから決める」だと感情に振り回されちゃうからね。事前にルールを決めて機械的に実行するのがプロの考え方よ。'
    },

    // === クイズ7: ポートフォリオ戦略 ===
    {
      type: 'quiz',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      speaker: 'senpai',
      question: 'RSU売却戦略として、行動ファイナンスの観点から最も推奨される方法は？',
      options: [
        '株価が最高値の時に売る',
        '株価チャートを毎日見て判断する',
        '事前にルールを決め、感情に関係なく機械的に実行する',
        'SNSで他の人の判断を参考にする'
      ],
      correct: 2,
      explanation: '行動ファイナンスの研究では、人間は「損失回避バイアス」や「現状維持バイアス」により合理的な判断ができません。事前にルール（例：Vest毎に50%売却）を決めて機械的に実行することで、感情的な判断ミスを防げます。'
    },

    // === まとめ ===
    {
      type: 'info',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      title: '📝 Chapter 4 まとめ',
      text: '✅ Vest後の選択：即売り or 保有（どちらも意識的に判断）\\n\\n✅ 即売りメリット：リスク回避・確定申告が簡単\\n\\n✅ 保有リスク：株価下落・為替変動・集中投資\\n\\n✅ 集中投資リスク：給料もRSUもキャリアも同一企業は危険\\n\\n✅ 譲渡所得 = 売却価格 − 取得価格（Vest時の株価）\\n\\n✅ 為替変動だけでも譲渡益が発生する\\n\\n✅ 分散投資：1銘柄20%以下が目安\\n\\n✅ 事前にルールを決めて感情的な判断を避ける'
    },
    {
      type: 'dialog',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'ありがとうございます！僕も自分のルールを決めてみます。まずは自分の資産全体を見直すところから始めますね。'
    },
    {
      type: 'dialog',
      background: 'ch4-office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: 'その意気ね！「考えずに放置」が一番危ないから。自分で判断できるようになったこたつくんは立派よ。'
    }
  ]
};
