// ============================================================
// Chapter 7: 給与明細の謎を解け
// ============================================================
//
// vn-engine.js が読み込むシナリオデータ。
// type: dialog（会話）, info（解説パネル）, quiz（クイズ）
// 登場キャラクター: mint, senpai, kotatsu
// ============================================================

const CH7_DATA = {
  id: 'ch7',
  title: '給与明細の謎を解け',
  scenes: [
    // === イントロ ===
    {
      type: 'dialog',
      background: 'ch7-hr-office',
      characters: [
        { id: 'kotatsu', position: 'center' }
      ],
      speaker: 'kotatsu',
      text: 'あれ…？今月の給与明細、手取りがいつもより少ない気がする…。課税対象額もなんか多いし…。'
    },
    {
      type: 'dialog',
      background: 'ch7-hr-office',
      characters: [
        { id: 'mint', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'mint',
      text: 'こたつくん、それはRSUがvestした月だからよ。給与明細の読み方、一緒に確認しましょうか。'
    },
    {
      type: 'dialog',
      background: 'ch7-hr-office',
      characters: [
        { id: 'mint', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'ミントさん！お願いします！なんで急に金額が増えてるのか全然わからなくて…。'
    },

    // === セクション1: Vest月の給与明細 ===
    {
      type: 'info',
      background: 'ch7-payslip',
      characters: [
        { id: 'mint', position: 'center' }
      ],
      title: '📄 Vest月の給与明細の特徴',
      text: 'RSUがvestする月は、給与明細の「課税対象額」が突然跳ね上がります。これはvest日の株価 × vest株数が給与所得として加算されるためです。実際に現金が振り込まれるわけではありませんが、税務上は「収入があった」扱いになります。'
    },
    {
      type: 'dialog',
      background: 'ch7-payslip',
      characters: [
        { id: 'mint', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'mint',
      text: '例えば、50株がvest、株価$180、為替150円なら…50 × $180 × 150 = 1,350,000円。これが通常給与に上乗せされるの。'
    },
    {
      type: 'dialog',
      background: 'ch7-payslip',
      characters: [
        { id: 'kotatsu', position: 'right' },
        { id: 'mint', position: 'left' }
      ],
      speaker: 'kotatsu',
      text: '135万円！？通常の月給に加えてそれが載るから、課税対象額が一気に膨らむんですね…。'
    },

    // === セクション2: 株式報酬の計上 ===
    {
      type: 'info',
      background: 'ch7-payslip',
      characters: [
        { id: 'mint', position: 'center' }
      ],
      title: '💰 「株式報酬」として計上',
      text: '給与明細では、RSU分は「株式報酬」「RSU」「現物給与」などの名目で表示されます。基本給や残業手当とは別の項目として記載されますが、税務上は同じ「給与所得」です。源泉徴収票の「支払金額」にも含まれます。'
    },
    {
      type: 'dialog',
      background: 'ch7-payslip',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: '私の明細だと「Stock Compensation」って英語で書いてあったの。会社によって表記が違うから、見慣れない項目があったらRSUを疑ってみてね。'
    },

    // === クイズ1 ===
    {
      type: 'quiz',
      background: 'ch7-payslip',
      characters: [
        { id: 'mint', position: 'center' }
      ],
      speaker: 'mint',
      question: 'RSUがvestした月の給与明細で、正しい説明はどれ？',
      options: [
        '課税対象額は通常月と変わらない',
        'vest分の金額が課税対象額に加算される',
        'RSU分は非課税なので明細に載らない',
        'vest株数に関係なく定額が加算される'
      ],
      correct: 1,
      explanation: 'vest日の株価 × vest株数 × 為替レートが給与所得として加算されるため、課税対象額が大きく増加します。'
    },

    // === セクション3: 源泉徴収額の計算 ===
    {
      type: 'info',
      background: 'ch7-payslip',
      characters: [
        { id: 'mint', position: 'center' }
      ],
      title: '🧮 源泉徴収額の計算',
      text: 'RSU分を含む課税対象額に対して、概算税率（所得税＋復興特別所得税）で源泉徴収されます。高額になるvest月は、累進課税により高い税率が適用されることもあり、天引き額が大きくなります。'
    },
    {
      type: 'dialog',
      background: 'ch7-payslip',
      characters: [
        { id: 'mint', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'mint',
      text: '月次の源泉徴収は「税額表」に基づく概算だから、実際の年間税額とはズレることがあるの。だから確定申告や年末調整で精算するのね。'
    },

    // === クイズ2 ===
    {
      type: 'quiz',
      background: 'ch7-payslip',
      characters: [
        { id: 'mint', position: 'center' }
      ],
      speaker: 'mint',
      question: 'vest月に源泉徴収額が増える主な理由は？',
      options: [
        'RSUには特別な固定税率が適用されるから',
        'RSU分が加算され課税対象額が増えるから',
        '社会保険料が倍になるから',
        '住民税が同月に一括徴収されるから'
      ],
      correct: 1,
      explanation: 'RSU分が給与所得に加算されて課税対象額が増えるため、源泉徴収税額も大きくなります。累進課税が適用される場合もあります。'
    },

    // === セクション4: Sell to Coverとの関係 ===
    {
      type: 'dialog',
      background: 'ch7-payslip',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: 'ここ重要なんだけど、Sell to Coverで売却された株は源泉徴収の税金を納めるためなの。つまり給与明細の天引き分を、株を売って支払ってるイメージね。'
    },
    {
      type: 'info',
      background: 'ch7-payslip',
      characters: [
        { id: 'mint', position: 'center' }
      ],
      title: '🔄 Sell to Cover の仕組み',
      text: 'Sell to Coverとは、vest時にRSU分の源泉徴収税を支払うために、vestした株の一部を自動売却する仕組みです。例: 50株vestし税率約40%なら、約20株が売却され税金に充当。手元に残るのは約30株です。給与明細上は「税金は天引き済」ということになります。'
    },

    // === クイズ3 ===
    {
      type: 'quiz',
      background: 'ch7-payslip',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      speaker: 'senpai',
      question: 'Sell to Coverの役割として正しいのは？',
      options: [
        'vest株を全て現金化して口座に振り込む',
        'RSU分の源泉徴収税を支払うために株の一部を売却する',
        '株価下落リスクを回避するための強制売却',
        '確定申告を不要にするための仕組み'
      ],
      correct: 1,
      explanation: 'Sell to Coverは、RSU vest時の源泉徴収税を支払うためにvest株の一部を自動売却する仕組みです。確定申告が不要になるわけではありません。'
    },

    // === セクション5: 年末調整でRSU分が精算されない理由 ===
    {
      type: 'dialog',
      background: 'ch7-hr-office',
      characters: [
        { id: 'kotatsu', position: 'right' },
        { id: 'mint', position: 'left' }
      ],
      speaker: 'kotatsu',
      text: '年末調整で全部精算されるなら、確定申告いらなくないですか？'
    },
    {
      type: 'dialog',
      background: 'ch7-hr-office',
      characters: [
        { id: 'mint', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'mint',
      text: 'いい質問ね。年末調整は「給与所得だけ」を対象に精算する制度。RSUを後で売却した時の譲渡所得や、外国税額控除は対象外なの。'
    },
    {
      type: 'info',
      background: 'ch7-hr-office',
      characters: [
        { id: 'mint', position: 'center' }
      ],
      title: '⚠️ 年末調整の限界',
      text: '年末調整で精算されるのは給与所得に対する所得税のみ。以下は年末調整の対象外で、確定申告が必要です：\n・RSU売却時の譲渡所得（株式売却益）\n・外国税額控除の適用\n・給与収入2,000万円超の場合\n・医療費控除などの追加控除'
    },

    // === クイズ4 ===
    {
      type: 'quiz',
      background: 'ch7-hr-office',
      characters: [
        { id: 'mint', position: 'center' }
      ],
      speaker: 'mint',
      question: '年末調整だけでは精算されないものはどれ？',
      options: [
        '基本給に対する所得税',
        '生命保険料控除',
        'RSU売却益（譲渡所得）や外国税額控除',
        '通勤手当の非課税処理'
      ],
      correct: 2,
      explanation: '年末調整は給与所得の精算制度です。RSU売却による譲渡所得や外国税額控除は対象外のため、確定申告で別途対応する必要があります。'
    },

    // === セクション6: 住民税への影響 ===
    {
      type: 'dialog',
      background: 'ch7-hr-office',
      characters: [
        { id: 'mint', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'mint',
      text: 'もう一つ注意してほしいのが住民税。RSUで所得が増えた翌年の6月から、住民税がドンと上がるの。'
    },
    {
      type: 'dialog',
      background: 'ch7-hr-office',
      characters: [
        { id: 'kotatsu', position: 'right' },
        { id: 'mint', position: 'left' }
      ],
      speaker: 'kotatsu',
      text: '翌年！？今年の所得が来年の住民税に反映されるってことですか？'
    },
    {
      type: 'info',
      background: 'ch7-hr-office',
      characters: [
        { id: 'mint', position: 'center' }
      ],
      title: '🏛️ 住民税は「後払い」',
      text: '住民税は前年の所得に基づき翌年6月〜翌々年5月に課税されます。RSUで大きな所得があった年の翌年は、住民税が大幅に増額します。所得税は源泉徴収でリアルタイムに天引きされますが、住民税は1年遅れで請求が来る点に要注意です。'
    },

    // === セクション7: 特別徴収 vs 普通徴収 ===
    {
      type: 'dialog',
      background: 'ch7-hr-office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: '住民税の払い方にも2種類あるの。給与天引きの「特別徴収」と、自分で払う「普通徴収」ね。'
    },
    {
      type: 'info',
      background: 'ch7-hr-office',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'mint', position: 'right' }
      ],
      title: '📋 特別徴収 vs 普通徴収',
      text: '■ 特別徴収：会社が給与から毎月天引き（12分割）。給与所得分は原則こちら。\n■ 普通徴収：自分で年4回（6月・8月・10月・1月）納付。確定申告で「自分で納付」を選択した分はこちら。\n\n確定申告時に「住民税の徴収方法」で普通徴収を選ぶと、RSU売却益分の住民税が会社に通知されないメリットがあります。'
    },
    {
      type: 'dialog',
      background: 'ch7-hr-office',
      characters: [
        { id: 'mint', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'mint',
      text: 'ただし注意点。給与所得分は必ず特別徴収なの。普通徴収にできるのは確定申告で追加した分（譲渡所得等）だけよ。'
    },

    // === クイズ5 ===
    {
      type: 'quiz',
      background: 'ch7-hr-office',
      characters: [
        { id: 'mint', position: 'center' }
      ],
      speaker: 'mint',
      question: '住民税の「特別徴収」と「普通徴収」について正しいのは？',
      options: [
        '特別徴収は年1回一括払い',
        '給与所得分は普通徴収も選べる',
        '特別徴収は毎月給与天引き、普通徴収は自分で年4回納付',
        '確定申告すると全額が普通徴収になる'
      ],
      correct: 2,
      explanation: '特別徴収は会社が毎月天引き（12分割）、普通徴収は自分で年4回納付です。給与所得分は原則特別徴収で、確定申告で追加した譲渡所得分などは普通徴収を選択可能です。'
    },

    // === クイズ6（追加・住民税タイミング） ===
    {
      type: 'quiz',
      background: 'ch7-hr-office',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      speaker: 'senpai',
      question: '2024年にRSUで大きな所得があった場合、住民税が増えるのはいつから？',
      options: [
        '2024年の翌月から',
        '2024年12月の年末調整時',
        '2025年6月から',
        '2026年の確定申告時'
      ],
      correct: 2,
      explanation: '住民税は前年の所得に基づき翌年6月から課税されます。2024年の所得に対する住民税は2025年6月〜2026年5月に徴収されます。'
    },

    // === エンディング ===
    {
      type: 'dialog',
      background: 'ch7-hr-office',
      characters: [
        { id: 'mint', position: 'left' },
        { id: 'senpai', position: 'center' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'なるほど…給与明細の謎が解けました！vest月に手取りが減るのも、翌年の住民税が上がるのも、全部つながってたんですね。'
    },
    {
      type: 'dialog',
      background: 'ch7-hr-office',
      characters: [
        { id: 'mint', position: 'left' },
        { id: 'senpai', position: 'center' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'mint',
      text: 'その通り。給与明細を毎月チェックする習慣をつければ、vest月の変化にも慌てずに済むわ。お疲れ様、こたつくん。'
    },
    {
      type: 'dialog',
      background: 'ch7-hr-office',
      characters: [
        { id: 'mint', position: 'left' },
        { id: 'senpai', position: 'center' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: 'これで全チャプタークリアね！RSUマスターへの道、おめでとう！'
    }
  ]
};
