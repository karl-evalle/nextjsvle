import React from 'react'

const mainsection = () => {
    return (
        <div className="container bg-main-image bg-no-repeat bg-cover mx-auto w-full">
       <div className="lg:flex">
              <div className="container mx-auto bg-green-700 hover:bg-gray-400 transition duration-500 ease-in-out text-center h-96 w-60 grid-col-1 m-40 rounded-lg" onClick={(e) => {
      e.preventDefault();
      window.location.href='https://collvle.neu.edu.ph/login/index.php';
      }}>
                  <div className="container mx-auto bg-gray-700 p-10 m-10">
                    -12
                  </div>
                  <div className="text-white text-bold text-xl">
                    Integrated School VLE
                  </div>
              </div>
        <div className="container mx-auto bg-green-500 text-center h-96 w-60 m-40">2</div>

        </div>
     </div>
    )
}

export default mainsection
