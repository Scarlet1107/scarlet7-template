# Next.js + Supabase 日本語テンプレート

このリポジトリは、Next.js（App Router）と Supabase を使ったフルスタックアプリの **テンプレート** です。
ジュニアレベルのWebエンジニアでも、認証基盤やDBセットアップ、デプロイ、ヘッダー付きの基本アプリが **素早く**できることを目的にしています。

---

## ✨ このテンプレートでできること

1. **短時間で全体構築**

   - Supabase 認証基盤・DBのセットアップ
   - App Router 構成の基本ページ群
   - 超高速な認証フロー（`getClaims()` を使った最新Supabase認証に完全対応）

2. **一瞬でアプリの世界観を作成**

   - [tweakcn](https://tweakcn.com/editor/theme) でテーマカラーを選択
   - 結果を`app/globals.css` に貼り替えるだけ！

---

## 📦 技術スタック

- **フレームワーク**: Next.js 15 (App Router) + React 19
- **言語**: TypeScript 5
- **スタイリング**: Tailwind CSS v4 + shadcn/ui（Radix UI）
- **認証・DB**: @supabase/supabase-js + @supabase/ssr + `getClaims()`
- **アイコン**: lucide-react
- **開発支援**: ESLint, Prettier, PostCSS, 型定義ファイル

---

## 🚀 まずは動かしてみよう

1. **リポジトリをクローン**

   ```bash
   npx create-scarlet-template <あなたのアプリ名>
   cd <あなたのアプリ名>
   ```

2. **Supabase プロジェクトを作成**

   1. [Supabase ダッシュボード](https://supabase.com/dashboard/) にログイン

   2. 新規プロジェクト作成 → **Project URL** と **anon key** をコピー

   > ⚠️ **メール認証には独自ドメイン設定が必須です**
   > Supabase ダッシュボード → Settings → Auth → SMTP Configuration で
   > SMTP情報を入力し、ドメインを登録してください。

3. **環境変数を設定**

   ```bash
   cp .env.example .env.local
   ```

   `.env.local` に以下を記入：

   ```dotenv
   NEXT_PUBLIC_SUPABASE_URL=<Your Supabase URL>
   NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY=<Your publishable/anon key>
   NEXT_PUBLIC_BASE_URL=<your-domain.com>
   ```

   `NEXT_PUBLIC_BASE_URL` はメタデータ生成に使われるアプリのベースURLです。
   何も設定しなくても `http://localhost:3000` が使われるので、開発中はそのままで大丈夫です。

4. **依存パッケージをインストール**

   ```bash
   npm install
   # or
   yarn install
   ```

5. **開発サーバーを起動**

   ```bash
   npm run dev
   ```

   ブラウザで [http://localhost:3000](http://localhost:3000) を開くと🎉 アプリが動きます！

---

## 🛠️ 開発のヒント

1. **テーマカラーを変更**

   * [tweakcn](https://tweakcn.com/editor/theme) で色を選択
   * 出力CSSを [`app/globals.css`](/app/globals.css) に貼り替え

2. **最初のページを編集**

   * [`app/protected/home/page.tsx`](/app/protected/home/page.tsx): ログイン後最初の画面
   * ここを書き換えて、アプリ開発を始めよう

---

## 📖 おまけ情報


### 📁 ルーティング構成

- `/` – ランディングページ（LP）
- `/auth/` – 認証関連（ログイン／サインアップ／パスワードリセットなど）
- `/protected/` 以下 – ログイン済みユーザーのみアクセス可能なページ


### コード整形 & 静的解析

* `npm run lint` で ESLint チェック
* `npm run format` で Prettier 整形

### 新しいページを追加するには

1. `app/protected/` 以下にディレクトリを作成 (例: `mypage`)
2. `app/protected/mypage/page.tsx` を作成
3. [AppHeader.tsx](/components/header/AppHeader.tsx) のnavItemsに新しいルーティングを登録


### 認証保護のしくみ

* `middleware.ts` と `lib/supabase/middleware.ts` でログイン状態をチェック
* App Router の `protected/` 以下は未ログインユーザーはアクセス不可

## ライセンス

本テンプレートは
[Next.js Supabase Starter Kit](https://github.com/vercel/next.js/tree/canary/examples/with-supabase)
をベースに改変しています。

```text
The MIT License (MIT)

Copyright (c) 2025 Vercel, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
```

# **Happy Hacking! 🚀**
