import prisma from "../../lib/prisma";


export default async(req, res) => {
    const data = JSON.parse(req.body)


    const createdUser = await prisma.vleuser.create({
        data
    })

    res.json(createdUser)
}