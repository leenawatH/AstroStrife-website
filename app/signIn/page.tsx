'use client'
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';
import { useRouter } from 'next/navigation';

export default function Page(){
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword( auth );

  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try{
      console.log("Sign In with : " + email + " ; " + password)
      const res = await signInWithEmailAndPassword(email, password);
      console.log({res});
      setEmail('');
      setPassword('');
      console.log("Done");
      router.push('/')
    }catch(e){
      console.error(e)
      setShowErrorPopup(true);

      setTimeout(() => setShowErrorPopup(false), 3000);
    }
  };

  const ErrorPopup = () => (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg text-black">
        <p>Incorrect Email or Password!!</p>
      </div>
    </div>
  );

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <form 
        className="p-8 max-w-lg w-full bg-white rounded-lg border border-gray-200 shadow-md"
        onSubmit={handleSignIn}
    >
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
        {showErrorPopup && <ErrorPopup />}
        <button type="submit" className="w-full p-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600">Sign In</button>
        <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a
                href="#"
                className="text-blue-500 hover:text-blue-600 cursor-pointer"
                onClick={(e) => {
                    e.preventDefault();
                    router.push('/signUp');
                }}
            >
                Sign Up
            </a>
        </p>
        </div>
      </form>
    </div>
  );
};
