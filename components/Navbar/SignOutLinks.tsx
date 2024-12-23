"use client"

import { SignOutButton } from '@clerk/nextjs'
import { useToast } from "@/hooks/use-toast"


const SignOutLinks = () => {
    const { toast } = useToast()

    const handleLogout = () => {
        toast({ description: "Logout Seccessfully!!" });
    }
  return (
    <div>
        <SignOutButton redirectUrl='/'>
            <button onClick={handleLogout}>
                Logout
            </button>
        </SignOutButton>
    </div>
  )
}
export default SignOutLinks