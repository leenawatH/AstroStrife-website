'use client'
import { useState } from 'react';

export default function Page(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Sign In</h2>
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
        <button type="submit" className="w-full p-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600">Sign In</button>
      </form>
    </div>
  );
};
