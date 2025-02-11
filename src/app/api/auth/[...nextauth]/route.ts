import type { NextApiRequest, NextApiResponse } from "next"
import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions = {
    debug: process.env.NODE_ENV === 'development',
    providers: [
        KeycloakProvider({
            clientId: process.env.KEYCLOAK_ID || "",
            clientSecret: process.env.KEYCLOAK_SECRET || "",
            issuer: process.env.KEYCLOAK_ISSUER,
        })
    ]
};

async function auth(req: NextApiRequest, res: NextApiResponse) {
    return NextAuth(req, res, authOptions);
}

export { auth as GET, auth as POST }
