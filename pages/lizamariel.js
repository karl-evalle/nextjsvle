import React from 'react'
import Image from 'next/image'
import Confetti from 'react-confetti'
import useWindowSize from 'react'

export default function lizamariel() {
   
    

    return (
       
        <div className="bg-yellow-200 min-h-screen max-h-screen max-w-scree flex flex-col justify-center">

            <div className="items-center justify-center flex flex-col ">
                <div className="grid grid-cols-3">
               <div className="flex items-center justify-center">
               <h1 className="flex text-3xl lg:text-5xl font-Gloria mx-auto">Liza</h1>
               </div>
               <div className=" h-32 w-32 lg:h-60 lg:w-60 relative mx-auto">
                    <Image
                        className="animate-spin"
                        src={'/sunflower.svg'}
                        layout="fill"
                    />
                </div>
               <div className="flex items-center justify-center">
                <h1 className="text-2xl lg:text-5xl font-Gloria mx-auto">Mariel</h1>
               </div>
                </div>
                
                <div>
                <h1 className="text-6xl lg:text-9xl font-Gloria">CAMERO</h1>
                </div>
                
            </div>
            
          <div className=" flex justify-center ">
          <div className='absolute container h-48 w-36 hover:scale-150 transition ease-out duration-300 left-5 -rotate-12 drop-shadow-lg shadow-lg  hover:-rotate-45 lg:h-72 lg:w-56 lg:left-1/3 md:left-60  '>
                <Image className="transform hover:scale-180 transition ease-out duration-300 rounded-md "
                    src={'/girlfriend/2.jpg'}
                    alt='girlfriendpicture'
                    priority='true'
                    layout="fill"
                    quality="100"
                />
                </div>
                <div className='absolute container h-48 w-36 hover:scale-150 transition ease-out duration-300 right-5 rotate-12 drop-shadow-lg shadow-lg hover:rotate-45 lg:h-72 lg:w-56 lg:right-1/3 md:right-60'>
                <Image className="transform hover:scale-180 transition ease-out duration-300 rounded-xl"
                    src={'/girlfriend/4.jpg'}
                    alt='girlfriendpicture'
                    priority='true'
                    layout="fill"
                    quality="100"
                />
                </div>
                <div className='relative container h-64 w-48 hover:scale-150 transition ease-in-out duration-500 shadow-2xl  drop-shadow-2xl rounded-xl lg:h-96 lg:w-72'>
                <Image className="transform hover:scale-180 transition ease-in-out duration-500 rounded-xl"
                    src={'/girlfriend/1.jpg'}
                    alt='girlfriendpicture'
                    priority='true'
                    layout="fill"
                    quality="100"
                    
                    
                />
                </div>
          </div>
                <div className="flex justify-center flex-col items-center my-5 max-w-32">
                    <h2 className=" text-3xl font-extrabold text-center mx text-white drop-shadow-2xl font-Gloria">Happiest Birthday My One and Only Sunshine!
                    </h2>
                    <h1 className="text-center text-yellow-700 font-bold text-l font-Gloria"> May you enjoy your day with a smile, just know that i am always with you and i am happy to be part
                    of your life and i will be with you forever. I Love you so much. you are the most precious thing in my life</h1>
                </div>
            
        </div>
    ) 
}
