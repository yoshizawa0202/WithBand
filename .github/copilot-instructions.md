- [x] Verify that the copilot-instructions.md file in the .github directory is created.

- [x] Clarify Project Requirements
	Next.js アプリケーション環境構築として、TypeScript、App Router、Tailwind CSS、ESLint、src 構成、Turbopack を採用。

- [x] Scaffold the Project
	create-next-app はフォルダ名の大文字制約で失敗したため、同等の標準構成を手動で作成。

- [x] Customize the Project
	初期トップページ、グローバル CSS、README を開発開始しやすい内容に調整。

- [x] Install Required Extensions
	追加で必須となる VS Code 拡張はなし。

- [x] Compile the Project
	npm install、npm run lint、npm run build を実行し、いずれも通過。

- [x] Create and Run Task
	.vscode/tasks.json に Next.js 開発サーバータスクを作成し、Windows 環境向けに node.exe 直起動へ調整。

- [x] Launch the Project
	開発サーバーはローカル 3000 番ポートで待受確認済み。デバッグ起動構成は未作成。

- [x] Ensure Documentation is Complete
	README.md とこのファイルを現状に合わせて更新し、HTML コメントを除去。

- [x] Record Deployment Context
	AWS Amplify は `main` ブランチを本番デプロイ対象として利用する。

- [x] Define Branch Strategy
	継続開発は `develop` を統合ブランチとし、`feature/*` `fix/*` `hotfix/*` を用途別に運用する。

- Work through each checklist item systematically.
- Keep communication concise and focused.
- Follow development best practices.
- Work through each checklist item systematically.
- Keep communication concise and focused.
- Follow development best practices.