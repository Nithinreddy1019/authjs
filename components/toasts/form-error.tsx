import { ExclamationTriangleIcon } from "@radix-ui/react-icons"


interface FormErrorProps {
    message: string | undefined
}

export const FormError = ({
    message
}: FormErrorProps) => {

    if (!message) return null;

    return (
        <div className="bg-destructive/30 flex items-center gap-x-2 p-1.5 px-4 rounded-lg text-destructive">
            <ExclamationTriangleIcon className="h-4 w-4 "/>
            <p>{message}</p>
        </div>
    )
}