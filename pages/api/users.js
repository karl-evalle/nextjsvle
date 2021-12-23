import prisma from "../../lib/prisma";


export default async(req, res) => {
    const data = JSON.parse(req.body)


    const createdUser = await prisma.vleuser.create({
        data:{
            username:data.username,
            password:data.password,
            email:data.email,
            studentid:'1354809',
            courses: undefined,
            createdAt: undefined
            
            

        }
    })

    res.json(createdUser)
}