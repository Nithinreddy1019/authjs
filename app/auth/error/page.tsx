import Link from "next/link";


const ErrorPage = () => {
    return (
        <div className="h-full flex flex-col gap-5 items-center justify-center">
            <h1 className="text-5xl font-bold">Something went wrong!</h1>
            <Link href="/auth/signin">
                🔙 Go back to login 
            </Link>
        </div>
    );
}
 
export default ErrorPage;