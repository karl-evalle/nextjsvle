import React from 'react'
import { Navbars } from '../components/Navbars'
import prisma from '../lib/prisma'





const CourseList = ({course}) => {

    return (
      
     <div>
  
          
            {course.map(crs => (
              <div key={crs.id} >
    
            <div className="container mx-auto bg-black h-24 w-full" >

            </div>
            <h1 className="transform transition duriation-500  group-hover:-translate-x-20">{crs.coursename}</h1>
            <h1 className="transform transition duriation-500  group-hover:-translate-x-14">{crs.coursecode}</h1>
            </button>
           
            ))}
            

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

