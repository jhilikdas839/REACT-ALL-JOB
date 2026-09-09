import { createSlice } from "@reduxjs/toolkit";

export  const CounterSlice = createSlice({
    name:'Counter',
    initialState:{
        value:10
    },
    reducers:{
        increment:(state)=>{
            state.value +=1
        },

        Decrement:(state)=>{
            state.value -=1
        },

        incrementByAmount:(state ,action)=>{
            state.value += action.payload
        }

    }
})

export const {increment ,Decrement,incrementByAmount } = CounterSlice.actions
export default CounterSlice.reducer