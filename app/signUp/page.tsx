"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "./action"
import { useFormState } from "react-dom";

interface StateType {
  message: string;
}

export default function Page(){
  const router = useRouter();
  const initState: StateType = {
    message: '',
  };

  const [state, formAction] = useFormState(signUp, initState);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    if (state.message === 'Password must be greater than 6 characters.') {
      setErrorMessage('Password must be greater than 6 characters.');
    } else if (state.message === 'The email is already sign up!') {
      setErrorMessage('The email is already sign up!');
    } else if (state.message === 'Sign up successfully!') {
      setShowSuccessPopup(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
        setEmail('');
        setPassword('');
        setUsername('');
        router.push('/signIn');
      }, 2000); // Adjust timeout as needed
    }
  }, [state.message, router]);



  const SuccessPopup = () => (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg text-black">
        <p>Sign up successful!</p>
      </div>
    </div>
  );
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <form 
        className="p-8 max-w-lg w-full bg-white rounded-lg border border-gray-200 shadow-md"
        action={formAction}
    >
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name= "email"
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
            name= "password"
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
            name= "username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 text-sm text-black"
            required
          />
        </div>
        <div className="error-message-container h-6 mb-2">
          {errorMessage && <div className="text-sm text-red-500">{errorMessage}</div>}
        </div>
        <button type="submit" className="w-full p-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600">Create Account</button>
        {showSuccessPopup && <SuccessPopup />}
      </form>
    </div>
  );
};

