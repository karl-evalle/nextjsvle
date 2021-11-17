import React from 'react'
import PropTypes from 'prop-types'
import { Colleges } from '../components/Colleges'
import Image from 'next/image'


const Offices = () => {

    return (
     <div>
         <div className="text-bold text-xl">Connect with our offices Virtually</div>
            <div className="lg:grid grid-cols-3 ">
            {Colleges.map((collegeitem, index) =>{
                return(
                    <>
                    <button key={index} onClick={(e) => {
                        e.preventDefault();
                        window.location.href=`${collegeitem.link}`;
                        }} className="group transform transition duration-500 container mx-auto bg-gray-500 h-40 w-80  text-white text-center m-10 hover:bg-green-700  hover:scale-125 hover:translate-y-4">
            
                    
                    <div className="container mx-auto bg-black h-24 w-full" >

                    </div>
                    <h1 className="transform transition duriation-500  group-hover:-translate-x-20">{collegeitem.college}</h1>
                    <h1 className="transform transition duriation-500  group-hover:-translate-x-14">{collegeitem.officehours}</h1>
                    
                    </button>
                     </>
                )
            })}
        </div>
     </div>
    )
}

export default Offices

