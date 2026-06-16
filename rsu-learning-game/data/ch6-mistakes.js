// ============================================================
// Chapter 6: 失敗道場 — よくあるRSUの落とし穴
// ============================================================
//
// vn-engine.js が読み込むシナリオデータ。
// type: dialog（会話）, info（解説パネル）, quiz（クイズ）
// 登場キャラクター: fuji, senpai, kotatsu
// ============================================================

const CH6_DATA = {
  id: 'ch6',
  title: '失敗道場 — よくあるRSUの落とし穴',
  scenes: [
    // === イントロ ===
    {
      type: 'dialog',
      background: 'ch6-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'fuji',
      text: 'よく戻ってきたな弟子よ。今日の稽古は「失敗」から学ぶ。先人たちが踏んだ地雷を、お前は踏むなよ。'
    },
    {
      type: 'dialog',
      background: 'ch6-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: '地雷…！怖いですけど、しっかり学びます！'
    },
    {
      type: 'dialog',
      background: 'ch6-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'senpai', position: 'center' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: '私も最初はいくつかやらかしちゃったの…。一緒に聞こう。'
    },

    // === 落とし穴1: 確定申告忘れ ===
    {
      type: 'info',
      background: 'ch6-mistakes',
      characters: [
        { id: 'fuji', position: 'center' }
      ],
      title: '⚠️ 落とし穴①: 確定申告を忘れる',
      text: 'RSUがVestすると「給与所得」が発生する。\\n\\n会社が源泉徴収していても、年収2,000万円超や\\n給与以外の所得20万円超なら確定申告が必要。\\n\\n▼ 忘れた場合のペナルティ:\\n・無申告加算税: 最大20%\\n・延滞税: 年率最大14.6%\\n・悪質な場合は重加算税40%\\n\\n「知らなかった」は通用しない！'
    },
    {
      type: 'dialog',
      background: 'ch6-mistakes',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'fuji',
      text: '税務署は甘くない。RSUの記録は会社から税務署に報告されておる。逃げ場はないと心得よ。'
    },
    {
      type: 'quiz',
      background: 'ch6-mistakes',
      characters: [
        { id: 'fuji', position: 'center' }
      ],
      speaker: 'fuji',
      question: '確定申告を期限内に行わなかった場合、課されるペナルティはどれか？',
      options: [
        '延滞税のみ',
        '無申告加算税＋延滞税',
        '住民税の増額のみ',
        '特にペナルティはない'
      ],
      correct: 1,
      explanation: '期限後申告には「無申告加算税」（最大20%）と「延滞税」（年率最大14.6%）の両方が課されます。悪質な場合はさらに重加算税も。'
    },

    // === 落とし穴2: Sell to Coverで完了と思い込む ===
    {
      type: 'info',
      background: 'ch6-mistakes',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      title: '⚠️ 落とし穴②: Sell to Coverだけで安心する',
      text: 'Sell to Cover = Vest時に税金分の株を自動売却する仕組み。\\n\\nしかしこれは「米国源泉徴収」と「日本の概算源泉」のみ。\\n\\n▼ Sell to Coverでカバーされないもの:\\n・確定申告による所得税の精算\\n・住民税（翌年6月〜課税）\\n・売却益が出た場合の譲渡所得税\\n\\n「自動で引かれたから全部OK」は大きな誤解！'
    },
    {
      type: 'dialog',
      background: 'ch6-dojo',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: '私も最初「自動で税金引かれてるし大丈夫でしょ」って思ってたの…。住民税の請求が来て焦ったわ。'
    },
    {
      type: 'quiz',
      background: 'ch6-dojo',
      characters: [
        { id: 'fuji', position: 'center' }
      ],
      speaker: 'fuji',
      question: 'Sell to Coverでカバーされないものはどれか？',
      options: [
        '米国の連邦税源泉徴収',
        '翌年の住民税',
        'Vest時の株式売却手数料',
        'Morgan Stanleyの口座維持費'
      ],
      correct: 1,
      explanation: '住民税は翌年6月から課税されるため、Sell to Coverの対象外です。Vest額が大きいと翌年の住民税が数十万円単位で増えることもあります。'
    },

    // === 落とし穴3: 外国税額控除の申請忘れ ===
    {
      type: 'info',
      background: 'ch6-mistakes',
      characters: [
        { id: 'fuji', position: 'center' }
      ],
      title: '⚠️ 落とし穴③: 外国税額控除を申請しない',
      text: 'RSUのVest時・売却時に米国で源泉徴収された税金は、\\n確定申告で「外国税額控除」を申請すると取り戻せる。\\n\\n▼ 申請しないとどうなる？\\n・日米で二重課税されたまま放置\\n・年間数万〜数十万円の損失\\n\\n▼ 必要書類:\\n・Morgan Stanleyの年間取引報告書\\n・Tax Statement（1042-S等）\\n\\n申請しなければ1円も戻らない。自動還付はない！'
    },
    {
      type: 'quiz',
      background: 'ch6-mistakes',
      characters: [
        { id: 'fuji', position: 'center' }
      ],
      speaker: 'fuji',
      question: '外国税額控除について正しい記述はどれか？',
      options: [
        '会社が自動で申請してくれる',
        '確定申告で自分で申請する必要がある',
        '日本居住者には適用されない',
        '米国で課税されていれば自動還付される'
      ],
      correct: 1,
      explanation: '外国税額控除は確定申告時に自分で申請しないと適用されません。自動還付の仕組みはなく、申告しなければ二重課税のままです。'
    },

    // === 落とし穴4: W-8BEN更新忘れ ===
    {
      type: 'info',
      background: 'ch6-mistakes',
      characters: [
        { id: 'fuji', position: 'center' }
      ],
      title: '⚠️ 落とし穴④: W-8BENの更新を忘れる',
      text: 'W-8BEN = 米国の非居住者が提出する源泉徴収軽減のための書類。\\n\\n▼ 有効期限: 署名日から3年間\\n\\n▼ 更新を忘れると？\\n・日米租税条約の軽減税率（10%）が適用されない\\n・配当やRSU売却益に30%課税される\\n・差額の20%分が余計に引かれる\\n\\nMorgan Stanleyから更新通知が来るが、見逃す人が多い！'
    },
    {
      type: 'dialog',
      background: 'ch6-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'fuji',
      text: 'W-8BENの期限切れは痛恨の一撃だ。10%で済むところが30%…財布に致命傷を負うぞ。カレンダーに登録しておけ！'
    },
    {
      type: 'quiz',
      background: 'ch6-dojo',
      characters: [
        { id: 'fuji', position: 'center' }
      ],
      speaker: 'fuji',
      question: 'W-8BENの更新を忘れた場合、米国での源泉徴収税率はどうなるか？',
      options: [
        '0%（免除される）',
        '10%（条約税率のまま）',
        '20%に上がる',
        '30%に上がる'
      ],
      correct: 3,
      explanation: 'W-8BENが失効すると日米租税条約の軽減税率（10%）が適用されず、デフォルトの30%が源泉徴収されます。有効期限は署名日から3年です。'
    },

    // === 落とし穴5: 退職時RSU失効 ===
    {
      type: 'info',
      background: 'ch6-mistakes',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      title: '⚠️ 落とし穴⑤: 退職時に未Vest RSUが消える',
      text: 'RSUは「在籍していること」がVest条件。\\n\\n▼ 退職するとどうなる？\\n・未VestのRSUは全て失効（没収）\\n・すでにVest済みの株は保持できる\\n・退職日によっては直近のVest分を逃す\\n\\n▼ 例: 4年Vestスケジュールで2年目に退職\\n→ 残り約50%のRSUが消滅\\n\\n転職を考えるとき、次のVest日も確認すべし！'
    },
    {
      type: 'dialog',
      background: 'ch6-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'senpai', position: 'center' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'fuji',
      text: '転職の話が出たとき「あと1ヶ月でVestなのに…」と嘆く者を何人も見てきた。タイミングを制する者がRSUを制する。'
    },
    {
      type: 'quiz',
      background: 'ch6-dojo',
      characters: [
        { id: 'fuji', position: 'center' }
      ],
      speaker: 'fuji',
      question: '退職時のRSUについて正しいのはどれか？',
      options: [
        '未VestのRSUは退職後6ヶ月以内にVestされる',
        '未VestのRSUは全て失効する',
        '退職金としてRSUの現金相当額が支払われる',
        '転職先にRSUがそのまま引き継がれる'
      ],
      correct: 1,
      explanation: '未VestのRSUは退職と同時に失効（没収）されます。Vest済みの株は保持できますが、未Vest分は一切受け取れません。退職タイミングの検討材料として重要です。'
    },

    // === 落とし穴6: 住民税パニック ===
    {
      type: 'info',
      background: 'ch6-mistakes',
      characters: [
        { id: 'senpai', position: 'center' }
      ],
      title: '⚠️ 落とし穴⑥: 翌年の住民税通知でパニック',
      text: 'RSUのVestで所得が増えると、翌年6月の住民税に反映される。\\n\\n▼ なぜパニックになるか？\\n・住民税は「前年所得」に基づき翌年課税\\n・RSUで年収が大幅増 → 住民税も大幅増\\n・特別徴収（給与天引き）の額が急増して驚く\\n\\n▼ 対策:\\n・Vest額から住民税分（約10%）を事前に確保\\n・普通徴収を選べば一括/4分割払いも可能\\n\\n「去年の稼ぎの税金が今年来る」を忘れるな！'
    },
    {
      type: 'dialog',
      background: 'ch6-dojo',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: '6月に届く住民税の通知書見て「え、月の手取りこんなに減るの！？」ってなったの…。心の準備が大事よ。'
    },
    {
      type: 'dialog',
      background: 'ch6-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'fuji',
      text: 'Vest額の約10%は住民税用に確保しておけ。これが師範からの最後の教えだ。備えあれば憂いなし！'
    },

    // === 総合クイズ ===
    {
      type: 'dialog',
      background: 'ch6-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'fuji',
      text: 'さて弟子よ、6つの落とし穴を学んだな。最後に総仕上げの問いを出す。心して答えよ！'
    },
    {
      type: 'quiz',
      background: 'ch6-dojo',
      characters: [
        { id: 'fuji', position: 'center' }
      ],
      speaker: 'fuji',
      question: '住民税について正しいのはどれか？',
      options: [
        'RSUの住民税はVest時に自動で天引きされる',
        '住民税は前年所得に基づき翌年6月から課税される',
        '外国株の所得には住民税は課からない',
        '確定申告すれば住民税は免除される'
      ],
      correct: 1,
      explanation: '住民税は前年（1〜12月）の所得に基づき、翌年6月から課税されます。RSUで所得が増えた翌年は住民税が大幅に上がるため、事前の資金確保が重要です。'
    },

    // === エンディング ===
    {
      type: 'dialog',
      background: 'ch6-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'senpai', position: 'center' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'fuji',
      text: 'よくぞ全ての落とし穴を学んだ。お前はもう同じ過ちは犯すまい。これにて失敗道場、免許皆伝とする！'
    },
    {
      type: 'dialog',
      background: 'ch6-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'senpai', position: 'center' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'ありがとうございます師範！確定申告忘れない、Sell to Coverだけで安心しない、W-8BEN更新する…全部覚えました！'
    },
    {
      type: 'dialog',
      background: 'ch6-dojo',
      characters: [
        { id: 'fuji', position: 'left' },
        { id: 'senpai', position: 'center' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: '失敗から学ぶのが一番身になるよね。私もW-8BENのカレンダーリマインダー設定しなきゃ…。'
    }
  ]
};
