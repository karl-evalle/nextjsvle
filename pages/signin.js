import React from 'react'
import Image from 'next/image'


export default function signin() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-700">
            <div className="container bg-white mx-auto justify-center flex flex-col h-80 w-80 rounded-lg items-center">
            <Image
        
        alt ={'announements page'}
        src={'/neulogo.png'}
        height='70'
        width ='70'
            />
                <h1 className="text-white"> Sign in</h1>
                <div className="relative m-3">
                    <input type="text" id="username" className="border-b py-1 focus:border-green-300 focus:outline-none focus:text-green-700 focus:border-b-2 transition-colors peer" autocomplete="off"/>
                     <label htmlFor="username" className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-green-700 transition-all">Username</label>
                 </div>
                <div className="relative m-3">
                    <input type="text" id="username" className="border-b py-1 focus:outline-none focus:text-green-700 focus:border-b-2 transition-colors peer" autoComplete="off"/>
                     <label htmlFor="username" className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-green-700 transition-all">Password</label>
                 </div>
                <button className="transition-all bg-green-500 rounded border-2 w-20 mx-auto text-white hover:bg-green-700 hover:text-black">sign in</button>
                <a>forgot password?</a>

            </div>
        </div>
    )
}
