"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { FormEvent } from "react";

async function signOutNoRedirect(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  return signOut({ redirect: false });
}

async function signInWithKeycloak(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  return signIn("keycloak");
}

export const OIDCLogin = () => {
  const { data: session, status } = useSession();

  if (session) {
    return (
      <form
        onSubmit={(e) => {
          signOutNoRedirect(e);
        }}
        className="flex flex-col gap-4"
      >
        <label>Welcome</label>
        <label htmlFor="email">{session.user?.email}</label>
        <button type="submit">Logout</button>
      </form>
    );
  }
  return (
    <form
      onSubmit={(e) => signInWithKeycloak(e)}
      className="flex flex-col gap-4"
    >
      <label>{status}</label>
      <button type="submit">Login</button>
    </form>
  );
};
