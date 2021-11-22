import React from 'react'
import Navbar from '../components/Navbar'
import { Navbar2 } from '../components/navbar2'
import Offices from './Offices'

export default function dashboard() {
    return (
        <div className="bg-gray-100">
            <Navbar2></Navbar2>
            <h1 className="text-xl font-extrabold">Recenty Accessed Courses</h1>
            <div className="bg-white  mx-auto min-w-3/4 max-w-min">
             <Offices/>
            </div>
            <h1>Course Overview</h1>
            <div className="bg-white min-h-screen mx-auto min-w-3/4 max-w-min">
             <h1>testing</h1>
            </div>
        </div>
    )
}
