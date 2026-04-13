export type BoardPost = {
  id: number;
  category: "メンバー募集" | "ライブ告知" | "セッション" | "機材売買";
  area: "東京" | "大阪" | "名古屋" | "福岡" | "オンライン";
  genre: string;
  title: string;
  summary: string;
  author: string;
  band: string;
  postedAt: string;
  replies: number;
  tags: string[];
  priority: "HOT" | "NEW" | "FEATURED";
};

export type EventCard = {
  id: number;
  day: string;
  month: string;
  title: string;
  venue: string;
  area: string;
  slotsLeft: string;
  mood: string;
};

export type CommunityCard = {
  id: number;
  name: string;
  area: string;
  members: string;
  focus: string;
  tone: string;
};

export const boardPosts: BoardPost[] = [
  {
    id: 1,
    category: "メンバー募集",
    area: "東京",
    genre: "オルタナ / シューゲイザー",
    title: "下北沢で活動する新規バンド、女性Voを募集",
    summary:
      "週1リハ、月1本ライブ想定。浮遊感のある日本語ロックが好きな人を探しています。デモあり。",
    author: "Riku",
    band: "Halo Sleep",
    postedAt: "12分前",
    replies: 14,
    tags: ["女性Vo", "新規結成", "デモあり"],
    priority: "HOT",
  },
  {
    id: 2,
    category: "ライブ告知",
    area: "大阪",
    genre: "メロディックパンク",
    title: "心斎橋で自主企画、対バン3組募集中",
    summary:
      "6月後半の金曜夜開催。30分転換込み、ノルマ軽め。学生バンドと社会人バンドどちらも歓迎。",
    author: "Nao",
    band: "Fuzzy Youth",
    postedAt: "38分前",
    replies: 9,
    tags: ["対バン募集", "自主企画", "社会人歓迎"],
    priority: "FEATURED",
  },
  {
    id: 3,
    category: "セッション",
    area: "オンライン",
    genre: "シティポップ / R&B",
    title: "宅録コラボできるGt・Key募集",
    summary:
      "オンライン完結でEPを制作中。クリックとコード共有で進められる人を優先。Mix環境あると助かります。",
    author: "Mio",
    band: "Neon Harbor",
    postedAt: "1時間前",
    replies: 21,
    tags: ["宅録", "コラボ", "音源制作"],
    priority: "NEW",
  },
  {
    id: 4,
    category: "機材売買",
    area: "名古屋",
    genre: "機材交換",
    title: "ボード縮小のため空間系まとめて譲ります",
    summary:
      "ディレイ、リバーブ、電源周りを放出予定。スタジオ手渡し希望。試奏可、写真あり。",
    author: "Ken",
    band: "Late Bloom",
    postedAt: "2時間前",
    replies: 6,
    tags: ["エフェクター", "手渡し", "写真あり"],
    priority: "NEW",
  },
  {
    id: 5,
    category: "メンバー募集",
    area: "福岡",
    genre: "ラウド / ポストハードコア",
    title: "同期あり編成でDr募集、クリック必須",
    summary:
      "自主制作MV公開前。ツインギター編成で、ライブ強度を一緒に上げたいドラマーを探しています。",
    author: "Sora",
    band: "Broken Signal",
    postedAt: "4時間前",
    replies: 17,
    tags: ["Dr募集", "同期あり", "MV準備中"],
    priority: "HOT",
  },
  {
    id: 6,
    category: "セッション",
    area: "東京",
    genre: "ジャズファンク",
    title: "土曜昼のインストセッション参加者募集",
    summary:
      "代々木のリハスタで定期開催。譜面初見よりグルーヴ重視。Ba、Sax、Per を特に歓迎。",
    author: "Jun",
    band: "Pocket Transit",
    postedAt: "5時間前",
    replies: 11,
    tags: ["インスト", "土曜昼", "グルーヴ重視"],
    priority: "FEATURED",
  },
];

export const events: EventCard[] = [
  {
    id: 1,
    day: "18",
    month: "APR",
    title: "Midnight Rehearsal Showcase",
    venue: "下北沢 SPARK",
    area: "東京",
    slotsLeft: "残り2枠",
    mood: "デモ段階のバンド歓迎",
  },
  {
    id: 2,
    day: "26",
    month: "APR",
    title: "Girls Front Jam",
    venue: "心斎橋 GLOW",
    area: "大阪",
    slotsLeft: "観覧予約受付中",
    mood: "女性フロント中心",
  },
  {
    id: 3,
    day: "02",
    month: "MAY",
    title: "Online Demo Feedback Night",
    venue: "Discord",
    area: "オンライン",
    slotsLeft: "参加無料",
    mood: "宅録勢の相互レビュー会",
  },
];

export const communities: CommunityCard[] = [
  {
    id: 1,
    name: "下北沢インディー掲示板",
    area: "東京",
    members: "2.4k members",
    focus: "出演枠の共有とメンバー募集が活発",
    tone: "夜のライブハウス帰りに更新が増えるコミュニティ",
  },
  {
    id: 2,
    name: "関西ラウド・ハードコア部屋",
    area: "大阪",
    members: "1.3k members",
    focus: "同期運用、爆音系、短尺ライブの情報交換",
    tone: "機材やPA事情まで踏み込んだ会話が多い",
  },
  {
    id: 3,
    name: "宅録コラボステーション",
    area: "オンライン",
    members: "3.1k members",
    focus: "リモート制作、MIX相談、ボーカル募集",
    tone: "地域に縛られず音源先行でつながれる",
  },
];