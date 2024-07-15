"use server"

import { LoginSchema } from "@/schemas";
import * as z from "zod";

export const loginaction = async (values: z.infer<typeof LoginSchema>) => {

    const validatedFields = LoginSchema.safeParse(values);
    
    if(!validatedFields) {
        return { error: "Invalid fields format"}
    };

    return { success: "Done"}
}