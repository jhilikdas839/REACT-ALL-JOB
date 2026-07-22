import React from 'react'
import Nav from "./components/Nav";
import NavRoutes from './routes/NavRoutes';
const App = () => {
  return (
    <div className='w-full h-screen bg-blue-950 text-white'>
      <Nav />
       <NavRoutes />
    </div>
  )
}

export default App