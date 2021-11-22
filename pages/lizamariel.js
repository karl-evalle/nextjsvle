import React from 'react'
import Image from 'next/image'

export default function lizamariel() {
    return (
        <div className="bg-yellow-200 min-h-screen flex flex-col justify-center">
            
          <div className=" flex justify-center ">
          <div className='absolute container h-48 w-32 hover:scale-150 transition-all left-0 -rotate-12 drop-shadow-lg shadow-lg '>
                <Image className="transform hover:scale-180 transition-all rounded-md "
                    src={'/girlfriend/2.jpg'}
                    alt='girlfriendpicture'
                    priority='true'
                    layout="fill"
                    quality="100"
                />
                </div>
                <div className='absolute container h-48 w-32 hover:scale-150 transition-all right-5 rotate-12 drop-shadow-lg shadow-lg'>
                <Image className="transform hover:scale-180 transition-all rounded-xl"
                    src={'/girlfriend/3.jpg'}
                    alt='girlfriendpicture'
                    priority='true'
                    layout="fill"
                    quality="100"
                />
                </div>
                <div className='relative container h-64 w-48 hover:scale-150 transition-all shadow-2xl  drop-shadow-2xl rounded-xl'>
                <Image className="transform hover:scale-180 transition-all rounded-xl"
                    src={'/girlfriend/1.jpg'}
                    alt='girlfriendpicture'
                    priority='true'
                    layout="fill"
                    quality="100"
                />
                </div>
          </div>
                <div className="flex justify-center flex-col items-center my-5">
                    <h2 className=" text-3xl font-extrabold text-center mx text-white drop-shadow-2xl ">Happiest Birthday My One and Only Sunshine!
                    </h2>
                    <h1 className="text-center"> May you enjoy your day with a smile, just know that i am always with you and i am happy to be part
                    of your life and i will be with you forever. I Love you so much. you are the most precious thing in my life</h1>
                </div>
            
        </div>
    ) 
}
