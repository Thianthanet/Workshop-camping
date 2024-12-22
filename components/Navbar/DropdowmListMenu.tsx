import { AlignLeft, UserIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import { links } from "@/utils/Links";
import SignOutLinks from "./SignOutLinks";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

const DropdowmListMenu = () => {
  return (
    <div className="flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"}>
            <AlignLeft />
            <UserIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <SignedOut>
            <DropdownMenuItem>
              <SignUpButton>
                <button>Register</button>
              </SignUpButton>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <SignInButton mode="modal">
                <button>Login</button>
              </SignInButton>
            </DropdownMenuItem>
          </SignedOut>
          <SignedIn>
            {links.map((item, index) => {
              return (
                <DropdownMenuItem key={index}>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              );
            })}
          </SignedIn>
          <hr />
          <DropdownMenuItem>
            <SignOutLinks />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default DropdowmListMenu;
