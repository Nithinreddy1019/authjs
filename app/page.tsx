import { LoginButton } from "@/components/auth/login-button";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { MdLogin } from "react-icons/md";


export default function Home() {
  return (
    <main className="h-full flex flex-col">
      <nav className="w-full px-4 py-2 border-b dark:border-none">
        <ModeToggle />
      </nav>
      <section className="flex-1 flex flex-col items-center justify-center gap-y-4">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-medium">
            AuthJs 
          </h1>
          <p className="text-sm font-medium">
            See how auth, 2FA & reset works.
          </p>
        </div>
        <LoginButton>
          <Button size="lg">
            Get in 
            <MdLogin className="ml-1 h-5 w-5"/>
          </Button>
        </LoginButton>
      </section>
    </main>
  );
}
