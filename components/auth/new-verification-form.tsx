"use client"

import { CardWrapper } from "../card-wrapper"
import { ImSpinner3 } from "react-icons/im";
import { FiLoader } from "react-icons/fi";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { newVerificationAction } from "@/actions/new-verification-action";
import { FormError } from "../toasts/form-error";
import { FormSuccess } from "../toasts/form-success";



export const NewVerificationForm = () => {

    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");

    const onSubmit = useCallback(() => {
        if (!token) {
            setError("Missing token")
            return;
        }

        newVerificationAction(token)
            .then((data) => {
                setError(data.error);
                setSuccess(data.success);
            })
            .catch(() => {
                setError("Something went wrong")
            })
    }, [token])

    useEffect(() => {
        onSubmit();
    }, [onSubmit])

    return (
        <CardWrapper
            headerLabel="Verification page"
            backButtobHref="/auth/login"
            backButtoinLabel="Back to login"
            subHeading="confirming your verification"
        >
            <div className="flex items-center justify-center w-full">
                {!success && !error && (
                    <FiLoader className="animate-spin h-6 w-6"/>
                )}
                <FormError message={error}/>
                <FormSuccess message={success}/>
            </div>
        </CardWrapper>
    )
}