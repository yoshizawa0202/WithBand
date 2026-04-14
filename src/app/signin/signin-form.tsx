"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signInAction, type SignInFormState } from "@/app/auth-actions";

const initialState: SignInFormState = {
  error: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="w-full rounded-full bg-[#ff6b4a] px-5 py-3 font-semibold text-white transition hover:bg-[#ff805f] disabled:cursor-not-allowed disabled:opacity-70"
      disabled={pending}
      type="submit"
    >
      {pending ? "サインイン中..." : "サインイン"}
    </button>
  );
}

type SignInFormProps = {
  redirectTo: string;
};

export function SignInForm({ redirectTo }: SignInFormProps) {
  const [state, formAction] = useActionState(signInAction, initialState);

  return (
    <form action={formAction} className="mt-8 space-y-5">
      <input name="redirectTo" type="hidden" value={redirectTo} />
      <div className="space-y-2">
        <label className="text-sm font-medium text-[#5e5664]" htmlFor="email">
          メールアドレス
        </label>
        <input
          required
          autoComplete="email"
          className="h-12 w-full rounded-2xl border border-[#d4cab9] bg-white px-4 text-[#171b2a] outline-none transition placeholder:text-[#9a9081] focus:border-[#0d5c63]"
          id="email"
          name="email"
          placeholder="riku@withband.demo"
          type="email"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-[#5e5664]" htmlFor="password">
          パスワード
        </label>
        <input
          required
          autoComplete="current-password"
          className="h-12 w-full rounded-2xl border border-[#d4cab9] bg-white px-4 text-[#171b2a] outline-none transition placeholder:text-[#9a9081] focus:border-[#0d5c63]"
          id="password"
          name="password"
          placeholder="demo1234"
          type="password"
        />
      </div>
      {state.error ? <p className="rounded-2xl bg-[#fff1ed] px-4 py-3 text-sm text-[#b24026]">{state.error}</p> : null}
      <SubmitButton />
    </form>
  );
}