'use client'

import { login } from "./action"

export default function Page(){
    return(
        <form action = {login}>
            <div>
                Email <input type="text" placeholder = "Email" name = "email" />
            </div>
            <div>
                Password <input type="password" placeholder = "Password" name = "password" />
            </div>
            <button>Login</button>
            
        </form>

        
    )
}