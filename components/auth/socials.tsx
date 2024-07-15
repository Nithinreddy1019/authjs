"use client"

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";


export const Socials = () => {
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button
                className="w-full"
                size="sm"
                variant="secondary"
                // WIP: Add onClick
                onClick={() => {}}
            >
                <FcGoogle className="w-4 h-4"/>
            </Button>
            <Button
                className="w-full"
                size="sm"
                variant="secondary"
                // WIP: Add onClick
                onClick={() => {}}
            >
                <FaGithub className="w-4 h-4"/>
            </Button>
        </div>
    )
}