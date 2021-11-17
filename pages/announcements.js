import React from 'react'
import Image from 'next/image'

const announcements = () => {
    return (
        <div >
            <div className="text-center text-xl text-bold"><h1>Announcements</h1></div>
            <div className="container mx-auto w-full h-96 items-center relative">
            <Image className="object-contain"
                    alt ={'announements page'}
                    src ={'/announcement.jpg'}
                    layout="fill"
                />
            </div>
        </div>
       
    )
}

export default announcements
