import Link from "next/link"
import { Button } from "../ui/button"


interface BackButtonProps {
    label: string,
    href: string
}

export const BackButton = ({
    label,
    href
}: BackButtonProps) => {
    return(
        <Button
            variant="link"
            size="sm"
            asChild
            className="px-0"
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    )
}