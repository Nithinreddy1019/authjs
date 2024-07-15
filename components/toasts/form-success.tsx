import { CheckCircledIcon } from "@radix-ui/react-icons"


interface FormSuccessProps {
    message: string | undefined
}

export const FormSuccess = ({
    message
}: FormSuccessProps) => {

    if (!message) return null;

    return (
        <div className=" bg-emerald-500/30 flex items-center gap-x-2 p-1.5 px-4 rounded-lg text-emerald-500">
            <CheckCircledIcon className="h-4 w-4 "/>
            <p>{message}</p>
        </div>
    )
}