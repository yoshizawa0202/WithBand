"use client";

import { useDeferredValue, useState } from "react";
import type { BoardPost, CommunityCard, EventCard } from "@/app/mock-data";
import { boardPosts, communities, events } from "@/app/mock-data";

const categoryOptions = ["すべて", "メンバー募集", "ライブ告知", "セッション", "機材売買"] as const;
const areaOptions = ["すべて", "東京", "大阪", "名古屋", "福岡", "オンライン"] as const;

function priorityClass(priority: "HOT" | "NEW" | "FEATURED") {
  if (priority === "HOT") {
    return "bg-[#ff6b4a] text-white";
  }

  if (priority === "FEATURED") {
    return "bg-[#0d5c63] text-[#d8fff8]";
  }

  return "bg-[#f3d547] text-[#302402]";
}

export default function Home() {
  const [category, setCategory] = useState<(typeof categoryOptions)[number]>("すべて");
  const [area, setArea] = useState<(typeof areaOptions)[number]>("すべて");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filteredPosts = boardPosts.filter((post: BoardPost) => {
    const matchesCategory = category === "すべて" || post.category === category;
    const matchesArea = area === "すべて" || post.area === area;
    const normalizedQuery = deferredQuery.trim().toLowerCase();
    const matchesQuery =
      normalizedQuery.length === 0 ||
      [post.title, post.summary, post.band, post.genre, ...post.tags].join(" ").toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesArea && matchesQuery;
  });

  return (
    <main className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#120f1c_0%,#161f36_45%,#f3efe6_45%,#f3efe6_100%)] text-white">
      <section className="relative isolate px-5 pb-20 pt-6 sm:px-8 lg:px-10">
        <div className="absolute inset-x-0 top-0 -z-10 h-130 bg-[radial-gradient(circle_at_top_left,#ff8a5b_0%,transparent_32%),radial-gradient(circle_at_top_right,#2cc8c1_0%,transparent_30%),linear-gradient(135deg,#120f1c,#161f36_60%,#1d2d50)]" />
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          <header className="flex flex-col gap-4 rounded-[30px] border border-white/10 bg-white/5 px-5 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-[Bahnschrift,'Arial_Narrow',sans-serif] text-2xl tracking-[0.22em] text-[#ffcf99] uppercase">
                WithBand
              </p>
              <p className="mt-1 text-sm text-white/65">バンド活動のためのソーシャル掲示板</p>
            </div>
            <nav className="flex flex-wrap gap-2 text-sm text-white/72">
              <a className="rounded-full border border-white/15 px-4 py-2 transition hover:border-[#ffcf99] hover:text-white" href="#feed">
                投稿を探す
              </a>
              <a className="rounded-full border border-white/15 px-4 py-2 transition hover:border-[#9be7dd] hover:text-white" href="#events">
                イベント
              </a>
              <a className="rounded-full border border-white/15 px-4 py-2 transition hover:border-[#f3d547] hover:text-white" href="#communities">
                コミュニティ
              </a>
            </nav>
          </header>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <section className="rounded-[36px] border border-white/10 bg-black/20 p-7 shadow-[0_30px_120px_-60px_rgba(0,0,0,0.9)] backdrop-blur sm:p-10">
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
                <span className="rounded-full border border-[#ff8a5b]/40 bg-[#ff8a5b]/10 px-3 py-1 text-[#ffd5c1]">募集</span>
                <span className="rounded-full border border-[#2cc8c1]/40 bg-[#2cc8c1]/10 px-3 py-1 text-[#c5fffb]">告知</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">地域コミュニティ</span>
              </div>
              <h1 className="mt-6 max-w-4xl font-[Impact,'Arial_Black',sans-serif] text-5xl leading-[0.96] tracking-[0.02em] text-balance sm:text-7xl">
                メンバー募集も、
                ライブ告知も、
                同じ熱量で流れる掲示板。
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/74 sm:text-lg">
                WithBand は、バンド活動で発生する募集・告知・相談をひとつのタイムラインに束ねるソーシャル掲示板です。
                地域、ジャンル、温度感で投稿を探し、次のライブや次のメンバーに最短でたどり着けます。
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-semibold text-[#ffcf99]">2.4k</p>
                  <p className="mt-2 text-sm text-white/65">今週の新規投稿</p>
                </article>
                <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-semibold text-[#9be7dd]">184</p>
                  <p className="mt-2 text-sm text-white/65">進行中イベント</p>
                </article>
                <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-semibold text-[#f3d547]">97%</p>
                  <p className="mt-2 text-sm text-white/65">モバイル対応率</p>
                </article>
              </div>
            </section>

            <aside className="grid gap-5">
              <section className="rounded-4xl border border-white/10 bg-[#f3efe6] p-6 text-[#1b2033] shadow-[0_25px_90px_-50px_rgba(0,0,0,0.8)]">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-[#7a6f61]">Quick Post</p>
                    <h2 className="mt-2 text-2xl font-semibold">今すぐ募集テンプレート</h2>
                  </div>
                  <span className="rounded-full bg-[#1b2033] px-3 py-1 text-xs font-semibold text-white">BETA</span>
                </div>
                <div className="mt-6 rounded-3xl bg-[#131829] p-5 text-white">
                  <p className="text-sm text-white/55">投稿プレビュー</p>
                  <p className="mt-3 text-lg font-semibold">渋谷中心に活動するGt / Ba募集中</p>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    影響源、活動ペース、求めるスキル、デモ有無までひと目で伝わるカード形式で掲載。
                  </p>
                </div>
                <button className="mt-5 w-full rounded-full bg-[#ff6b4a] px-5 py-3 font-semibold text-white transition hover:bg-[#ff805f]">
                  投稿を作成する
                </button>
              </section>

              <section className="rounded-4xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.24em] text-white/55">Signal</p>
                <ul className="mt-4 space-y-4 text-sm text-white/76">
                  <li className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                    <span>今夜の投稿ピーク</span>
                    <strong className="text-[#ffcf99]">21:00-23:00</strong>
                  </li>
                  <li className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                    <span>最も動いているカテゴリ</span>
                    <strong className="text-[#9be7dd]">メンバー募集</strong>
                  </li>
                  <li className="flex items-start justify-between gap-4">
                    <span>直近24時間の返信数</span>
                    <strong className="text-[#f3d547]">312 replies</strong>
                  </li>
                </ul>
              </section>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-5 pb-12 sm:px-8 lg:px-10" id="feed">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[36px] bg-[#f3efe6] p-6 text-[#171b2a] shadow-[0_25px_80px_-50px_rgba(8,12,20,0.7)] sm:p-8">
            <div className="flex flex-col gap-4 border-b border-[#d8cfbf] pb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[#7a6f61]">Board Feed</p>
                <h2 className="mt-2 text-3xl font-semibold">募集と告知を横断して検索</h2>
              </div>
              <div className="grid gap-3 md:grid-cols-[1fr_auto_auto]">
                <input
                  className="h-12 rounded-full border border-[#c7bcaa] bg-white px-5 text-sm outline-none transition placeholder:text-[#978b78] focus:border-[#0d5c63]"
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="ジャンル、バンド名、タグで検索"
                  value={query}
                />
                <select
                  className="h-12 rounded-full border border-[#c7bcaa] bg-white px-4 text-sm outline-none transition focus:border-[#0d5c63]"
                  onChange={(event) => setCategory(event.target.value as (typeof categoryOptions)[number])}
                  value={category}
                >
                  {categoryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <select
                  className="h-12 rounded-full border border-[#c7bcaa] bg-white px-4 text-sm outline-none transition focus:border-[#0d5c63]"
                  onChange={(event) => setArea(event.target.value as (typeof areaOptions)[number])}
                  value={area}
                >
                  {areaOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {filteredPosts.map((post: BoardPost) => (
                <article key={post.id} className="rounded-[28px] border border-[#ddd4c4] bg-white p-5 shadow-[0_18px_40px_-35px_rgba(10,20,40,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-35px_rgba(10,20,40,0.45)]">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6b6470]">
                      <span className={`rounded-full px-3 py-1 ${priorityClass(post.priority)}`}>{post.priority}</span>
                      <span>{post.category}</span>
                      <span>{post.area}</span>
                    </div>
                    <span className="text-sm text-[#8a8190]">{post.postedAt}</span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-2xl font-semibold leading-tight text-[#171b2a]">{post.title}</h3>
                    <p className="mt-2 text-sm font-medium text-[#0d5c63]">{post.genre}</p>
                    <p className="mt-4 text-sm leading-7 text-[#5a5361]">{post.summary}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                      <span key={tag} className="rounded-full bg-[#f3efe6] px-3 py-1 text-xs font-medium text-[#645d6b]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#ede5d8] pt-4 text-sm">
                    <div>
                      <p className="font-semibold text-[#171b2a]">{post.band}</p>
                      <p className="text-[#847b89]">投稿者 {post.author}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full border border-[#d5ccbc] px-3 py-1 text-[#5a5361]">{post.replies} replies</span>
                      <button className="rounded-full bg-[#171b2a] px-4 py-2 font-semibold text-white transition hover:bg-[#242a42]">
                        詳細を見る
                      </button>
                    </div>
                  </div>
                </article>
              ))}

              {filteredPosts.length === 0 ? (
                <div className="rounded-[28px] border border-dashed border-[#c7bcaa] bg-[#fffdf8] p-10 text-center text-[#6f6674]">
                  条件に一致する投稿がありません。検索語または地域を変更してください。
                </div>
              ) : null}
            </div>
          </div>

          <div className="grid gap-6">
            <section className="rounded-[36px] bg-[#171b2a] p-6 text-white shadow-[0_25px_80px_-50px_rgba(8,12,20,0.75)] sm:p-8" id="events">
              <p className="text-sm uppercase tracking-[0.24em] text-white/50">Upcoming Events</p>
              <h2 className="mt-2 text-3xl font-semibold">次の出演や交流機会</h2>
              <div className="mt-6 space-y-4">
                {events.map((event: EventCard) => (
                  <article key={event.id} className="grid gap-4 rounded-[26px] border border-white/10 bg-white/6 p-4 sm:grid-cols-[84px_1fr] sm:items-center">
                    <div className="rounded-[22px] bg-[#f3d547] px-4 py-5 text-center text-[#201704]">
                      <p className="text-xs font-bold tracking-[0.24em]">{event.month}</p>
                      <p className="mt-1 text-4xl font-bold leading-none">{event.day}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{event.title}</h3>
                      <p className="mt-2 text-sm text-white/68">{event.venue} / {event.area}</p>
                      <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
                        <span className="rounded-full bg-[#0d5c63] px-3 py-1 text-[#d8fff8]">{event.slotsLeft}</span>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-white/75">{event.mood}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-[36px] bg-[#efe4d6] p-6 text-[#171b2a] shadow-[0_25px_80px_-50px_rgba(8,12,20,0.55)] sm:p-8" id="communities">
              <p className="text-sm uppercase tracking-[0.24em] text-[#7f7466]">Communities</p>
              <h2 className="mt-2 text-3xl font-semibold">地域別の会話に入る</h2>
              <div className="mt-6 space-y-4">
                {communities.map((community: CommunityCard) => (
                  <article key={community.id} className="rounded-[26px] border border-[#d6ccbd] bg-white px-5 py-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-semibold">{community.name}</h3>
                        <p className="mt-2 text-sm text-[#0d5c63]">{community.area} / {community.members}</p>
                      </div>
                      <button className="rounded-full border border-[#171b2a] px-3 py-1 text-sm font-semibold text-[#171b2a] transition hover:bg-[#171b2a] hover:text-white">
                        参加する
                      </button>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[#5a5361]">{community.focus}</p>
                    <p className="mt-2 text-sm text-[#867d8a]">{community.tone}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}