import React from 'react'

function Header(props) {
    let {count , setCount} = props
    
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Click Here to increse count Value</button>
    </div>
  )
}

export default Header