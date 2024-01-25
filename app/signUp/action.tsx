"use server"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth , firestore } from "@/app/firebase/config";
import { collection, doc, setDoc } from "firebase/firestore"; 
interface StateType {
    message: string;
  }

export async function signUp(prevState : StateType, formData : FormData){
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const username = formData.get('username') as string;

    const db = collection(firestore, "users");
          
    if (password.length < 5) {
        return {message : 'Password must be greater than 6 characters.'}
    }else{
          try{
            const res  = await createUserWithEmailAndPassword(auth,email,password);
    
            console.log({res});
    
            if(res){
              await setDoc(doc(db, email), {
                email: email, 
                username: username, 
                level: 1,
                driver: [],
                game_histories: [],
                ship: ["offensive", "defensive" , "utility"] });
                return {message : 'Sign up successfully!'}
            }else{
                return {message : 'The email is already sign up!'}
            }
          }catch(e){
            console.error(e)
            return {message : 'The email is already sign up!'}
          }
        }
      };
    
