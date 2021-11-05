import React from 'react'
import Image from 'next/image'

const announcements = () => {
    return (
        <div >
            <div className="text-center text-xl text-bold items-center"><h1>Announcements</h1></div>
            <div className="container mx-auto items-center">
            <Image
        alt ={'announements page'}
        src ={'/announcement.jpg'}
        height='600'
        width ='1080'
            />
            </div>
        </div>
       
    )
}

export default announcements
