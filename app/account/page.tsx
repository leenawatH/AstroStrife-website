'use client'
import React, { useEffect, useState } from "react";
import { Dropdown,DropdownTrigger, DropdownMenu, DropdownItem, Navbar, Link, Button } from "@nextui-org/react";
import cookies from "js-cookie";

export default function Page() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = cookies.get('token'); // Replace 'token' with your cookie token name
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  
  
  return (

    <div className="bg-gray-100">
          {/* Navigation Bar */}
          <Navbar>
            <div className="container mx-auto flex justify-between items-center p-4">
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
                  {isLoggedIn ? (
                  
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
                    <DropdownItem key="logout" href="/logout" className="text-danger">
                      Log out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                </>
                ) : (
                  <Link href="/signIn">
                    <Button color="danger">Sign In</Button>
                  </Link>
                )}
              </div>
            </div>
            </Navbar>

      {/* Main Content */}

    </div>
  )
}

