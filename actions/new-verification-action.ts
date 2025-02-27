"use server"

import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token"
import { db } from "@/lib/db"
import { error } from "console";


export const newVerificationAction = async (token: string) => {
    const existingToken = await getVerificationTokenByToken(token);
    if(!existingToken) {
        return { error: "Token doesn't exists"}
    }

    const hasExpired = new Date(existingToken.expires) < new Date();
    if(hasExpired) {
        return { error: "Toekn has expired."}
    }

    const existingUser = await getUserByEmail(existingToken.email);
    if(!existingUser) {
        return { error: "Email does not exist "}
    }

    //WIP: use this when adding new email
    await db.user.update({
        where: { id: existingUser.id },
        data: {
            emailVerified: new Date(),
            email: existingToken.email
        }
    })

    await db.verificationToken.delete({
        where: { id: existingToken.id }
    })

    return { success: "Email Verified"}

}