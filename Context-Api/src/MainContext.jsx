import { createContext, useState } from "react";
export let CounterContext = createContext();
function MainContext({ children }) {
  const [count, setCount] = useState(0);

  return(
<CounterContext.Provider value={{count, setCount}} >
    {children}
  </CounterContext.Provider>
  )
 
}

export default MainContext;
