import { createSlice } from "@reduxjs/toolkit";

interface IUser{
    accessToken:string,
    isAuthenticated:boolean,
}
const initialState:IUser={
   accessToken:'',
   isAuthenticated:false,

}

const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        // toggleStatus:(state)=>{
        //     state.status=!state.status
        // },
        // setPriceRange:(state,action:PayloadAction<number>)=>{
        //     state.priceRange=action.payload
        // }
        
    },
    
})

// export const {toggleStatus,setPriceRange}=bookSlice.actions

export default userSlice.reducer