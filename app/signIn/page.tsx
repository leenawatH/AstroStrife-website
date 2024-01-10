'use client'
import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { login } from './action'
interface StateType {
  message: string;
}

export default function Page(){
  const initState: StateType = {
    message: '',
  };

  const [state, formAction] = useFormState(login, initState);

  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
      if(state.message == 'Login fail'){
        console.log("Login fail")
        setErrorMessage('Incorrect Email or Password');
      }else if(state.message == 'Logged in successfully'){
        console.log("Logged in successfully")
        router.push('/');
      }
  }, [state.message, router]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <form 
        className="p-8 max-w-lg w-full bg-white rounded-lg border border-gray-200 shadow-md"
        action={formAction}
    >
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Sign In</h2>
        <div className="mb-4 py-2">
          <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name = "email"
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
            name = "password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 text-sm text-black"
            required
          />
        </div>
        <div className="error-message-container h-6 mb-2">
          {errorMessage && <div className="text-sm text-red-500">{errorMessage}</div>}
        </div>
        <div className='py-2'>
          <button className="w-full p-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600">Sign In</button>
        </div>
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
