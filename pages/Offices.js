import React from 'react'
import PropTypes from 'prop-types'

function Offices({collegename,officedescription}) {
    return (
        <div className="container bg-gray-700 h-28 w-64 text-white rounded-md text-center">
            <h1 className="text-bold text-xl">{collegename}</h1>
            <h1>{officedescription}</h1>
        </div>
    )
}

export default Offices

