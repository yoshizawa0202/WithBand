"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { authenticateUser, clearSession, createSession, sanitizeRedirectPath } from "@/app/auth";

export type SignInFormState = {
  error: string;
};

export async function signInAction(
  _previousState: SignInFormState,
  formData: FormData,
): Promise<SignInFormState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const redirectTo = sanitizeRedirectPath(String(formData.get("redirectTo") ?? "/"));

  if (!email || !password) {
    return { error: "メールアドレスとパスワードを入力してください。" };
  }

  const user = authenticateUser(email, password);

  if (!user) {
    return { error: "入力した認証情報が正しくありません。" };
  }

  await createSession(user.email);
  revalidatePath("/");
  redirect(redirectTo);
}

export async function signOutAction(formData: FormData) {
  const redirectTo = sanitizeRedirectPath(String(formData.get("redirectTo") ?? "/"));

  await clearSession();
  revalidatePath("/");
  redirect(redirectTo);
}