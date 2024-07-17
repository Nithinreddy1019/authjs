import NextAuth, { DefaultSession } from "next-auth"
import authConfig from "./auth.config"
 
import { PrismaClient } from "@prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { getUserById } from "./data/user"
import { exit } from "process"
import { db } from "./lib/db"
 
const prisma = new PrismaClient()

declare module "next-auth" {
  interface Session {
    user: {
      role: string
    } & DefaultSession["user"]
  } 
}

 
export const { handlers, auth, signIn, signOut } = NextAuth({
  callbacks: {
    async jwt({token, user}) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);
      if(!existingUser) return token;

      token.role = existingUser.role;

      return token
    },
    async session({token, session}) {
      if(token.sub && session.user) {
        session.user.id = token.sub;
      }

      if(token.role && session.user) {
        session.user.role = token.role as string
      }
      return session;
    }
  },
  events: {
    async linkAccount({user}){
      await db.user.update({
        where: {id: user.id},
        data: {emailVerified: new Date()}
      })
    }
  },
  pages: {
    signIn: "/auth/login",
    error: "/auth/error"
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
})