'use client'
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth , firestore } from '@/app/firebase/config'
import { collection, doc, setDoc } from "firebase/firestore"; 
import { useRouter } from 'next/navigation';


export default function Page(){
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);

  const [ createUserWithEmailAndPassword ] = useCreateUserWithEmailAndPassword( auth );

  const db = collection(firestore, "users");


  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("email : " + email + "password : " + password);
    
    setErrorMessage('');
      
    if (password.length < 5) {
        setErrorMessage('Password must be greater than 6 characters.');
        return;
    }else{
      try{
        const res  = await createUserWithEmailAndPassword(email,password);

        console.log({res});

        if(res){
          await setDoc(doc(db, email), {
            email: email, 
            username: username, 
            level: 1,
            driver: [],
            ship: ["offensive", "defensive" , "utility"] });
          
          setEmail('');
          setPassword('');
          setUsername('');
  
          setShowSuccessPopup(true);
  
          setTimeout(() => {
              setShowSuccessPopup(false);
              router.push('/signIn');
          }, 3000);
        }else{

          setErrorMessage('The email is already sign up!');
          
        }

  
      }catch(e){
        console.error(e);
      }
    }
  };

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
        onSubmit={handleSignUp}
    >
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
        <div className="error-message-container h-6 mb-2">
          {errorMessage && <div className="text-sm text-red-500">{errorMessage}</div>}
        </div>
        <button type="submit" className="w-full p-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-600">Create Account</button>
        {showSuccessPopup && <SuccessPopup />}
      </form>
    </div>
  );
};

