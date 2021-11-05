import React from 'react'
import { AccorData } from './AccorData'

const Accordion = () => {
    return (
        <div>
            <div className="container">
                {AccorData.map((item,index) => {
                    return (
                        <>
                            <h1 className=" text-bold text-xl bg-black text-white">{item.question}</h1>
                            <p>{item.answer}</p>
                        </>
                    )
                }) }
            </div>
        </div>
    )
}

export default Accordion
