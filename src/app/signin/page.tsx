import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser, listDemoUsers, sanitizeRedirectPath } from "@/app/auth";
import { SignInForm } from "@/app/signin/signin-form";

type SignInPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export default async function SignInPage({ searchParams }: SignInPageProps) {
  const currentUser = await getCurrentUser();
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const redirectCandidate = resolvedSearchParams?.redirect;
  const redirectTo = sanitizeRedirectPath(
    Array.isArray(redirectCandidate) ? redirectCandidate[0] : redirectCandidate,
  );

  if (currentUser) {
    redirect(redirectTo);
  }

  const demoUsers = listDemoUsers();

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#ffdfca_0%,#f3efe6_30%,#ded7cb_100%)] px-5 py-8 text-[#171b2a] sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-[36px] bg-[#171b2a] p-8 text-white shadow-[0_30px_90px_-55px_rgba(0,0,0,0.8)] sm:p-10">
          <p className="font-[Bahnschrift,'Arial_Narrow',sans-serif] text-2xl tracking-[0.22em] text-[#ffcf99] uppercase">WithBand</p>
          <h1 className="mt-8 font-[Impact,'Arial_Black',sans-serif] text-5xl leading-[0.95] tracking-[0.02em] sm:text-6xl">
            掲示板に入るための
            サインイン。
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/72">
            投稿の閲覧導線や今後の募集作成機能へ接続できるよう、Cookie ベースのセッションを実装しています。
            この段階ではデモアカウントで利用できます。
          </p>
          <div className="mt-8 rounded-[28px] border border-white/10 bg-white/6 p-5">
            <p className="text-sm uppercase tracking-[0.24em] text-white/50">Demo Accounts</p>
            <div className="mt-4 space-y-4">
              {demoUsers.map((user) => (
                <article key={user.email} className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <p className="text-lg font-semibold">{user.name}</p>
                  <p className="mt-1 text-sm text-white/68">{user.email}</p>
                  <p className="mt-2 text-sm text-[#9be7dd]">{user.area} / {user.role}</p>
                  <p className="mt-2 text-sm text-white/68">パスワードは画面プレースホルダーを参照してください。</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[36px] bg-[#f7f3ea] p-8 shadow-[0_30px_90px_-55px_rgba(0,0,0,0.35)] sm:p-10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#7a6f61]">Sign In</p>
              <h2 className="mt-2 text-3xl font-semibold">アカウントにサインイン</h2>
            </div>
            <Link className="rounded-full border border-[#171b2a] px-4 py-2 text-sm font-semibold transition hover:bg-[#171b2a] hover:text-white" href="/">
              ホームへ戻る
            </Link>
          </div>
          <SignInForm redirectTo={redirectTo} />
          <div className="mt-8 rounded-[28px] border border-[#d7cdbd] bg-white px-5 py-4 text-sm text-[#5a5361]">
            <p className="font-semibold text-[#171b2a]">今回の実装範囲</p>
            <p className="mt-2 leading-7">
              認証情報の検証、セッション Cookie の発行、サインアウト、サインイン状態のホーム反映までを実装しています。
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}