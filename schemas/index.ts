import * as z from "zod";


export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(6, {
        message: "Minimum 8 characters required"
    })
});


export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(6, {
        message: "Minimum 8 characters required"
    }),
    username: z.string().min(1, {
        message: "Name is required"
    })
})