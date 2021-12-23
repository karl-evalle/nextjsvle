import React from 'react'
import router from 'next/router'
import { Navbars } from '../../components/Navbars'
import prisma from '../../lib/prisma'

export default function Details({course,lessonsmidterm,lessonsfinals}) {
    console.log(course)
    console.log(lessonsmidterm)
    const createLesson = (e) => {
      e.preventDefault()
      router.push('/createLesson/1')
    }
    
    return (
        <div>
             <Navbars></Navbars>
             <div className="border-2 w-3/4 mx-auto my-6">
            <h1 className="font-extrabold text-3xl m-2">{course.coursecode}</h1>
            <h1 className="border-b-2 font-bold">{course.coursename}</h1>
            <p>{course.coursedescription}</p>
            
            <h1>Midterm</h1>
            <div className='snap-x overflow-x-auto flex w-full border-2 scroll-smooth'>
            {lessonsmidterm.map(less => (
            <div key={less.id} className="snap-center relative flex-shrink-0 p-2 w-64 h-40 mx-5 overflow-hidden rounded-xl border-2 border-black ">
            <h1 className="font-bold p-2">{less.lessonnumber}</h1>
            <h1>What are Databases?</h1>
            <h1>{less.lessondescription}</h1>   
            <h1 className="bg-gray-300">Materials for this lesson</h1>
            <h1>PDF</h1>
            </div>  
         ))}
        </div>

        <h1>finals</h1>
           
        <div className='snap-x overflow-x-auto flex w-full border-2 scroll-smooth'>
            {lessonsfinals.map(less => (
            <div key={less.id} className="snap-center relative flex-shrink-0 p-2 w-64 h-40 mx-5 overflow-hidden rounded-xl border-2 border-black ">
            <h1 className="font-bold p-2">{less.lessonnumber}</h1>
            <h1>What are Databases?</h1>
            <h1>{less.lessondescription}</h1>   
            <h1 className="bg-gray-300">Materials for this lesson</h1>
            <h1>PDF</h1>
            </div>  
         ))}
        </div>

        <button className="mx-auto bg-green-700 rounder-lg p-2" onClick={createLesson}>add a lesson</button>
            
          
         
          </div>
       
    </div>
      )
}


export async function getServerSideProps(context) {
    
    const {id} = context.params 
    const course = await prisma.courses.findUnique({ where: { id: parseInt(id) } })
    const {coursecode} = course
    const lessonsmidterm = await prisma.lessons.findMany({ where: { coursecode:coursecode} })
    const lessonsfinals = await prisma.lessons.findMany({ where: { lessondescription: 'finals',  }, })
    console.log(coursecode)
    return {
      props: {course,lessonsmidterm,lessonsfinals},
       
    };
   
    
  }


