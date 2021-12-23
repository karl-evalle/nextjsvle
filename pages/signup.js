import React from 'react'
import router, { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import prisma from '../lib/prisma'


export default function Signup({users}) {
    const [formData, setFormData] = useState({})
    const [user, setUsers] = useState(users)
   

   
    async function saveUser(e){
        e.preventDefault()
        setUsers([...users,formData])
        const response = await fetch('/api/users', {
          method: 'POST',
          body:JSON.stringify(formData)
          
        })
    
        router.push('./userlist')
        return await response.json()
        
    }

   

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-700">
            <form onSubmit={saveUser}>
            <div className="container bg-white shadow-lg mx-auto flex flex-col h-80 w-80 rounded-lg items-center">
     
               <input type="text" placeholder="username" className="border-2" name="username" onChange= {e => setFormData({
        ...formData, username: e.target.value
      })}/>
               <input type="text" placeholder="password" className="border-2" name="password" onChange= {e => setFormData({
        ...formData, password: e.target.value
      })}/>
                <input type="text" placeholder="email" className="border-2" name="email" onChange= {e => setFormData({
        ...formData, email: e.target.value
      })}/>
                <button type="submit" className="transition-all bg-green-700 rounded border-2 w-20 mx-auto text-white hover:text-black">sign in</button>
                <Link
                   href="/forgotpassword" className="">Forgot Password</Link>

            </div>
            </form>
        </div>
    )
}

export async function getServerSideProps(){
    const users = await prisma.vleuser.findMany()
    
  
    return {
      props: { users } // will be passed to the page component as props
    }
  
  }