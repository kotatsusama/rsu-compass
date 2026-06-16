# 📱 iPhoneでRSU Compassを使う方法

## 方法1: 社内ネットワーク共有（推奨）

### 手順
1. **PCでフォルダを共有する**
   - `rsu-learning-game` フォルダをOneDrive、SharePoint、または社内サーバーに置く
   - または簡易Webサーバーを立てる（下記参照）

2. **PCでローカルサーバーを起動する**（最も簡単）
   ```
   cd C:\Users\ytetsuo\Desktop\rsu-learning-game\html
   python -m http.server 8080
   ```
   → PCのIPアドレスを確認（例: `192.168.1.100`）
   → 同じWi-Fiに接続したiPhoneで `http://192.168.1.100:8080/index.html` を開く

3. **iPhoneのSafariでアクセス**
   - Safari で上記URLを入力
   - ゲームが表示される！

4. **ホーム画面に追加する**
   - Safari下部の「共有」ボタン（□↑マーク）をタップ
   - 「ホーム画面に追加」をタップ
   - 名前を「RSU Compass」に変更
   - 「追加」をタップ
   → ホーム画面にアプリ風のアイコンが追加される！

---

## 方法2: iPhoneに直接ファイルを転送

### 手順
1. **rsu-learning-gameフォルダをZIPに圧縮**
   - PCで右クリック →「送る」→「圧縮(zip)フォルダー」

2. **iPhoneに送る**（以下のいずれか）
   - AirDropで送信
   - メールに添付して自分に送信
   - OneDrive/Google Drive経由

3. **iPhoneで解凍**
   - 「ファイル」アプリでZIPをタップ → 自動解凍

4. **Safariで開く**
   - 「ファイル」アプリで解凍したフォルダを開く
   - `html` → `index.html` をタップ
   - ⚠️ 注意: ローカルファイルだとJSの読み込みが制限される場合あり

---

## 方法3: GitHub Pages で公開（最もスムーズ）

### 手順
1. **GitHubにリポジトリ作成**
   ```
   cd C:\Users\ytetsuo\Desktop\rsu-learning-game
   git init
   git add .
   git commit -m "RSU Compass v1.0"
   git remote add origin https://github.com/あなたのアカウント/rsu-compass.git
   git push -u origin main
   ```

2. **GitHub Pages を有効化**
   - GitHubのリポジトリ → Settings → Pages
   - Source: 「Deploy from a branch」
   - Branch: `main` / フォルダ: `/html`（※またはルート`/`）
   - Save

3. **公開URLにアクセス**
   - `https://あなたのアカウント.github.io/rsu-compass/html/index.html`
   - iPhoneのSafariで開く → 完全動作！

4. **ホーム画面に追加**
   - 方法1と同じ手順でホーム画面にアイコン追加

---

## 🏆 おすすめ: 方法1（ローカルサーバー）

### なぜ？
- 設定が最も簡単（Pythonコマンド1行）
- 社内のみで完結（外部公開しない）
- iPhoneで完全に動作する
- 複数人で同時にアクセス可能

### 起動コマンド（毎回）
```bash
cd C:\Users\ytetsuo\Desktop\rsu-learning-game\html
python -m http.server 8080
```

### PCのIPアドレス確認方法
```bash
ipconfig
```
→ 「IPv4 アドレス」の値（例: 192.168.1.100）を使う

### iPhoneでのアクセス
```
http://192.168.1.100:8080/index.html
```

---

## ⚠️ 注意点

- **方法1・3**: iPhoneのSafariで全機能が動作します
- **方法2**: ローカルファイルではJavaScriptが制限される場合があり、一部機能が動かない可能性があります
- **ネットワーク**: 方法1はPCとiPhoneが同じWi-Fiに接続している必要があります
- **進捗データ**: localStorageはブラウザごとに保存されるため、PC版とiPhone版で進捗は共有されません

---

## 📐 画面サイズ対応済み

| 機種 | 画面幅 | 対応状況 |
|------|--------|----------|
| iPhone SE | 375px | ✅ 対応済み |
| iPhone 14 | 390px | ✅ 対応済み |
| iPhone 14 Pro Max | 430px | ✅ 対応済み |
| iPad | 768px〜 | ✅ 対応済み |

すべてのiPhone/iPadでレスポンシブ表示されます。
