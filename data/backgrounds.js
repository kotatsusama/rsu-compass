/**
 * ============================================================
 * RSU学習ゲーム — 背景データ
 * ============================================================
 * 
 * 各シーンで使われる背景の定義ファイル。
 * 
 * 【各プロパティの意味】
 *   - id: 背景の一意な識別子（シーンデータのbackgroundフィールドで指定）
 *   - name: 管理用の日本語名（コード内でのみ参照）
 *   - image: 画像ファイルのパス（html/からの相対パス）
 *   - gradient: 画像が読めない場合のフォールバック用CSSグラデーション
 *   - label: プレースホルダー表示時のテキスト
 * 
 * 【背景の追加方法】
 * 1. images/backgrounds/ にWebP画像を配置
 * 2. このファイルに新しいエントリを追加
 * 3. シーンデータの background フィールドでIDを指定
 * ============================================================
 */

const BACKGROUNDS = {

  // ============================
  // Ch1: こたつの入社 — RSUって何？
  // ============================
  'ch1-office': {
    id: 'ch1-office',
    name: 'KIXオフィス（センパイとの出会い）',
    image: 'images/backgrounds/ch1-office.webp',
    gradient: 'linear-gradient(180deg, #2c3e50 0%, #3498db 50%, #2c3e50 100%)',
    label: '🏢 KIXオフィス'
  },
  'ch1-meeting': {
    id: 'ch1-meeting',
    name: '会議室（RSU説明）',
    image: 'images/backgrounds/ch1-meeting.webp',
    gradient: 'linear-gradient(180deg, #34495e 0%, #2c3e50 50%, #1a252f 100%)',
    label: '🪑 会議室'
  },

  // ============================
  // Ch2: 申告の迷宮
  // ============================
  'ch2-home-desk': {
    id: 'ch2-home-desk',
    name: '自宅デスク（確定申告作業）',
    image: 'images/backgrounds/ch2-home-desk.webp',
    gradient: 'linear-gradient(180deg, #1a1a2e 0%, #e67e22 30%, #d35400 100%)',
    label: '🏠 自宅デスク'
  },
  'ch2-tax-office': {
    id: 'ch2-tax-office',
    name: '税務署',
    image: 'images/backgrounds/ch2-tax-office.webp',
    gradient: 'linear-gradient(180deg, #2f4f4f 0%, #556b2f 50%, #6b8e23 100%)',
    label: '🏛️ 税務署'
  },

  // ============================
  // Ch3: Morgan Stanleyの試練
  // ============================
  'ch3-computer': {
    id: 'ch3-computer',
    name: 'PC画面（Morgan Stanley At Work）',
    image: 'images/backgrounds/ch3-computer.webp',
    gradient: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    label: '💻 Morgan Stanley画面'
  },
  'ch3-login': {
    id: 'ch3-login',
    name: 'ログイン画面',
    image: 'images/backgrounds/ch3-login.webp',
    gradient: 'linear-gradient(180deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)',
    label: '🔐 ログイン'
  },

  // ============================
  // Ch4: 売るか持つか、それが問題だ
  // ============================
  'ch4-office': {
    id: 'ch4-office',
    name: 'オフィス（売却相談）',
    image: 'images/backgrounds/ch4-office.webp',
    gradient: 'linear-gradient(180deg, #2c3e50 0%, #2980b9 50%, #1a5276 100%)',
    label: '🏢 オフィス（相談中）'
  },
  'ch4-stock-chart': {
    id: 'ch4-stock-chart',
    name: '株価チャート画面',
    image: 'images/backgrounds/ch4-stock-chart.webp',
    gradient: 'linear-gradient(180deg, #0a0a1a 0%, #1a237e 50%, #283593 100%)',
    label: '📈 株価チャート'
  },

  // ============================
  // Ch5: タイガー道場・為替編
  // ============================
  'ch5-dojo': {
    id: 'ch5-dojo',
    name: 'タイガー道場（為替特訓）',
    image: 'images/backgrounds/ch5-dojo.webp',
    gradient: 'linear-gradient(180deg, #8B0000 0%, #B22222 40%, #DC143C 100%)',
    label: '🥋 タイガー道場'
  },
  'ch5-forex': {
    id: 'ch5-forex',
    name: '為替レート表示',
    image: 'images/backgrounds/ch5-forex.webp',
    gradient: 'linear-gradient(180deg, #1a1a2e 0%, #4a148c 50%, #7b1fa2 100%)',
    label: '💱 為替レート'
  },

  // ============================
  // Ch6: 失敗道場 — よくあるRSUの落とし穴
  // ============================
  'ch6-dojo': {
    id: 'ch6-dojo',
    name: 'タイガー道場（実践特訓）',
    image: 'images/backgrounds/ch6-dojo.webp',
    gradient: 'linear-gradient(180deg, #b71c1c 0%, #d32f2f 40%, #e53935 100%)',
    label: '🥋 タイガー道場（実践）'
  },
  'ch6-mistakes': {
    id: 'ch6-mistakes',
    name: '失敗事例の巻物',
    image: 'images/backgrounds/ch6-mistakes.webp',
    gradient: 'linear-gradient(180deg, #3e2723 0%, #5d4037 50%, #795548 100%)',
    label: '📜 失敗事例'
  },

  // ============================
  // Ch7: 給与明細マスター
  // ============================
  'ch7-payslip': {
    id: 'ch7-payslip',
    name: '給与明細を見る場面',
    image: 'images/backgrounds/ch7-payslip.webp',
    gradient: 'linear-gradient(180deg, #1a237e 0%, #283593 50%, #3949ab 100%)',
    label: '📄 給与明細'
  },
  'ch7-hr-office': {
    id: 'ch7-hr-office',
    name: 'HR/経理オフィス',
    image: 'images/backgrounds/ch7-hr-office.webp',
    gradient: 'linear-gradient(180deg, #004d40 0%, #00695c 50%, #00897b 100%)',
    label: '🏢 HRオフィス'
  }
};
