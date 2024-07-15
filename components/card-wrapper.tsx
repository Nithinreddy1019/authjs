"use client"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,

} from "@/components/ui/card";
import { Socials } from "./auth/socials";
import { BackButton } from "./auth/back-button";


interface CardWrapperProps {
    children: React.ReactNode,
    headerLabel: string,
    backButtoinLabel: string,
    backButtobHref: string,
    showSocials?: boolean
}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtoinLabel,
    backButtobHref,
    showSocials
}: CardWrapperProps) => {
    return (
        <Card className="shadow-[5px_5px_0px_0px_rgba(109,40,217)] dark:border-none py-6">
            <CardHeader>
                <h1 className="text-4xl font-medium">
                    {headerLabel}
                </h1>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {showSocials && (
                <CardFooter>
                    <Socials />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton 
                    label={backButtoinLabel}
                    href={backButtobHref}
                />
            </CardFooter>
        </Card>
    )
}