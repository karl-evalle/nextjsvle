import React from 'react'
import prisma from '../lib/prisma'






export async function getServerSideProps(){
        const course = await prisma.courses.findMany()
        
      
        return {
          props: { course } // will be passed to the page component as props
        }
      
      }





