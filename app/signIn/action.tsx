"use server"
import { auth } from "@/app/firebase/config";
import { signInWithEmailAndPassword  } from "firebase/auth";
import { SignJWT , importJWK } from "jose";
import { cookies } from "next/headers";

interface StateType {
    message: string;
  }

export async function login(prevState : StateType, formData : FormData){
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const secrectJWK = {
      kty: 'oct',
      k: process.env.JOSE_SECRET
    }
    
        try{
          console.log("Sign In with : " + email + " ; " + password)
          
          const res = await signInWithEmailAndPassword(auth , email, password);

          console.log({res});

          if(res == null){
            console.log("Fail");
            throw new Error('Incorrect Email or Password')
          }
          
          const secretKey = await importJWK(secrectJWK, 'HS256')
          const token = await new SignJWT({email})
                        .setProtectedHeader({ alg: 'HS256'})
                        .setIssuedAt()
                        .sign(secretKey)
          console.log(token);

          cookies().set('token',token)

          return {message: 'Logged in successfully' };

        }catch(e){
          console.error(e)
          return {message : 'Incorrect Email or Password with : ' + e}
        }

}
