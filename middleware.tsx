import { NextResponse, } from "next/server";
import { jwtVerify, importJWK } from "jose";

export async function middleware(request : any){

    try{
        const token = request.cookies.get('token')
        console.log("token : " + token)
        const secrectJWK = {
            kty: 'oct',
            k: process.env.JOSE_SECRET
        }
        const secretKey = await importJWK(secrectJWK, 'HS256')
        const { payload } = await jwtVerify(token.value, secretKey)
        console.log(payload)

        const requestHeaders = new Headers(request.headers)
        requestHeaders.set('user',JSON.stringify({email: payload.email}))
        const response = NextResponse.next({
            request: {
                headers: requestHeaders,
            },
        })
        return response
    }catch(e){
        return NextResponse.redirect(new URL('/', request.url))
    }
}

export const config = {
    matcher: '/account/:path*',
}