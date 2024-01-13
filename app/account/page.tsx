"use client"
import React, { useEffect, useState } from "react";
import { Dropdown,DropdownTrigger, DropdownMenu, DropdownItem, Navbar, Link, Button } from "@nextui-org/react";
import { fetchUserData } from "./action";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import cookies from "js-cookie";

interface UserData {
  id: String;
  username: String;
  email: String;
  ship: [];
  driver: [];
  level: Number;
}

export default function Page() {

  const [userData, setUserData] = useState<UserData | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function getUserData() {
      const data = await fetchUserData(); // Pass the actual email id or get from context
      setUserData(data);
    }
    
    getUserData();
  }, []);

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
                    <DropdownItem key="logout" onClick={handleLogout} className="text-danger">
                      Log out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                </>
              </div>
            </div>
            </Navbar>  
      <div className="bg-gray-100 flex justify-center items-center px-4 py-20"
      style={{ 
        paddingTop: '10rem',
      }}>
      <div className="container max-w-7xl">
        <div className="flex flex-grow pt-[4rem]">
          {/* Sidebar */}
          <div className="w-1/4 p-4 bg-gray-100 fixed h-full overflow-y-auto">
            <h1 className="text-5xl font-bold text-gray-800">Account</h1>
            <h1 className="text-5xl font-bold text-gray-800 mb-10">Management</h1>
            <ul className="space-y-2">
              <li>
                <a href="#personal-information" className="text-gray-800 hover:text-gray-500 transition-colors">Personal Information</a>
              </li>
              <li>
                <a href="#game-data" className="text-gray-800 hover:text-gray-500 transition-colors">Game Data</a>
              </li>
              <li>
                <a href="#unit-data" className="text-gray-800 hover:text-gray-500 transition-colors">Unit Data</a>
              </li>
              {/* ... other links */}
            </ul>
          </div>
          <div className="w-full md:w-5/12"></div>
          {/* Main Content */}
          <div className="w-full md:w-3/4 p-8">

            <div className="text-black p-6">
              {/* Personal Information Form */}
              <div 
                id="personal-information"  
                style={{ 
                  paddingTop: '4rem',
                  marginTop: '-4rem', 
                }}
              >
                <h1 className="text-3xl font-bold mb-6 py-5">Personal Information</h1>
                
                <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Username</label>
                    <input 
                      type="text" 
                      id="username" 
                      readOnly 
                      className="bg-gray-300 p-3 text-black placeholder-black focus:ring-0" 
                      placeholder={userData?.username ? String(userData.username) : 'No username'} 
                    />

                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Email</label>
                    <input 
                      type="text" 
                      id="email" 
                      readOnly 
                      className="bg-gray-300 p-3 text-black placeholder-black focus:ring-0" 
                      placeholder={userData?.email ? String(userData.email) : 'No username'}
                    />

                  </div>
                </div>
                    
                 
                </form>
              </div>
            </div>

            <div className="text-black p-6" style={{ 
                  paddingTop: '6rem',
                  
                }}>
              
              <div 
                id="game-data"  
                style={{ 
                  paddingTop: '4rem',
                  marginTop: '-4rem', 
                }}
              >
                <h1 className="text-3xl font-bold mb-6 py-5">Game Data</h1>
                
                <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">Username</label>
                    <input 
                      type="text" 
                      id="username" 
                      readOnly 
                      className="bg-gray-300 p-3 text-black placeholder-black focus:ring-0" 
                      placeholder={userData?.username ? String(userData.username) : 'No username'} 
                    />

                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Level</label>
                    <input 
                      type="text" 
                      id="level" 
                      readOnly 
                      className="bg-gray-300 p-3 text-black placeholder-black focus:ring-0" 
                      placeholder={userData?.level ? String(userData.level) : 'No username'} 
                    />

                  </div>
                </div>

                </form>
              </div>
            </div>

            <div className="text-black p-6" style={{ 
                  paddingTop: '6rem',
                  
                }}>
              
              <div 
                id="unit-data"  
                style={{ 
                  paddingTop: '4rem',
                  marginTop: '-4rem', 
                }}
              >
                <h1 className="text-3xl font-bold mb-6 py-5">Unit Data</h1>
                
                <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold mb-2">Ship</label>
                    
                    {userData?.ship && userData.ship.length > 0 ? (
                      userData.ship.map((shipItem, index) => (
                        <input
                          key={index}
                          type="text"
                          readOnly
                          className="bg-gray-300 p-3 text-black placeholder-black focus:ring-0 mb-2"
                          value={String(shipItem)} // Display the ship item as the value of the input
                        />
                              ))
                            ) : (
                              <input 
                                type="text" 
                                readOnly 
                                className="bg-gray-300 p-3 text-black placeholder-black focus:ring-0" 
                                placeholder="No Ship" 
                              />
                            )}

                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Driver</label>
                    
                    {userData?.driver && userData.driver.length > 0 ? (
                      userData.driver.map((driverItem, index) => (
                        <input
                          key={index}
                          type="text"
                          readOnly
                          className="bg-gray-300 p-3 text-black placeholder-black focus:ring-0 mb-2"
                          value={String(driverItem)} // Display the ship item as the value of the input
                        />
                              ))
                            ) : (
                              <input 
                                type="text" 
                                readOnly 
                                className="bg-gray-300 p-3 text-black placeholder-black focus:ring-0" 
                                placeholder="No Driver" 
                              />
                            )}

                  </div>
                </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

