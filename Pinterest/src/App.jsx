import {FetchPhostos} from "./api/mediaApi"

const App = () => {
  return (
    <div className='w-full h-screen bg-gray-950 text-white'>


  <button
  onClick={async()=>{
   const data  = await FetchPhostos("cat")
   console.log(data.results);
   
  }}

  >Get Photos</button>


    </div>
  )
}

export default App