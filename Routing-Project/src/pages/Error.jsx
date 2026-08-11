import React from 'react'
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate()

const NavigateHandeler = ()=>{
navigate("/");
}

  return (
    <div className="w-full h-screen bg-[#006b55] text-shadow-white flex items-center justify-center flex-col ">
         <h1 className="text-white font-bold text-8xl text-center">
        404 Not Found Page
      </h1>

      <button onClick={NavigateHandeler}
      className='mt-6 bg-blue-400 p-2 rounded font-bold transition-transform active:scale-95'>Go Back To the Home </button>
    </div>
  )
}

export default Error