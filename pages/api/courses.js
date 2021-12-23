import prisma from "../../lib/prisma";


export default async(req, res) => {
    const data = JSON.parse(req.body)


    const createdCourse = await prisma.courses.create({
        data
    })

    res.json(createdCourse)
}