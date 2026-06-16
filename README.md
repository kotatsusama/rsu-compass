# 🧭 RSU Compass — RSU × 確定申告 学習ゲーム

KIXチームメンバー向け、RSUと確定申告の知識をビジュアルノベル形式で楽しく学べるWebアプリ。

## 🎮 ゲームモード

| モード | 説明 | ファイル |
|--------|------|---------|
| 🗺️ RPGモード | Ch1→Ch7ストーリーで一本道学習 | html/rpg.html |
| 📖 チャプター選択 | 好きなChだけ個別プレイ | html/chapters.html |
| 📊 シミュレーション | 実計算体験ツール | html/simulator.html |

## 🐾 キャラクター

| 名前 | 役割 | 口調 |
|------|------|------|
| こたつ | 新入社員（プレイヤー） | 丁寧語の男性 |
| センパイ | KIXチーム先輩社員 | 親しみやすい女性（〜の、〜ね、〜よ） |
| ミント | 税務アドバイザー | 知的な女性（〜よ、〜のよ、〜わ） |
| マネー | 金融・投資のプロ | カジュアルな男性（ボク、〜だよ、〜さ） |
| ふじ姉 | 為替道場師範 | 威厳ある女性師範（弟子よ、〜だ、〜ぞ） |

## 📁 フォルダ構成

```
rsu-learning-game/           （プロジェクト全体 約5MB）
├── README.md                ← このファイル
├── css/                     ← スタイルシート
│   └── vn-engine.css        ← ゲームエンジン用メインCSS
├── data/                    ← ゲームデータ（シナリオ・キャラ・背景）
│   ├── characters.js        ← キャラクター定義
│   ├── backgrounds.js       ← 背景画像定義
│   ├── ch1〜ch7-*.js        ← 各チャプターのシナリオデータ
│   └── translations-en.js   ← 英語翻訳データ
├── html/                    ← HTMLページ
│   ├── index.html           ← トップ画面（モード選択）
│   ├── rpg.html             ← RPGモード（ビジュアルノベル）
│   ├── chapters.html        ← チャプター選択画面
│   └── simulator.html       ← シミュレーションツール
├── images/                  ← 画像（全てWebP形式）
│   ├── backgrounds/         ← 背景画像（16枚）
│   ├── characters/          ← キャラ画像（10枚: 全身+バスト）
│   └── special/             ← トップ画像・結果画面・アイコン等
└── js/                      ← JavaScript
    ├── vn-engine.js          ← ビジュアルノベルエンジン（コア）
    └── i18n.js              ← 日英言語切替モジュール
```

## 📚 チャプター構成

| Ch | タイトル | 担当キャラ | 学べる内容 |
|----|----------|-----------|-----------|
| 1 | こたつの入社 — RSUって何？ | センパイ | RSUの基本、Grant/Vest、課税タイミング |
| 2 | 申告の迷宮 — 確定申告って必要？ | ミント + センパイ | 確定申告の条件、必要書類、外国税額控除 |
| 3 | Morgan Stanleyの試練 | マネー | Morgan Stanley操作、Vest履歴、W-8BEN |
| 4 | 売るか持つか、それが問題だ | センパイ | 即売りvs保有、譲渡所得、リスク分散 |
| 5 | タイガー道場・為替の試練 | ふじ姉 | TTMレート、為替影響、円換算の仕組み |
| 6 | 失敗道場 — よくあるRSUの落とし穴 | ふじ姉 + センパイ | 確定申告漏れ、W-8BEN期限切れ、住民税 |
| 7 | 給与明細の謎を解け | ミント + センパイ | 給与明細の読み方、源泉徴収、住民税 |

## 🖼️ 画像について

- 全画像は **WebP形式**（プロジェクト全体 約5MB）
- キャラクター画像: `{id}.webp`（全身）+ `{id}-bust.webp`（バスト）
- 背景画像: `ch{XX}-top.webp`（チャプタートップ）+ シーン別背景
- 画像がない場合は絵文字プレースホルダーが自動表示される

## 🛠️ 技術仕様

| 項目 | 内容 |
|------|------|
| 言語 | HTML5 + CSS3 + Vanilla JavaScript (ES5互換) |
| 外部依存 | Google Fonts (Noto Sans JP) のみ |
| ビルドツール | 不要（静的ファイルのみ） |
| データ保存 | localStorage（ブラウザ内） |
| 対応ブラウザ | Chrome, Edge, Safari, Firefox (最新版) |

## 🚀 遊び方

1. `html/index.html` をブラウザで開く
2. RPGモード or チャプター選択 を選ぶ
3. ストーリーを読みながらクイズに挑戦
4. 70%以上正解でチャプタークリア！
5. 全7チャプタークリアでRSUマスター認定 🎓

## 📝 開発者向けメモ

### シナリオデータの構造（ch*.js）

```javascript
const CH1_DATA = {
  id: 'ch1',                    // チャプターID
  title: 'タイトル文字列',        // チャプター名
  scenes: [                     // シーン配列（順番に表示される）
    {
      type: 'dialog',           // 会話シーン
      background: 'office',     // 背景ID
      characters: [{ id: 'senpai', position: 'left' }],
      speaker: 'senpai',        // 話者
      text: 'セリフの内容'
    },
    {
      type: 'info',             // 情報パネル（解説）
      title: '📖 見出し',
      text: '解説テキスト（\\nで改行）'
    },
    {
      type: 'quiz',             // クイズ
      question: '問題文',
      options: ['選択肢A', '選択肢B', '選択肢C', '選択肢D'],
      correct: 1,               // 正解のindex（0始まり）
      explanation: '解説文'
    }
  ]
};
```

### 新しいチャプターの追加方法

1. `data/ch8-xxxxx.js` を作成（上記構造に従う）
2. `html/rpg.html` の `<script>` タグに追加
3. `html/rpg.html` の `dataMap` に `8: CH8_DATA` を追加
4. `html/chapters.html` の `chapters` 配列に追加
5. `images/backgrounds/ch08-top.webp` にトップ画像を配置
