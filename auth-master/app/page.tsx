import { Button } from "@/components/ui/button"
import { Poppins } from "next/font/google"
import { LoginButton } from "@/components/auth/login-button"
import { cn } from "@/lib/utils"
const font = Poppins(
  {
    subsets: ['latine'],
    weight: ['600']
  }
)
export default function Home() {
  return (
<main className="flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_#38bdf8,_#1e40af)]">
    <div className="space-y-6 text-center">
      <h1 className={ cn("text-6xl font-semibold text-white drop-shadow-md",
        font.className,
      )}>
       🔐 Auth
      </h1>
      <p className="text-white text-lg">
        A simple authentication service
      </p>

      <div>
        <LoginButton>
        <Button variant="secondary"  size='lg'>
          Sign in
        </Button>
        </LoginButton>
      </div>
    </div>
</main>


  )
}
