import React from 'react'

const Nav = () => {
  return (
    <div className='w-full '>
       <nav className='w-full h-12 bg-[#000020] flex justify-center items-center gap-20'>
        <h1 className='font-bold hover:text-sky-300 transition duration-300 ease-in-out'>Home</h1>
        <h1 className='font-bold hover:text-sky-300 transition duration-300 ease-in-out' >About</h1>
        <h1 className='font-bold hover:text-sky-300 transition duration-300 ease-in-out' >Contact</h1>
        </nav>        
    </div>
  )
}

export default Nav