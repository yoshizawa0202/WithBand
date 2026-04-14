import { cookies } from "next/headers";

const sessionCookieName = "withband_session";

type DemoUserRecord = {
  email: string;
  password: string;
  name: string;
  area: "東京" | "大阪" | "名古屋" | "福岡" | "オンライン";
  role: string;
};

export type SessionUser = Omit<DemoUserRecord, "password">;

const demoUsers: DemoUserRecord[] = [
  {
    email: "riku@withband.demo",
    password: "demo1234",
    name: "Riku",
    area: "東京",
    role: "ギターボーカル",
  },
  {
    email: "mio@withband.demo",
    password: "demo5678",
    name: "Mio",
    area: "オンライン",
    role: "コンポーザー",
  },
];

function toSessionUser(user: DemoUserRecord): SessionUser {
  return {
    email: user.email,
    name: user.name,
    area: user.area,
    role: user.role,
  };
}

export function listDemoUsers(): SessionUser[] {
  return demoUsers.map(toSessionUser);
}

export function authenticateUser(email: string, password: string): SessionUser | null {
  const normalizedEmail = email.trim().toLowerCase();
  const matchedUser = demoUsers.find(
    (user) => user.email.toLowerCase() === normalizedEmail && user.password === password,
  );

  if (!matchedUser) {
    return null;
  }

  return toSessionUser(matchedUser);
}

export async function getCurrentUser(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const email = cookieStore.get(sessionCookieName)?.value;

  if (!email) {
    return null;
  }

  const matchedUser = demoUsers.find((user) => user.email === email);

  if (!matchedUser) {
    return null;
  }

  return toSessionUser(matchedUser);
}

export async function createSession(email: string) {
  const cookieStore = await cookies();

  cookieStore.set(sessionCookieName, email, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete(sessionCookieName);
}

export function sanitizeRedirectPath(candidate: string | null | undefined) {
  if (!candidate || !candidate.startsWith("/") || candidate.startsWith("//")) {
    return "/";
  }

  return candidate;
}