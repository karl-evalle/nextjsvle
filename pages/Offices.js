import React from 'react'
import PropTypes from 'prop-types'
import { Colleges } from './Colleges'

const Offices = () => {
    return (
        <div className="grid grid-cols-3 gap-60">
            {Colleges.map((collegeitem, index) =>{
                return(
                    <div  className="container bg-gray-700 items-stretch text-white rounded-md text-center">
                    <>
                    <h1>{collegeitem.college}</h1>
                    <h1>{collegeitem.officehours}</h1>
                    </>
                    </div>
                )
            })}
        </div>
    )
}

export default Offices
