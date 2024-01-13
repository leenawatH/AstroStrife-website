"use client"
import { Dropdown,DropdownTrigger, DropdownMenu, DropdownItem, Navbar, Link, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import cookies from "js-cookie";

export default function Page(){
    const router = useRouter();

    const handleLogout = async () => {
        try {
          await signOut(auth);
          cookies.remove('token');
          router.push('/');
        } catch (error) {
          console.error("Logout Error", error);
        }
      };


    return (
        <div className="bg-gray-100">
             <Navbar>
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex space-x-10">
                {/* Logo and navigation items */}
                <Link color="foreground" href="/">
                  <div className="font-bold text-lg">GameLogo</div>
                </Link>
                <Link color="foreground" href="/">
                  Game
                </Link>
                <Link color="foreground" href="/ship">
                  Ship
                </Link>
                <Link color="foreground" href="/driver">
                  Driver
                </Link>
                <Link color="foreground" href="/news">
                  News
                </Link>
              </div>
              <div>
            
                  
                  <><Dropdown>
                  <DropdownTrigger>
                    <Button 
                      color="danger"
                    >
                      Account
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Link Actions">
                    <DropdownItem key="account" href="/account" className="text-black">
                      View Account
                    </DropdownItem>
                    <DropdownItem key="logout" onClick={handleLogout} className="text-danger">
                      Log out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                </>
              </div>
            </div>
            </Navbar>  
        </div>
    )
}