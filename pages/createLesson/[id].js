import React from 'react'
import router, { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import prisma from '../../lib/prisma'


export default function Signup({lessons,id}) {
    const [formData, setFormData] = useState({})
    const [lesson, setLessons] = useState(lessons)
    

   
    async function saveLesson(e){
        e.preventDefault()
        setLessons([...lessons,formData])
        const response = await fetch('/api/lessons', {
          method: 'POST',
          body:JSON.stringify(formData)
          
        })
       router.push('/coursesdetails/' + parseInt(id))
        return await response.json()
        
    }

   

    return (
        <div className="min-h-screen flex items-center justify-center bg-green-700">
            <form onSubmit={saveLesson}>
            <div className="container bg-white shadow-lg mx-auto flex flex-col h-80 w-80 rounded-lg items-center">
     
               <input type="text" placeholder="Lesson Number" className="border-2" name="lessonnumber" onChange= {e => setFormData({
        ...formData, lessonnumber: e.target.value
      })}/>
               <input type="text" placeholder="course" className="border-2"  name="course" onChange= {e => setFormData({
        ...formData, course: e.target.value
      })}/>
                 <input type="text" placeholder="lessondescription" className="border-2" name="lessondescription" onChange= {e => setFormData({
        ...formData, lessondescription: e.target.value
      })}/>
                
                <button type="submit" className="transition-all bg-green-700 rounded border-2 w-20 mx-auto text-white hover:text-black">sign in</button>
                <Link
                   href="/forgotpassword" className="">Forgot Password</Link>

            </div>
            </form>
        </div>
    )
}

export async function getServerSideProps(context){
  const {id} = context.params
    const lessons = await prisma.lessons.findMany()
    
  
    return {
      props: { lessons,id } // will be passed to the page component as props
    }
  
  }