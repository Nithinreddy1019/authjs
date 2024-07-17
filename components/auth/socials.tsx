"use client"

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { Button } from "../ui/button";


export const Socials = () => {

    const onClick = (provider: "google" | "github") => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT
        })
    }

    return (
        <div className="flex items-center w-full gap-x-2">
            <Button
                className="w-fit"
                size="sm"
                variant="secondary"
                // WIP: Add onClick
                onClick={() => onClick("google")}
            >
                <FcGoogle className="w-4 h-4"/>
            </Button>
            <Button
                className="w-fit"
                size="sm"
                variant="secondary"
                // WIP: Add onClick
                onClick={() => onClick("github")}
            >
                <FaGithub className="w-4 h-4"/>
            </Button>
        </div>
    )
}