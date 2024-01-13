'use server'
import { firestore } from "../firebase/config";
import { doc, getDoc } from 'firebase/firestore';
import { headers } from 'next/headers'

interface UserData {
    id: String;
    username: String;
    email: String;
    ship: [];
    driver: [];
    level: Number;
  }

export async function fetchUserData(){
    const headerRequest : any = headers()
    const user = JSON.parse(headerRequest.get('user'))

    const docRef = doc(firestore, 'users', user.email);

    const docSnap = await getDoc(docRef);

    return docSnap.data() as UserData
    
}