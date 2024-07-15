"use server"

import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import * as bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";



export const registeraction = async (values: z.infer<typeof RegisterSchema>) => {
    
    const validatedFileds = RegisterSchema.safeParse(values);

    if(!validatedFileds.success) {
        return { error: "Invalid credetnials"}
    };

    const { email, username, password} = validatedFileds.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "Email already in use"}
    }

    const user = await db.user.create({
        data: {
            email,
            name: username,
            password: hashedPassword
        }
    });

    //WIP: sending verification email

    return { success: "Done"}
}