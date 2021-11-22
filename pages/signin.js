import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import { loadGetInitialProps } from 'next/dist/shared/lib/utils'


export default function Signin() {
    const router = useRouter()
    const [userDetails, setUserDetails] = useState({email:"",password:""})

    const submitHandler = e => {
        e.preventDefault()

        Login(userDetails)
    }

    const Login = userDetails => {
        if (userDetails.email == 'lizamariel' && userDetails.password == 'camero'){
            router.push('\lizamariel')
        }
        else if (userDetails.email == 'karl' && userDetails.password == 'evalle'){
            router.push('\dashboard')
        }
        else{
            console.log('bawal ka pumasok')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-700">
            <form onSubmit={submitHandler}>
            <div className="container bg-white shadow-lg mx-auto justify-center flex flex-col h-80 w-80 rounded-lg items-center">
            <Image
        
        alt ={'announements page'}
        src={'/neulogo.png'}
        height='70'
        width ='70'
            />
                <h1 className="text-white"> Sign in</h1>
                <div className="relative m-3">
                    <input type="text" id="username" className="border-b py-1 border-gray-300 bg-gray-100 focus:border-green-300 focus:outline-none focus:text-green-700 focus:border-b-2 transition-colors peer" autoComplete="off" onChange={e => setUserDetails({...userDetails, email: e.target.value})} value={userDetails.email}/>
                     <label htmlFor="username" className="absolute left-3 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-green-700 transition-all">Username</label>
                 </div>
                <div className="relative m-3">
                    <input type="password" id="password" className="border-b py-1 bg-gray-100 focus:outline-none focus:text-green-700 focus:border-b-2 transition-colors peer" autoComplete="off" onChange={e => setUserDetails({...userDetails, password: e.target.value})} value={userDetails.password} />
                     <label htmlFor="password" className="absolute left-3 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-green-700 transition-all">Password</label>
                 </div>
                <button type="submit" value="LOGIN" className="transition-all bg-green-700 rounded border-2 w-20 mx-auto text-white hover:text-black">sign in</button>
                <Link
                   href="/forgotpassword" className="">Forgot Password</Link>

            </div>
            </form>
        </div>
    )
}
