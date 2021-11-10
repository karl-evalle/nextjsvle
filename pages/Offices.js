import React from 'react'
import PropTypes from 'prop-types'
import { Colleges } from '../components/Colleges'

const Offices = () => {
    return (
     <div>
         <div className="text-bold text-xl">Connect with our offices Virtually</div>
            <div className="lg:grid grid-cols-3  ">
            {Colleges.map((collegeitem, index) =>{
                return(
                    <div key={index} className="container  bg-gray-500 h-40 w-60  text-white rounded-md  text-center m-10 ">
                    <>
                    <h1>{collegeitem.college}</h1>
                    <h1>{collegeitem.officehours}</h1>
                    </>
                    </div>
                )
            })}
        </div>
     </div>
    )
}

export default Offices

