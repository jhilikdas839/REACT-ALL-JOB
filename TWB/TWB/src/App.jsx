
import {useState} from "react"

const App = () => {

const [task, setTask] = useState("")
const [details, setDetails] = useState("")
 const [Alltask, setAllTask] = useState([])


const submithandel = (e)=>{
 e.preventDefault();
 setTask("")
 setDetails("")
 

  const copyTask = [...Alltask];

  copyTask.push({ task, details });

  setAllTask(copyTask);

}

const DeleteHanel =(idx)=>{
     const deleteTasks = [...Alltask]
      deleteTasks.splice(idx , 1)
      console.log(idx);
      setAllTask(deleteTasks)
      
}





  return (
    <div className="w-full h-screen bg-gray-900 text-white p-4 flex gap-2">
      
      {/* add task div */}
      <div className="w-1/2 h-full flex flex-col justify-start items-start gap-4 p-4">
        <form
          onSubmit={(e)=>{
            submithandel(e)
          }}
         className="full h-full flex flex-col justify-start items-start gap-4"
        >
          <input
          className="border border-amber-100 p-2 rounded"
          type="text"
          placeholder="Enter Your Task"
          value={task}
          onChange={(e)=>{
            setTask(e.target.value)
          }}
          
        />

        <textarea
          className="border border-amber-100 p-2 rounded"
          placeholder="Enter Your Task Details"
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        ></textarea>

        <button className=" px-6 py-3 bg-amber-400 text-black font-bold active:scale-95 rounded-full ">
          Add Tasks
        </button>
        </form>
      </div>


      {/* show task div */}

      <div className="w-1/2 h-full flex flex-col border-l-2 border-amber-100 p-3 ">
        <h1>show tasks</h1>
         {Alltask.map((elem,idx)=>{
              return(
                <div key={idx} className="w-28 h-25 text-black p-4 bg-amber-400 rounded m-2">
                      <h3 className="font-bold">{elem.task}</h3>
                      <p className="text-[8px]">{elem.details}</p>
                       <button
                       onClick={()=>{
                        DeleteHanel(idx)
                       }}
                       className="p-2 rounded active:scale-95 m-2 font-bold text-[5px] bg-red-400 text-white">DELETE</button>
                </div>
              )
         })}
      </div>
    </div>
  );
};

export default App;

// <div className="w-12.5 h-12.5 bg-amber-400 rounded m-2"></div>