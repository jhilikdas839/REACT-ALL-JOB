import { useDispatch, useSelector } from "react-redux";
import {
  Decrement,
  increment,
  incrementByAmount,
} from "./Redux/features/CounterSlice";
import { useState } from "react";
const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setNum] = useState(5);

  return (
    <div className="bg-zinc-900 w-full h-screen text-white p-6">
      <h1 className="font-bold text-7xl m-4">{count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
        className="p-4 font-bold bg-blue-700 text-white rounded-xl mt-2 ml-3 transform active:scale-95 "
      >
        Increase No{" "}
      </button>

      <button
        onClick={() => {
          dispatch(Decrement());
        }}
        className="p-4 font-bold bg-blue-700 text-white rounded-xl mt-2 ml-3 transform active:scale-95 
      "
      >
        Decrease No{" "}
      </button>

      <input
        // value={num}
        onChange={(e)=>{
          setNum(e.target.value)
          
        }}
        className="p-4   font-bold bg-blue-700 text-white rounded-xl mt-2 ml-3  "
        placeholder="Enter Your amount to increase"
        type="number"
      ></input>

      <button
        onClick={() => {
          dispatch(incrementByAmount(Number(num)));
        }}
        className="p-4 font-bold bg-blue-700 text-white rounded-xl mt-2 ml-3 transform active:scale-95 "
      >
        Increase by amount{" "}
      </button>
    </div>
  );
};

export default App;
