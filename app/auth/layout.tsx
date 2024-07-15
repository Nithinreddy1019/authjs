import { ModeToggle } from "@/components/mode-toggle";



const AuthLayout = ({
    children
}: { children: React.ReactNode }) => {
    return (
        <section className="h-full flex flex-col">
            <nav className="w-full px-4 py-2 border-b dark:border-none">
                <ModeToggle />
            </nav>
            <div className="flex-1 flex flex-col items-center justify-center p-2">
                {children}
            </div>
        </section>
    );
}
 
export default AuthLayout;