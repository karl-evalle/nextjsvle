import React from 'react'
import { Banner } from '../data/bannerdata'

const banner = () => {
    return (
        <div>
            <div className="lg:flex flex-auto">
            {Banner.map((banneritems, index) => {

return(
    <>

      <div className=" container mx-auto bg-white hover:bg-gray-400 transition duration-500 ease-in-out text-center h-96 w-60 grid-col-1 m-40 rounded-lg" onClick={(e) => {
e.preventDefault();
window.location.href=`${banneritems.link}`;
}}>
  <div className="text-bold text-xl">
    <h1 className="font-bold ">{banneritems.label}</h1>
  </div>
</div>  





    </>
)
}




)}
                
            </div>
            
        </div>
    )
}

export default banner
