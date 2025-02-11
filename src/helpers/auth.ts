import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";

import KeycloakProvider from "next-auth/providers/keycloak";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";

export const authOptions = {
  debug: process.env.NODE_ENV === "development",
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID || "",
      clientSecret: process.env.KEYCLOAK_SECRET || "",
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
  ],
  pages: {
    error: "/auth/error",
  },
} satisfies NextAuthOptions;

// Use it in server contexts
export function getAuthServerSession(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions);
}
