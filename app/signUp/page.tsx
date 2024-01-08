'use client'
import { useState } from 'react';



export default function Page(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSignUp = () => {
    // Handle the sign-up logic here
    console.log("email : " + email + "password : " + password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 text-sm text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm text-gray-600">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 text-sm text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 text-sm text-gray-600">Username</label>
          <input
            type="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 text-sm text-black"
            required
          />
        </div>
        <button type="submit" onClick={handleSignUp} className="w-full p-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600">Create Account</button>
      </form>
    </div>
  );
};

