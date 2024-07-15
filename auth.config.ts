import type { NextAuthConfig } from "next-auth"
import { LoginSchema } from "./schemas"
import Credentials from "next-auth/providers/credentials"
import { getUserByEmail } from "./data/user";
import * as bcrypt from "bcryptjs";

 
// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFiles = LoginSchema.safeParse(credentials);

        if(validatedFiles.success) {
          const { email, password} = validatedFiles.data;

          const user = await getUserByEmail(email);
          if(!user || !user.password) return null;
          
          const passwordMatch = await bcrypt.compare(password, user.password);

          if(passwordMatch) return user;
        }

        return null;
      }
    })
  ],
} satisfies NextAuthConfig