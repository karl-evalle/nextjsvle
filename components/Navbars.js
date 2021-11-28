import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Navbars = () => {
  return (
    <>
      <nav className='flex items-center flex-wrap bg-green-700 p-3 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
          <Image className="m-auto"
        
        alt ={'announements page'}
        src={'/neulogo.png'}
        height='50'
        width ='50'
            />
            <span className='text-lg text-white font-bold uppercase tracking-wide'>
              New Era University
            </span>
          </a>
        </Link>
        <button className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </nav>
    </>
  );
};
