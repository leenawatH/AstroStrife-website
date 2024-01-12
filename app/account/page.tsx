'use client'
import React, { useEffect, useState } from "react";
import { Dropdown,DropdownTrigger, DropdownMenu, DropdownItem, Navbar, Link, Button } from "@nextui-org/react";
import { fetchUserData } from './action'

interface UserData {
  id: String;
  username: String;
  ship: [];
  driver: [];
  level: Number;
}

export default function Page() {

  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    async function getUserData() {
      const data = await fetchUserData(); // Pass the actual email id or get from context
      setUserData(data);
    }
    
    getUserData();
  }, []);

  return (

    <div className="bg-gray-100">
          {/* Navigation Bar */}
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
                    <DropdownItem key="logout" href="/logout" className="text-danger">
                      Log out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                </>
              </div>
            </div>
            </Navbar>
            <div className="p-40 justify-center flex">
            <div className="grid grid-cols-6 gap-4 w-full">
              {/* Left column taking up 2/6 of the space */}
              <div className="col-span-2 rounded p-6 bg-gray-300">
                <h1 className="text-5xl font-bold text-black">Account Setting</h1>
                {/* ... rest of your left column content */}
              </div>
              {/* Right column taking up 4/6 of the space */}
             
              <div className="col-span-4 rounded p-6 bg-gray-400">
                <h1 className="text-5xl font-bold text-black">{userData?.username}</h1>
                {/* ... rest of your right column content */}
              </div>
              <div className="col-span-4 rounded p-6 bg-gray-400">
                <h1 className="text-5xl font-bold text-black">{userData?.level.toString()}</h1>
                {/* ... rest of your right column content */}
              </div>
            </div>
      </div>            
    </div>
  );
}

