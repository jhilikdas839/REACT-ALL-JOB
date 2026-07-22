import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Product from '../pages/Product'
import ProductDetails from '../pages/ProductDetails'
import Error from '../pages/Error'

const NavRoutes = () => {
  return (
    <div>
      <Routes>
            <Route path='/' element={<Home /> }/>
            <Route path='/about' element = { <About /> } />
            <Route path='/contact' element = {<Contact />} />
            <Route path='*' element = {<Error />} />
            <Route path='/product' element = {<Product />} />
            <Route path='/product/details/:id' element = {<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default NavRoutes
