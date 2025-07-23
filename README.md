# Next.js + Supabase 日本語テンプレート

このテンプレートは [**Supabase Starter Kit**](https://vercel.com/templates/next.js/supabase) をベースに改造したもので、私がオリジナルで作成したものではありません。全て日本語対応に書き替え、認証機能やヘッダー、モバイルナビゲーションバーなど、どのアプリにも必要になるであろうコンポーネントを追加しました。

---

## 技術スタック

- **フレームワーク**: Next.js (latest), React 19
- **言語**: TypeScript 5
- **UI**: Tailwind CSS v4, Shadcn/UI（Radix UI）
- **アイコン**: lucide-react
- **認証 & データベース**: Supabase JS, @supabase/ssr
- **開発ツール**:
  - ESLint (`eslint`, `eslint-config-next`, `@eslint/eslintrc`)
  - Prettier (`prettier`, `prettier-plugin-tailwindcss`)
  - PostCSS (`postcss`, `@tailwindcss/postcss`)
  - Type Definitions (`@types/node`, `@types/react`, `@types/react-dom`)

- **データベース**: Supabase

---

## 主な機能

- **日本語のみ対応**
- **認証機能**：Supabase Auth をクッキー経由で利用できる設定済み
- **ヘッダー & モバイルナビゲーション**：PC とスマホで最適化された共通ナビゲーションコンポーネント
- **UI ライブラリ**：Tailwind CSS + shadcn/ui
- **コード整形**：Tailwind Prettier 設定を導入
- **自動フォーマット＆型チェック**：git commit時に自動でprettierとeslintが走ります。意図しないエラーを自動で防ぎます。
- **middlewareを用いたサーバーサイドでのアプリ保護**

---

## ルーティング構成

| パス           | 説明                                         |
| -------------- | -------------------------------------------- |
| `/`            | ランディングページ（LP）                     |
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

   [Supabase ダッシュボード](https://supabase.com/dashboard/)にログインし、プロジェクトを作成します。

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

## 開発

`app/protected/page.tsx` はログイン後のユーザーが最初にアクセスするページです。ここを編集してアプリ開発を始めましょう。
