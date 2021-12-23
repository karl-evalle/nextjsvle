import React from 'react'
import {useState} from 'react'
import prisma from '../lib/prisma'
import router from 'next/router'

export default function createcourse({course}) {
    const [formData, setFormData] = useState({})
    const [courses, setCourse] = useState(course)
    console.log(course)
    async function saveCourse(e){
        e.preventDefault()
        setCourse([...course,formData])
        const response = await fetch('/api/courses', {
          method: 'POST',
          body:JSON.stringify(formData)
        })
    
        router.push('\dashboard')
        return await response.json()
    }




    return (
        <div className="min-h-screen flex items-center justify-center bg-green-700"> 
            <form onSubmit={saveCourse}>
                 <div className="container bg-white shadow-lg mx-auto flex flex-col space-y-4 f h-80 w-80 rounded-lg items-center p-10">
                 <input type="text"  placeholder="course name" onChange= {e => setFormData({
        ...formData, coursename: e.target.value
      })}></input>
                 <input type="text"  placeholder="course code" onChange= {e => setFormData({
        ...formData, coursecode: e.target.value
      })}></input>
       <input type="text"  placeholder="course Link" onChange= {e => setFormData({
        ...formData, courselink: e.target.value
      })}></input>
      <textarea type="text"  placeholder="course Description" onChange= {e => setFormData({
        ...formData, coursedescription: e.target.value
      })}></textarea>
      
      
      
      <button type="submit">Submit</button>
                 </div>
            </form>
        </div>
    )
}

export async function getServerSideProps(){
    const course = await prisma.courses.findMany()
    
  
    return {
      props: { course } // will be passed to the page component as props
    }
  
  }
