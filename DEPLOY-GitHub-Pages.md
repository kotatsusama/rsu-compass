# 🚀 GitHub Pages で RSU Compass を公開する手順

## ステップ1: GitHubアカウントを作る（5分）

1. **https://github.com** にアクセス
2. 「Sign up」をクリック
3. 以下を入力:
   - メールアドレス（個人のGmailなど推奨。会社メールでもOK）
   - パスワード（15文字以上、または8文字+数字+小文字）
   - ユーザー名（例: `ytetsuo` や `kotatsu-rsu` など好きな名前）
4. 「Create account」をクリック
5. メールに届いた認証コードを入力
6. 簡単なアンケートに答える（スキップ可能）
7. 「Free」プランを選択（無料！）

→ これでアカウント完成！

---

## ステップ2: リポジトリを作る（2分）

1. GitHubにログインした状態で **https://github.com/new** にアクセス
2. 以下を入力:
   - **Repository name**: `rsu-compass`
   - **Description**: `RSU学習ゲーム`（任意）
   - **Public** を選択（無料でPages公開するため）
   - 「Add a README file」は **チェックしない**
3. 「Create repository」をクリック

---

## ステップ3: PCからファイルをアップロード（5分）

### 方法A: ブラウザからドラッグ&ドロップ（簡単！）

1. 作成したリポジトリのページで「uploading an existing file」リンクをクリック
2. エクスプローラーで `C:\Users\ytetsuo\Desktop\rsu-learning-game` を開く
3. フォルダの **中身すべて**（css, data, html, images, js, README.md）を
   ブラウザのアップロードエリアにドラッグ&ドロップ
   
   ⚠️ 注意: フォルダごとドロップすると中身が展開されます
   ⚠️ 100ファイル制限があるので、もし超える場合は複数回に分けて

4. 下部の「Commit changes」をクリック

### 方法B: Git コマンド（確実・高速）

PCでコマンドプロンプト/PowerShellを開いて:

```bash
cd C:\Users\ytetsuo\Desktop\rsu-learning-game

git init
git add .
git commit -m "Initial commit: RSU Compass v1.0"
git branch -M main
git remote add origin https://github.com/あなたのユーザー名/rsu-compass.git
git push -u origin main
```

※ 初回は GitHub のログインを求められます（ブラウザが開く）

---

## ステップ4: GitHub Pages を有効にする（2分）

1. リポジトリページで「**Settings**」タブをクリック（上部メニュー右側）
2. 左メニューの「**Pages**」をクリック
3. 以下を設定:
   - **Source**: 「Deploy from a branch」
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. 「**Save**」をクリック
5. 1〜2分待つ...

→ 上部に緑のバナー:
   `Your site is live at https://あなたのユーザー名.github.io/rsu-compass/`

---

## ステップ5: iPhoneでアクセス！

### アクセスURL:
```
https://あなたのユーザー名.github.io/rsu-compass/html/index.html
```

### ホーム画面に追加（アプリ風にする）:
1. iPhoneのSafariで上記URLを開く
2. 画面下部の「共有」ボタン（□に↑のマーク）をタップ
3. 下にスクロールして「**ホーム画面に追加**」をタップ
4. 名前を「RSU Compass」にして「追加」

→ ホーム画面にアイコンが追加され、タップするだけで遊べる！🎉

---

## ステップ6: 知り合いに共有する

Slackで以下のURLを送るだけ:
```
https://あなたのユーザー名.github.io/rsu-compass/html/index.html
```

相手はURLをタップするだけで、インストール不要・登録不要で即プレイ可能。
iPhoneでもAndroidでもPCでも動きます。

---

## 📝 更新したい時

ファイルを修正した後:

### ブラウザから:
1. GitHubリポジトリ → 変更したいファイルを選択 → 鉛筆アイコン → 編集 → Commit

### Git コマンドから:
```bash
cd C:\Users\ytetsuo\Desktop\rsu-learning-game
git add .
git commit -m "更新内容のメモ"
git push
```

→ 数分で自動的に公開サイトに反映される

---

## ❓ よくある質問

**Q: 無料？**
→ はい。GitHub Pages は Public リポジトリなら完全無料。

**Q: 誰でも見られる？**
→ URLを知っている人のみ。Google検索にすぐ出ることはないが、技術的には全世界に公開。
   機密情報は含まれていないので問題なし。

**Q: RSU Compassに機密情報は含まれる？**
→ いいえ。一般的なRSU知識の学習コンテンツのみ。個人情報やAmazon社内情報は一切なし。

**Q: 何人でも同時にアクセスできる？**
→ はい。GitHub Pages は月間100GBの帯域幅があり、学習ゲーム程度なら上限に達することはない。

**Q: スマホのオフラインで使える？**
→ 現状はオンライン接続が必要。（将来的にPWA対応すればオフラインも可能）
