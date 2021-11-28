import React from 'react'
import { Navbars } from '../components/Navbars'
import prisma from '../lib/prisma'



export default function dashboard({course}) {
    return (
        <div>
            <Navbars></Navbars>
            
           <div className="border-2 w-3/4 mx-auto my-6">
           <div className="border-b-2 flex"><h1 className="font-extrabold">Recently Accessed Courses</h1></div>
           <div className="lg:grid grid-cols-2 mx-auto">
            
            {course.map(crs => (
              <button key={crs.id} className=" bg-gray-300 mx-auto my-4 w-60" >
            <h1 className="transform transition duriation-500  group-hover:-translate-x-20">{crs.coursename}</h1>
            <h1 className="transform transition duriation-500  group-hover:-translate-x-14">{crs.coursecode}</h1>
            </button>
           
            ))}
            </div>
           </div>

           <div className="border-2 w-3/4 mx-auto">
           <div className="border-b-2 flex"><h1 className=" font-extrabold">Currently Enrolled Courses</h1><button className="mx-auto bg-green-700 rounder-lg p-2" onClick="">add a course</button></div>
           <div className="lg:grid grid-cols-2 mx-auto">
            
            {course.map(crs => (
              <button key={crs.id} className=" bg-gray-300 mx-auto my-4 w-60" >
            <h1 className="transform transition duriation-500  group-hover:-translate-x-20">{crs.coursename}</h1>
            <h1 className="transform transition duriation-500  group-hover:-translate-x-14">{crs.coursecode}</h1>
            </button>
           
            ))}
            </div>
           </div>
        </div>


    )
}

export async function getServerSideProps(){
    const course = await prisma.courses.findMany()
    
  
    return {
      props: { course } // will be passed to the page component as props
    }
  
  }

