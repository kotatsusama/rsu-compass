// ============================================================
// Chapter 2: 申告の迷宮 — 確定申告って必要？
// ============================================================
//
// vn-engine.js が読み込むシナリオデータ。
// type: dialog（会話）, info（解説パネル）, quiz（クイズ）
// 登場キャラクター: mint, senpai, kotatsu
// ============================================================

const CH2_DATA = {
  id: 'ch2',
  title: '申告の迷宮 — 確定申告って必要？',
  scenes: [
    // --- イントロ: こたつが不安を感じるシーン ---
    {
      type: 'dialog',
      background: 'ch2-home-desk',
      characters: [
        { id: 'kotatsu', position: 'center' }
      ],
      speaker: 'kotatsu',
      text: 'RSUがvestしたのはいいけど…確定申告って必要なのかな？会社員なのに？なんか難しそうで怖い…'
    },
    {
      type: 'dialog',
      background: 'ch2-home-desk',
      characters: [
        { id: 'kotatsu', position: 'right' },
        { id: 'mint', position: 'left' }
      ],
      speaker: 'mint',
      text: 'こたつくん、困ってるみたいね。私はミント、税務アドバイザーよ。RSUと確定申告の関係を一緒に整理していきましょう。'
    },
    {
      type: 'dialog',
      background: 'ch2-home-desk',
      characters: [
        { id: 'kotatsu', position: 'right' },
        { id: 'mint', position: 'left' }
      ],
      speaker: 'kotatsu',
      text: 'ミントさん！助かります。そもそも会社員でも確定申告が必要になるケースがあるんですか？'
    },
    {
      type: 'dialog',
      background: 'ch2-home-desk',
      characters: [
        { id: 'kotatsu', position: 'right' },
        { id: 'mint', position: 'left' }
      ],
      speaker: 'mint',
      text: 'もちろん。普通の会社員なら年末調整だけで済むことが多いけど、RSUを受け取っている人は話が違うの。いくつかの条件に当てはまると確定申告が必須になるのよ。'
    },

    // --- 確定申告が必要な条件 ---
    {
      type: 'info',
      background: 'ch2-home-desk',
      characters: [
        { id: 'mint', position: 'center' }
      ],
      title: '📋 会社員でも確定申告が必要なケース',
      text: '以下のいずれかに該当する場合、確定申告が必要：\\n\\n① 給与収入が2,000万円を超える\\n② 給与所得・退職所得以外の所得が年間20万円を超える\\n③ 外国税額控除を受けたい場合\\n④ 2カ所以上から給与を受けている\\n⑤ 医療費控除やふるさと納税（6自治体以上）を適用したい\\n\\n※ RSU保有者は②と③に該当するケースが非常に多い！'
    },
    {
      type: 'dialog',
      background: 'ch2-home-desk',
      characters: [
        { id: 'kotatsu', position: 'right' },
        { id: 'mint', position: 'left' }
      ],
      speaker: 'kotatsu',
      text: '②の「20万円を超える所得」って、RSUのvestで発生するんですか？'
    },
    {
      type: 'dialog',
      background: 'ch2-home-desk',
      characters: [
        { id: 'kotatsu', position: 'right' },
        { id: 'mint', position: 'left' }
      ],
      speaker: 'mint',
      text: 'いい質問ね。RSUのvest自体は「給与所得」として会社が源泉徴収してくれるの。でも、源泉徴収額と実際に納めるべき税額に差額が発生するケースがあるわ。また、vestした株を売却して利益が出た場合は「譲渡所得」になるから、これが20万円を超えれば確定申告が必要よ。'
    },

    // --- RSUは給与所得 ---
    {
      type: 'info',
      background: 'ch2-home-desk',
      characters: [
        { id: 'mint', position: 'center' }
      ],
      title: '💰 RSUは「給与所得」— 源泉徴収との差額問題',
      text: 'RSUがvestすると「給与所得」として課税される。\\n\\n会社はSell to Coverで源泉徴収してくれるが…\\n\\n【差額が発生する主な理由】\\n・源泉徴収の税率は「概算」（約40〜50%）\\n・実際の税率は年間の総所得で決まる累進税率\\n・為替レートの差（vest日のTTMと実際の売却レート）\\n・外国税額控除を適用すると還付が発生する\\n\\n→ 源泉徴収だけでは過不足が出るため、確定申告で精算が必要！'
    },

    // --- クイズ1: 確定申告が必要なケース ---
    {
      type: 'quiz',
      background: 'ch2-home-desk',
      characters: [
        { id: 'mint', position: 'center' }
      ],
      speaker: 'mint',
      question: '次のうち、会社員がRSUに関連して確定申告が必要になるケースとして「正しくない」ものはどれ？',
      options: [
        '外国税額控除を適用したい場合',
        'RSUのvestによる給与所得の源泉徴収に過不足がある場合',
        'RSU株を売却して20万円超の譲渡益が出た場合',
        'RSUをGrantされた（付与された）時点'
      ],
      correct: 3,
      explanation: 'Grant（付与）の時点では課税イベントは発生しません。確定申告が必要になるのはVest時の源泉徴収精算、売却益の申告、外国税額控除の適用時です。Grantはあくまで「将来株をあげる」という約束であり、この時点では所得は発生していません。'
    },

    // --- センパイの体験談 ---
    {
      type: 'dialog',
      background: 'ch2-home-desk',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: 'あ、こたつくん。確定申告の話してるの？私も最初は何も知らなくてさ、1年目の確定申告を完全にスルーしちゃったんだよね…'
    },
    {
      type: 'dialog',
      background: 'ch2-home-desk',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: 'えっ！？スルーしたらどうなるんですか？'
    },
    {
      type: 'dialog',
      background: 'ch2-home-desk',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: '後から税務署から「お尋ね」が来たの…。無申告加算税とか延滞税がかかる可能性もあるから、絶対に期限内に出そうね。あと、外国税額控除を申告しなかったから、還付されるはずのお金を取り逃がしてたの。もったいなかった…'
    },

    // --- 確定申告の時期 ---
    {
      type: 'info',
      background: 'ch2-tax-office',
      characters: [
        { id: 'mint', position: 'center' }
      ],
      title: '📅 確定申告の時期',
      text: '確定申告の期間：毎年2月16日〜3月15日\\n\\n【重要スケジュール】\\n・1月〜2月上旬: 必要書類を収集\\n・2月16日: 確定申告受付開始\\n・3月15日: 確定申告期限（厳守！）\\n・3月15日: 所得税の納付期限\\n・6月頃: 住民税の通知（確定申告の内容が反映）\\n\\n※ 申告期限を過ぎると無申告加算税（5〜20%）が発生\\n※ 還付申告の場合は1月1日から提出可能（5年以内ならOK）\\n\\n対象期間: その年の1月1日〜12月31日の所得を翌年に申告'
    },

    // --- クイズ2: 確定申告の時期 ---
    {
      type: 'quiz',
      background: 'ch2-tax-office',
      characters: [
        { id: 'mint', position: 'center' }
      ],
      speaker: 'mint',
      question: '2024年にvestしたRSUの確定申告はいつ行う？',
      options: [
        '2024年2月16日〜3月15日',
        '2024年12月31日まで',
        '2025年2月16日〜3月15日',
        'vest日から30日以内'
      ],
      correct: 2,
      explanation: '確定申告はその年（1月1日〜12月31日）の所得を翌年の2月16日〜3月15日に申告します。2024年にvestしたRSUは、2025年の確定申告期間に申告します。「翌年の2/16〜3/15」と覚えましょう。'
    },

    // --- 必要書類の説明 ---
    {
      type: 'dialog',
      background: 'ch2-tax-office',
      characters: [
        { id: 'kotatsu', position: 'right' },
        { id: 'mint', position: 'left' }
      ],
      speaker: 'kotatsu',
      text: '確定申告に必要な書類って何があるんですか？集めるの大変そう…'
    },
    {
      type: 'dialog',
      background: 'ch2-tax-office',
      characters: [
        { id: 'kotatsu', position: 'right' },
        { id: 'mint', position: 'left' }
      ],
      speaker: 'mint',
      text: '早めに準備すれば大丈夫。1月中に揃えておくのがベストね。主に3つのソースから書類を集めるの。'
    },
    {
      type: 'info',
      background: 'ch2-tax-office',
      characters: [
        { id: 'mint', position: 'center' }
      ],
      title: '📄 確定申告に必要な書類',
      text: '【会社から入手】\\n① 源泉徴収票（年末に会社から発行）\\n  → RSUの給与所得額が記載されている\\n\\n【Morgan Stanleyから入手】\\n② 取引レポート（Transaction Report）\\n  → vest日の株価、株数、Sell to Cover情報\\n③ 確認ステートメント（Confirmation Statement）\\n  → 売却時の約定情報\\n\\n【自分で計算・準備】\\n④ 外国税額控除の証明書類\\n  → Morgan Stanleyの税務レポートに米国源泉徴収額が記載\\n⑤ マイナンバーカードまたは通知カード\\n⑥ 為替レート情報（TTMレート）\\n  → みずほ銀行等のヒストリカルデータ'
    },

    // --- クイズ3: 必要書類 ---
    {
      type: 'quiz',
      background: 'ch2-tax-office',
      characters: [
        { id: 'mint', position: 'center' }
      ],
      speaker: 'mint',
      question: 'RSUの確定申告で「Morgan Stanleyから入手する」書類として正しいものはどれ？',
      options: [
        '源泉徴収票',
        '取引レポート（vest日の株価・株数情報）',
        'マイナンバーカード',
        '住民税の決定通知書'
      ],
      correct: 1,
      explanation: 'Morgan Stanleyからは「取引レポート（Transaction Report）」を入手します。ここにvest日の株価、株数、Sell to Coverの詳細が記載されています。源泉徴収票は会社から、マイナンバーカードは自分で準備するものです。'
    },

    // --- e-Tax vs 紙の申告 ---
    {
      type: 'dialog',
      background: 'ch2-tax-office',
      characters: [
        { id: 'kotatsu', position: 'right' },
        { id: 'mint', position: 'left' }
      ],
      speaker: 'kotatsu',
      text: '書類が揃ったら、実際どうやって申告するんですか？税務署に行くんですか？'
    },
    {
      type: 'dialog',
      background: 'ch2-tax-office',
      characters: [
        { id: 'kotatsu', position: 'right' },
        { id: 'mint', position: 'left' }
      ],
      speaker: 'mint',
      text: '今は2つの方法があるわ。e-Tax（電子申告）と紙の申告ね。RSUの申告はe-Taxを強くオススメするわよ。'
    },
    {
      type: 'info',
      background: 'ch2-tax-office',
      characters: [
        { id: 'mint', position: 'center' }
      ],
      title: '💻 e-Tax vs 紙の確定申告',
      text: '【e-Tax（電子申告）のメリット】\\n✅ 自宅から24時間提出可能\\n✅ 還付が早い（約3週間 vs 紙は1〜2ヶ月）\\n✅ 添付書類の提出省略が可能\\n✅ 青色申告特別控除が最大65万円\\n✅ 計算ミスを自動チェック\\n\\n【e-Taxに必要なもの】\\n・マイナンバーカード + スマホ（またはICカードリーダー）\\n・e-Taxの利用者識別番号\\n\\n【紙の申告のメリット】\\n✅ PCやスマホに不慣れでもOK\\n✅ 税務署の窓口で相談しながら作成可能\\n\\n【紙のデメリット】\\n❌ 税務署の混雑（2〜3月は大行列）\\n❌ 還付に時間がかかる\\n❌ 書類を全て手書き or 印刷して郵送'
    },

    // --- クイズ4: e-Tax ---
    {
      type: 'quiz',
      background: 'ch2-tax-office',
      characters: [
        { id: 'mint', position: 'center' }
      ],
      speaker: 'mint',
      question: 'e-Tax（電子申告）のメリットとして「正しくない」ものはどれ？',
      options: [
        '自宅から24時間いつでも提出できる',
        '還付金の振込が紙申告より早い（約3週間）',
        '税理士への相談が無料で付いてくる',
        '添付書類の提出を省略できるものがある'
      ],
      correct: 2,
      explanation: 'e-Taxには税理士相談サービスは含まれていません。e-Taxのメリットは、24時間提出可能、還付が早い（約3週間）、添付書類省略可能、計算の自動チェックなどです。税理士への相談は別途自分で依頼する必要があります。'
    },

    // --- 外国税額控除の説明 ---
    {
      type: 'dialog',
      background: 'ch2-home-desk',
      characters: [
        { id: 'kotatsu', position: 'right' },
        { id: 'mint', position: 'left' }
      ],
      speaker: 'kotatsu',
      text: 'さっきから出てくる「外国税額控除」って何ですか？名前からして難しそう…'
    },
    {
      type: 'dialog',
      background: 'ch2-home-desk',
      characters: [
        { id: 'kotatsu', position: 'right' },
        { id: 'mint', position: 'left' }
      ],
      speaker: 'mint',
      text: '名前は難しそうだけど、考え方はシンプルよ。AmazonはアメリカのIRS（米国国税庁）にも税金を払っているの。つまりあなたのRSUには日本とアメリカの両方で税金がかかっているのよ。'
    },
    {
      type: 'info',
      background: 'ch2-home-desk',
      characters: [
        { id: 'mint', position: 'center' }
      ],
      title: '🌐 外国税額控除とは？',
      text: '【二重課税の問題】\\nRSUがvestすると…\\n・アメリカ: 連邦税が源泉徴収される（約22〜37%）\\n・日本: 給与所得として課税される\\n\\n→ 同じ所得に2カ国で課税＝「二重課税」\\n\\n【外国税額控除の仕組み】\\n確定申告で「アメリカで払った税金」を日本の税金から差し引ける制度。\\n\\n具体例:\\n・米国で徴収された税額: 50万円\\n・日本の所得税額: 200万円\\n→ 外国税額控除を申告すると、200万−50万＝150万円に軽減！\\n\\n※ 控除限度額があるため全額控除できない場合もある\\n※ 確定申告しないと還付されない＝申告必須の理由！'
    },
    {
      type: 'dialog',
      background: 'ch2-home-desk',
      characters: [
        { id: 'kotatsu', position: 'right' },
        { id: 'mint', position: 'left' }
      ],
      speaker: 'kotatsu',
      text: 'つまり、確定申告しないとアメリカで払った分がそのまま損になっちゃうってことですか！？'
    },
    {
      type: 'dialog',
      background: 'ch2-home-desk',
      characters: [
        { id: 'kotatsu', position: 'right' },
        { id: 'mint', position: 'left' }
      ],
      speaker: 'mint',
      text: 'その通り！外国税額控除は確定申告でしか適用できないの。だからRSUを持っている社員にとって確定申告は「義務」であると同時に「お金を取り戻すチャンス」でもあるのよ。'
    },

    // --- クイズ5: 外国税額控除 ---
    {
      type: 'quiz',
      background: 'ch2-home-desk',
      characters: [
        { id: 'mint', position: 'center' }
      ],
      speaker: 'mint',
      question: '外国税額控除について正しい説明はどれ？',
      options: [
        'アメリカに住んでいる人だけが使える制度',
        '日本とアメリカの二重課税を解消するため、米国で払った税金を日本の税金から差し引ける',
        '年末調整で自動的に適用される',
        '一度申告すれば翌年以降は自動適用される'
      ],
      correct: 1,
      explanation: '外国税額控除は、国際的な二重課税を解消する制度です。日本に住む人が海外で課税された場合、確定申告で申請することで日本の所得税から外国税額を控除できます。年末調整では適用できず、毎年の確定申告が必要です。'
    },

    // --- センパイの外国税額控除体験 ---
    {
      type: 'dialog',
      background: 'ch2-home-desk',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: '私、最初の年に外国税額控除を知らなくて申告しなかったんだよね。後で計算したら30万円以上損してた…。5年以内なら更正の請求ができるから取り戻せたけどさ。'
    },
    {
      type: 'dialog',
      background: 'ch2-home-desk',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'kotatsu',
      text: '30万円！？それは大きい…。絶対に申告します！'
    },

    // --- クイズ6: 源泉徴収と確定申告の関係 ---
    {
      type: 'quiz',
      background: 'ch2-home-desk',
      characters: [
        { id: 'mint', position: 'center' }
      ],
      speaker: 'mint',
      question: 'RSUのvest時に会社がSell to Coverで源泉徴収しているのに、確定申告が必要になる理由として最も適切なものは？',
      options: [
        'Sell to Coverは税金を全く払っていないから',
        '源泉徴収額は概算であり、実際の年間所得に基づく正確な税額との差額精算が必要だから',
        '源泉徴収はアメリカの税金だけで、日本の税金は払っていないから',
        '会社が源泉徴収を間違えることが多いから'
      ],
      correct: 1,
      explanation: 'Sell to Coverによる源泉徴収は「概算」の税率で行われます。実際の税額は年間の総所得によって決まる累進税率で計算されるため、源泉徴収額との差額が発生します。また、外国税額控除は確定申告でしか適用できません。そのため確定申告で正確な税額を精算する必要があるのです。'
    },

    // --- まとめ・チェックリスト ---
    {
      type: 'dialog',
      background: 'ch2-home-desk',
      characters: [
        { id: 'kotatsu', position: 'right' },
        { id: 'mint', position: 'left' }
      ],
      speaker: 'mint',
      text: 'では最後に、今日学んだことをまとめましょう。確定申告マスターへの第一歩ね！'
    },
    {
      type: 'info',
      background: 'ch2-home-desk',
      characters: [
        { id: 'mint', position: 'center' }
      ],
      title: '✅ Chapter 2 まとめ',
      text: '【RSU保有者の確定申告チェックリスト】\\n\\n□ RSUがvestしたら確定申告が必要と認識する\\n□ 外国税額控除で還付を受けるために申告する\\n□ 申告期間は翌年2/16〜3/15（早めに準備！）\\n□ 源泉徴収票をAmazonから受け取る\\n□ Morgan Stanleyの取引レポートをダウンロード\\n□ e-Taxでの電子申告がオススメ\\n□ 為替レート（TTM）を確認・記録する\\n\\n次のChapterでは、Morgan Stanleyの画面操作を学ぶよ！'
    },

    // --- クイズ7: 総合理解 ---
    {
      type: 'quiz',
      background: 'ch2-tax-office',
      characters: [
        { id: 'mint', position: 'center' }
      ],
      speaker: 'mint',
      question: '以下のうち、RSU保有者が確定申告する最大のメリットはどれ？',
      options: [
        '会社での評価が上がる',
        '外国税額控除により二重課税分の還付を受けられる',
        '住民税が免除される',
        'RSUの追加付与を受けられる'
      ],
      correct: 1,
      explanation: 'RSU保有者にとって確定申告の最大のメリットは「外国税額控除」です。アメリカで源泉徴収された税金を日本の所得税から差し引くことで、二重課税分の還付を受けられます。これは確定申告でしか適用できないため、申告しないと数十万円単位で損をする可能性があります。'
    },

    // --- エンディング ---
    {
      type: 'dialog',
      background: 'ch2-home-desk',
      characters: [
        { id: 'kotatsu', position: 'right' },
        { id: 'mint', position: 'left' }
      ],
      speaker: 'kotatsu',
      text: 'ミントさん、ありがとうございます！確定申告って「やらなきゃ損する」ものなんですね。外国税額控除は絶対に申告します！'
    },
    {
      type: 'dialog',
      background: 'ch2-home-desk',
      characters: [
        { id: 'kotatsu', position: 'right' },
        { id: 'mint', position: 'left' }
      ],
      speaker: 'mint',
      text: 'その意気よ！次はMorgan Stanleyの画面で実際にどこから書類をダウンロードするか、マネーに教えてもらいましょう。実践が大事だからね。'
    },
    {
      type: 'dialog',
      background: 'ch2-home-desk',
      characters: [
        { id: 'senpai', position: 'left' },
        { id: 'kotatsu', position: 'right' }
      ],
      speaker: 'senpai',
      text: '頑張ってね、こたつくん！分からないことがあったらいつでも聞いてね。私の失敗を繰り返さないようにね！笑'
    },
    {
      type: 'dialog',
      background: 'ch2-home-desk',
      characters: [
        { id: 'kotatsu', position: 'center' }
      ],
      speaker: 'kotatsu',
      text: 'はい！次はMorgan Stanleyの操作ですね。行ってきます！'
    }
  ]
};
