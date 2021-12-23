import React from 'react'

export default function testing({lessons}) {
    console.log({lessons})
    return (
        <div>
            
        </div>
    )
}


export async function getServerSideProps() {
    
    const courseshit = 'cla-2575-53tl'
    const lessons = await prisma.lessons.findMany({ where: { course:'cla-2575-53tl',  }, })
    return {
        props: {lessons}
      };

    
  }


