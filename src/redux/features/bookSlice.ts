import { createSlice } from "@reduxjs/toolkit"

interface IBook{
    status:boolean,
    priceRange:number,
}
const initialState:IBook={
    status:false,
    priceRange:150,

}
const bookSlice=createSlice({
    name:'book',
    initialState,
    reducers:{
        // toggleStatus:(state)=>{
        //     state.status=!state.status
        // },
        // setPriceRange:(state,action:PayloadAction<number>)=>{
        //     state.priceRange=action.payload
        // }
    }
})

// export const {toggleStatus,setPriceRange}=bookSlice.actions

export default bookSlice.reducer