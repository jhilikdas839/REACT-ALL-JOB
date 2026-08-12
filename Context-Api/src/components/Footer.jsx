import React from "react";
import {CounterContext} from '../MainContext'
import{useContext} from 'react'
function Footer() {
  const {count,setCount} = useContext(CounterContext)
  return (
    <div>
       <button onClick={()=>setCount(count-1)}>Click Here to decrese count Value</button>
    </div>
  );
}

export default Footer;
