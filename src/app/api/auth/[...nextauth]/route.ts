import { authOptions } from "@/helpers/auth";
import NextAuth from "next-auth";

const auth = NextAuth(authOptions);

export { auth as GET, auth as POST };
