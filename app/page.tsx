'use client'
import React, { useEffect, useState } from "react";
import { Dropdown,DropdownTrigger, DropdownMenu, DropdownItem, Navbar, Link, Button } from "@nextui-org/react";
import Slideshow  from '../components/slideshow';
import cookies from "js-cookie";
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/app/firebase/config';

export default function Home() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = cookies.get('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      cookies.remove('token');
      setIsLoggedIn(false);
      router.push('/');
    } catch (error) {
      console.error("Logout Error", error);
    }
  };

  
  const slides = [
    '/image/map/2.png', 
    '/image/map/3.png', 
    '/image/map/4.png',
    '/image/map/5.png', 
    '/image/map/6.png', 
  ];
  
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
                    <DropdownItem key="logout" onClick={handleLogout} className="text-danger">
                      Log out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                </>
                ) : (
                  <Link href="/signIn">
                    <Button color="danger" >Sign In</Button>
                  </Link>
                )}
              </div>
            </div>
            </Navbar>

      {/* Main Content */}

      {/* Welcome section */}
      <div className="p-20 h-screen">
        <div className="text-center p-12 bg-opacity-50 rounded">
          <p className="text-lg mb-7 text-black">A MOBA game, two teams of players compete against each other on a battlefield.</p>
          <h1 className="text-5xl font-bold mb-6 text-black">Welcome to AstroStrife</h1>
          <p className="text-sm text-black">A one-lane spaceship shooter Multiplayer online battle arena(MOBA) 5v5 game.</p>
          <p className="text-sm text-black"> Around the map scatter a capture the flag base which can capture to boost the team's advantage</p>
          
          <Link href="#whatisAstrostrife" className="py-10">
                <Button color="danger" size="lg" radius="none">
                    Learn more
                </Button>
          </Link>
        </div>
      </div>

      <div className="bg-gray-900 text-white">

        {/* What is AstroStrife section */}

        <div id = 'whatisAstrostrife' className="py-12 text-center">
          <h1 className="text-5xl font-bold mb-6">What is AstroStrife?</h1>
          <p className="text-sm mb-4">AstroStrife is a multiplayer online battle arena 5 versus 5 game.</p>
          <p className="text-sm mb-4">The user input will be WASD and aim with mouse movement instead of left/right click.</p>
          <p className="text-sm">The map will be only one lane with mechanics to motivate and encourage players to play high-risk high-reward.</p>
        </div>

        <div className="flex justify-center py-20 bg-gray-900 text-white">
        <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded">
          <Slideshow slides={slides} />
        </div>
        <div className="rounded py-5">
        <h1 className="text-5xl font-bold mb-6">Map Detail</h1>
          <p className="text-sm mb-3">Map size 1600 x 1600 Unity unit size</p>
          <p className="text-sm mb-3">(1.6 km on each side, with a diagonal of 2.25 km)</p>
          <p className="text-sm mb-3">ship size 8 units typical movement speed </p>
          <p className="text-sm mb-3">of a character is around 35 units/second or about 0.35 km/s.</p>
        </div>
        </div>
        </div>

        {/* Objectives section */}

        <div className="py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">

              {/* Main Objective Box */}
              <div className="rounded p-6">
                <h2 className="text-3xl font-bold mb-4">Main Objective</h2>
                <p className="text-sm mb-3">A one-lane spaceship shooter Multiplayer online battle arena (MOBA) 5v5 game.</p>
                <p className="text-sm">A player must protect their turret and base and destroy the enemy one to win the game.</p>
              </div>
              
              {/* Sub Objective Box */}
              <div className="rounded p-6">
                <h2 className="text-3xl font-bold mb-4">Sub Objective</h2>
                <p className="text-sm mb-3">Each player can choose a unique spaceship with different abilities.</p>
                <p className="text-sm">Players can upgrade their ships and abilities by gaining experience points during the game.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-20 bg-opacity-50 text-black">
        <h1 className="text-3xl font-bold mb-4 py-5">Ship And Driver</h1>
        
        {/* Cards for Ship and Driver */}
        <div className="flex justify-center items-center space-x-4">
          {/* Ship Card */}
          <Link href="/ship">
            <div className="block p-6 border border-black rounded-lg hover:border-red-500 cursor-pointer">
              <h2 className="text-xl font-bold mb-2 text-black">Ship</h2>
              <p className="text-black">Explore different ships and their capabilities.</p>
            </div>
          </Link>

          {/* Driver Card */}
          <Link href="/driver">
            <div className="block p-6 border border-black rounded-lg hover:border-red-500 cursor-pointer">
              <h2 className="text-xl font-bold mb-2 text-black">Driver</h2>
              <p className="text-black">Learn about the drivers and their skills.</p>
            </div>
          </Link>
        </div>
      </div>
      <footer className="py-20 bg-gray-800 text-center"><h3 className="text-xl mb-3">GameLogo</h3></footer>
    </div>
  )
}

