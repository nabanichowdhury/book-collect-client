import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUser{
    _id:string;
    isAuthenticated:boolean,
}
const initialState:IUser={
   _id:'',
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
        setUserId:(state,action:PayloadAction<string>)=>{
            state._id=action.payload
        }
        
    },
    
})

// export const {toggleStatus,setPriceRange}=bookSlice.actions

export default userSlice.reducer