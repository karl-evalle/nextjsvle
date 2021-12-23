import { route } from 'next/dist/server/router'
import router from 'next/router'
import React from 'react'
import { Navbars } from '../../components/Navbars'
import prisma from '../../lib/prisma'
import Link from 'next/link'


export default function dashboard({courselist}) {
  console.log(courselist.length);
  const createCourse = (e) => {
    e.preventDefault()
    router.push('/createcourse')
  }
  
    return (
        <div>
            <Navbars></Navbars>
            
           <div className="border-2 w-3/4 mx-auto my-6">
           <div className="border-b-2 flex"><h1 className="font-extrabold mx-auto">Courses Meet Links</h1></div>
           {courselist.length > 0 && (
           <div className="lg:grid grid-cols-2 mx-auto">
           
               {courselist.map(crs => (
                <Link href ={crs.courselink} key={crs.id} >
                 <div className="border-2 w-60 h-48 rounded-lg m-5 mx-auto ">
                 <button className=" bg-green-600 mx-auto my-4 w-60 rounded-lg p-6 shadow-lg" >
                 <h1 className="transform transition duriation-500  group-hover:-translate-x-20 font-bold">{crs.coursecode}</h1>
                  </button>
                  <h1 className="transform transition duriation-500  group-hover:-translate-x-20 font-bold">{crs.coursename}</h1>
                  <h1 className="transform transition duriation-500  group-hover:-translate-x-20 text-gray-400">{crs.courselink}</h1>
                 
                 </div>
              
              </Link>
             
              ))}
               
           
             
           


            </div>
           )}
             {courselist.length <= 0 && (
           <div className="lg:grid grid-cols-2 mx-auto">
           
          <h1>no currently enrolled courses</h1>
               
           
             
           


            </div>
           )}
           </div>

           <div className="border-2 w-3/4 mx-auto">
           <div className="border-b-2 flex"><h1 className=" font-extrabold">Currently Enrolled Courses</h1><button className="mx-auto bg-green-700 rounder-lg p-2" onClick={createCourse}>add a course</button></div>
           <div className="lg:grid grid-cols-2 mx-auto">
            
           {courselist.map(crs => (
              <Link href ={'/coursesdetails/' + crs.id} key={crs.id} >
                <button className=" bg-gray-300 mx-auto my-4 w-60 rounded-lg p-6" >
                <h1 className="transform transition duriation-500  group-hover:-translate-x-20">{crs.coursename}</h1>
                <h1 className="transform transition duriation-500  group-hover:-translate-x-20">{crs.coursecode}</h1>
                </button>
           
            
            </Link>
           
            ))}
           
            </div>
           </div>

           <footer>
             <h1>new era university</h1>
           </footer>
        </div>
        


    )
}

export async function getServerSideProps(context){
    const {id} = context.params
    const courselist = await prisma.courses.findMany({where:{
      enrolledStudents:{
        some:{
          studentId:id
        }
      }
    }})
    return {
      props: {courselist} // will be passed to the page component as props
    }
  
  }

