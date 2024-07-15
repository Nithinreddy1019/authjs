"use client"

import { useForm } from "react-hook-form"
import { CardWrapper } from "../card-wrapper"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod";

import {
    Form,
    FormControl,
    FormItem,
    FormField,
    FormMessage,
    FormLabel
} from "@/components/ui/form";
import { RegisterSchema } from "@/schemas";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../toasts/form-error";
import { FormSuccess } from "../toasts/form-success";
import { loginaction } from "@/actions/login-action";
import { useState, useTransition } from "react";


export const RegisterForm = () => {

    const [isPending, setTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            username: ""
        }
    });

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("")
        setSuccess("")

        console.log(values);
        // setTransition(() => {
        //     loginaction(values)
        //     .then((data) => {
        //         setError(data.error);
        //         setSuccess(data.success);
        //     })
        // })
    }

    return (
        <CardWrapper
            headerLabel="Welcome to Auth Learn"
            backButtobHref="/auth/login"
            backButtoinLabel="Already have an account?"
            showSocials
        >
            <Form {...form}>
                <form 
                    className="space-y-6"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <div className="space-y-4">
                        <FormField 
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            placeholder="emailaddress@gmail.com"
                                            type="email"
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name="username"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Username
                                    </FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            placeholder="What's your name"
                                            type="text"
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField 
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Password
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="******"
                                            type="password"
                                            disabled={isPending}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError message={error}/>
                    <FormSuccess message={success}/>
                    <Button
                        className="font-bold"
                        type="submit"
                        disabled={isPending}
                    >
                        Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}