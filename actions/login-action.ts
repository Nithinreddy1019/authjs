"use server"

import { signIn } from "@/auth";
import { db } from "@/lib/db";
import { sendVerificationEmail } from "@/lib/email";
import { generateVerificationToken } from "@/lib/tokens";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import * as z from "zod";

export const loginaction = async (values: z.infer<typeof LoginSchema>) => {

    const validatedFields = LoginSchema.safeParse(values);
    
    if(!validatedFields.success) {
        return { error: "Invalid fields format"}
    };

    const { email, password } = validatedFields.data;

    const existingUser = await db.user.findUnique({
        where: {email}
    });
    if(!existingUser || !existingUser.email || !existingUser.password){
        return { error: "Email not found"}
    }

    if (!existingUser.emailVerified) {
        const verificationToken = await generateVerificationToken(email);

        const emailSent = await sendVerificationEmail({
            token: verificationToken.token,
            mailId: verificationToken.email
        })

        return { success: "Verification email sent"}
    }

    try {
        await signIn("credentials", {
            email, 
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        });
    } catch (error) {
        console.log(error)
        if(error instanceof AuthError){
            switch(error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials"}
                default: 
                    return { error: "Something went wrong!"}
            }
        }

        throw error;
    }
}