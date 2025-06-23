# Next.js + Supabase 日本語テンプレート

このテンプレートは **Supabase Starter Kit** をベースに改造したもので、私がオリジナルで作成したものではありません。全て日本語対応に書き替え、認証機能やヘッダー、モバイルナビゲーションバーなど、どのアプリにも必要になるであろうコンポーネントを追加しました。

---

## 主な機能

* **日本語のみ対応**
* **認証機能**：Supabase Auth をクッキー経由で利用できる設定済み
* **ヘッダー & モバイルナビゲーション**：PC とスマホで最適化された共通ナビゲーションコンポーネント
* **UI ライブラリ**：Tailwind CSS + shadcn/ui
* **コード整形**：Tailwind Prettier 設定を導入
* **middlewareを用いたサーバーサイドでのアプリ保護**

---

## ルーティング構成

| パス             | 説明                     |
| -------------- | ---------------------- |
| `/`            | ランディングページ（LP）          |
| `/auth/*`      | サインイン、サインアップなど認証関連のページ |
| `/protected/*` | ログイン済みユーザーのみアクセス可能なページ |

---

## はじめ方

1. リポジトリをクローン

   ```bash
   npx create-scarlet-template my-app
   cd my-app
   ```

2. Supabase で新規プロジェクトを作成

   Supabase ダッシュボード（[https://app.supabase.com）にログインし、プロジェクトを作成します。](https://app.supabase.com）にログインし、プロジェクトを作成します。)

3. 環境変数を設定

   ```bash
   cp .env.example .env.local
   ```

   `.env.local` に以下を設定:

   ```dotenv
   NEXT_PUBLIC_SUPABASE_URL=あなたのSupabase プロジェクト URL
   NEXT_PUBLIC_SUPABASE_ANON_KEY=あなたのAnonキー
   ```

4. 依存パッケージのインストール

   ```bash
   npm install
   # または
   yarn install
   ```

5. 開発サーバーを起動

   ```bash
   npm run dev
   # または
   yarn dev
   ```

   ブラウザで [http://localhost:3000](http://localhost:3000) を開くとアプリが動作します。

---

## カスタマイズ項目例

* ナビゲーションメニューの項目追加／編集
* ダッシュボードページのコンテンツ差し替え
* フォームバリデーション（Zod + React Hook Form の導入）
* Tailwind テーマカラーの変更
