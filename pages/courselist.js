import React from 'react'
import prisma from '../lib/prisma'





const CourseList = ({course}) => {

    return (
     <div>
            <div className="lg:grid grid-cols-2 ">
            {course.map(crs => (
              <button key={crs.id} className="group transform transition duration-500 container bg-gray-500 h-40 w-80  text-white text-center m-10 hover:bg-green-700  hover:scale-125 hover:translate-y-4">
    
            <div className="container mx-auto bg-black h-24 w-full" >

            </div>
            <h1 className="transform transition duriation-500  group-hover:-translate-x-20">{crs.coursename}</h1>
            <h1 className="transform transition duriation-500  group-hover:-translate-x-14">{crs.coursecode}</h1>
            </button>
           
            ))}
            
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

export default CourseList

