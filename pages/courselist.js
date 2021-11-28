import React from 'react'
import prisma from '../lib/prisma'





const CourseList = ({course}) => {

    return (
     <div>
          
            {course.map(crs => (
              <div key={crs.id} >
    
         
            <h1 className="transform transition duriation-500  group-hover:-translate-x-20">{crs.coursename}</h1>
            <h1 className="transform transition duriation-500  group-hover:-translate-x-14">{crs.coursecode}</h1>
            </div>
           
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

