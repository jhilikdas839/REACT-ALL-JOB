
import{useContext} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {CounterContext} from '../MainContext'

function Hero() {
 
  const {count} = useContext(CounterContext)
   
  return (
    <div>
         <Header  />
        <h1>Hero Section {count}</h1>
        <Footer />
    </div>
  )
}

export default Hero