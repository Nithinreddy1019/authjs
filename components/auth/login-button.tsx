"use client"

interface LoginButtonProps {
    children: React.ReactNode,
    mode?: "modal" | "redirect",
    asChild?: boolean
}

export const LoginButton = ({
    children,
    mode = "redirect",
    asChild
}: LoginButtonProps) => {

    const onClick = () => {
        console.log("Clicked")
    }


    if (mode === "modal") {
        return (
            <span>
                WIP: implement modal
            </span>
        )
    }

    return (
        <span
            onClick={onClick}
            className="cursor-pointer"
        >
            {children}
        </span>
    )
};