import React from 'react'
import Image from 'next/image'

export default function signin() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-700">
            <div className="container bg-gray-700 mx-auto justify-center flex flex-col h-72 w-72 rounded-lg items-center">
            <Image
        
        alt ={'announements page'}
        src={'/neulogo.png'}
        height='70'
        width ='70'
            />
                <h1 className="text-white"> Sign in</h1>
                <input type="text" className="w-40 rounded "></input>
                <p className="text-white">username</p>
                <input type="text" className="w-40 rounded "></input>
                <p className="text-white">password</p>
                <button className="transition-all rounded border-2 w-20 mx-auto text-white hover:bg-white text-black">sign in</button>
                <a>forgot password?</a>

            </div>
        </div>
    )
}
