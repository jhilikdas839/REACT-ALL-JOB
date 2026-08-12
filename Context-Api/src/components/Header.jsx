import React from 'react'
import {CounterContext} from '../MainContext'
import{useContext} from 'react'
function Header() {
const {count,setCount} = useContext(CounterContext)
    
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Click Here to increse count Value</button>
    </div>
  )
}

export default Header