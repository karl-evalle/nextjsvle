import prisma from "../../lib/prisma";


export default async(req, res) => {
    const lesson = JSON.parse(req.body)

   

    const createdLesson = await prisma.lessons.create({
        data:{
         lessonnumber:lesson.lessonnumber,
         lessondescription:lesson.lessondescription,
         course:{
             connect:{id:parseInt(lesson.course)}
         }, 
         

        }
      
    })

    res.json(createdLesson)
}