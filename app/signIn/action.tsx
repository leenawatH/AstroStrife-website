'use server'
import { auth } from '@/app/firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth'
interface StateType {
    message: string;
  }

export async function login(prevState : StateType, formData : FormData){
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
        try{
          console.log("Sign In with : " + email + " ; " + password)
          
          const res = await signInWithEmailAndPassword(auth , email, password);
          console.log({res});
          if(res == null){
            console.log("Fail");
            throw new Error('Incorrect Email or Password')
          }
          
          return {message: 'Logged in successfully' };

        }catch(e){
          console.error(e)
          return {message : 'Login fail'}
        }

}
