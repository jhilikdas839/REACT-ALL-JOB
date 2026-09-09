
import { useDispatch, useSelector } from 'react-redux'
import { Decrement,increment,incrementByAmount } from "./Redux/features/CounterSlice";
const App = () => {

const dispatch =  useDispatch()
const count = useSelector((state)=>state.counter.value)





  return (
    <div className='bg-zinc-900 w-full h-screen text-white p-6'>

       <h1 className='font-bold text-7xl m-4'>{count}</h1>
      <button onClick={()=>{
        dispatch(increment())
      }}
      className='p-4 font-bold bg-blue-700 text-white rounded-xl mt-2 ml-3 transform active:scale-95 '>Increase No </button> 




      <button onClick={()=>{
        dispatch(Decrement())
      }}
      
      className='p-4 font-bold bg-blue-700 text-white rounded-xl mt-2 ml-3 transform active:scale-95 
      '>Decrease No </button>





      <button onClick={()=>{
        dispatch(incrementByAmount(10))
      }}
      className='p-4 font-bold bg-blue-700 text-white rounded-xl mt-2 ml-3 transform active:scale-95 '>Increase by amount </button> 


     
    </div>
  )
}

export default App
