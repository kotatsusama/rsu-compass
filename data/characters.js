/**
 * ============================================================
 * RSU学習ゲーム — キャラクターデータ
 * ============================================================
 * 
 * ゲームに登場する全キャラクターの定義ファイル。
 * 各キャラクターには以下の情報がある:
 *   - id: プログラム内で使う一意の識別子
 *   - name: 画面に表示される日本語名
 *   - role: キャラクターの役割説明
 *   - description: キャラクターの見た目や性格の詳細
 *   - image: 全身画像のパス（html/からの相対パス）
 *   - bust: 上半身画像のパス（会話シーンで使用）
 *   - placeholder: 画像がない場合に表示する絵文字
 *   - color: プレースホルダーの背景色
 * 
 * 画像はWebP形式で images/characters/ に配置。
 * ============================================================
 */

const CHARACTERS = {

  // ─────────────────────────────────────────
  // こたつ — プレイヤーキャラクター（新入社員）
  // ─────────────────────────────────────────
  kotatsu: {
    id: 'kotatsu',
    name: 'こたつ',
    nameEn: 'Kotatsu',
    role: '新入社員（プレイヤー）',
    description: 'KIXチームに配属されたばかりの新人。RSUのことは何もわからない。',
    image: 'images/characters/kotatsu.webp',
    bust: 'images/characters/kotatsu-bust.webp',
    placeholder: '👔',
    color: '#4A90D9'
  },

  // ─────────────────────────────────────────
  // ミント — 税務・確定申告の専門家（女性）
  // 口調: 知的で丁寧な女性語（〜よ、〜のよ、〜わ）
  // ─────────────────────────────────────────
  mint: {
    id: 'mint',
    name: 'ミント',
    nameEn: 'Mint',
    role: '税務・経理のプロ',
    description: '丸眼鏡にミントグリーンのカーディガン。確定申告や税務の専門家。',
    image: 'images/characters/mint.webp',
    bust: 'images/characters/mint-bust.webp',
    placeholder: '👓',
    color: '#7ECEC1'
  },

  // ─────────────────────────────────────────
  // センパイ — KIXチームの先輩社員（女性）
  // 口調: 親しみやすい女性語（〜の、〜ね、〜よ、私）
  // ─────────────────────────────────────────
  senpai: {
    id: 'senpai',
    name: 'センパイ',
    nameEn: 'Senpai',
    role: 'KIXチーム先輩社員',
    description: 'ベージュジャケットの頼れる先輩。RSU経験2-3年、実体験ベースでアドバイス。',
    image: 'images/characters/senpai.webp',
    bust: 'images/characters/senpai-bust.webp',
    placeholder: '👩‍💼',
    color: '#C9A96E'
  },

  // ─────────────────────────────────────────
  // マネー — 金融・投資のプロフェッショナル（男性）
  // 口調: カジュアルな男性語（ボク、〜だよ、〜さ）
  // ─────────────────────────────────────────
  money: {
    id: 'money',
    name: 'マネー',
    nameEn: 'Money',
    role: '金融・投資のプロ',
    description: 'ネイビースーツの金融プロフェッショナル。RSU・株式・資産運用の解説担当。',
    image: 'images/characters/money.webp',
    bust: 'images/characters/money-bust.webp',
    placeholder: '💼',
    color: '#2C3E50'
  },

  // ─────────────────────────────────────────
  // ふじ姉 — 為替道場の師範（女性）
  // 口調: 威厳ある師範語（弟子よ、〜だ、〜ぞ、お前）
  // ─────────────────────────────────────────
  fuji: {
    id: 'fuji',
    name: 'ふじ姉',
    nameEn: 'Master Fuji',
    role: '為替道場師範',
    description: '為替・外貨の専門家。タイガー道場で為替の厳しい特訓を行う。',
    image: 'images/characters/fuji.webp',
    bust: 'images/characters/fuji-bust.webp',
    placeholder: '🐯',
    color: '#FF6347'
  }
};

/**
 * トップ画面・結果画面で使う特別画像のパス定義
 * これらは通常のキャラクター画像とは別管理
 */
const SPECIAL_IMAGES = {
  top: 'images/special/top-visual.webp',           // トップ画面の背景画像
  result_clear: 'images/special/result-clear.webp', // クリア時の結果画像
  result_fail: 'images/special/result-fail.webp'    // 失敗時の結果画像
};
