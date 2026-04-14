# WithBand

バンド活動向けのソーシャル掲示板サイトです。メンバー募集、ライブ告知、セッション募集、機材売買を同じ画面で横断できる構成にしています。

## セットアップ

```bash
npm install
```

## 開発サーバー

```bash
npm run dev
```

## デプロイ運用

- `main` ブランチは AWS Amplify の本番デプロイ対象です。
- 本番反映は `main` へのマージを起点に行います。
- 継続開発は `develop` ブランチを基準に進めます。

## ブランチ運用

- `main`: 本番環境へデプロイする安定ブランチ
- `develop`: 日常開発の統合ブランチ
- `feature/*`: 新機能開発用。`develop` から分岐して `develop` へマージ
- `fix/*`: 開発中の修正用。原則 `develop` へマージ
- `hotfix/*`: 本番緊急修正用。`main` から分岐し、`main` と `develop` の両方へ反映

基本フロー:

1. `develop` から作業ブランチを切る
2. 作業完了後に `develop` へマージする
3. リリース時に `develop` から `main` へマージする
4. `main` 更新をトリガーに AWS Amplify へデプロイする

## 現在の実装内容

- 投稿検索とカテゴリ絞り込み
- 地域別の掲示板フィード
- イベント告知カード
- コミュニティ参加導線
- デモユーザーによるサインイン / サインアウト

## サインイン

現状は外部認証サービス未接続のため、デモアカウントでサインインできます。

- サインイン画面: `/signin`
- デモアカウント例: `riku@withband.demo` / `demo1234`
- セッション管理: App Router の Server Action と Cookie を利用

## 利用可能なスクリプト

- `npm run dev`: Turbopack で開発サーバーを起動
- `npm run build`: 本番ビルドを作成
- `npm run start`: ビルド済みアプリを起動
- `npm run lint`: ESLint を実行