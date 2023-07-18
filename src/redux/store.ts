import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import bookReducer from "./features/books/bookSlice";
import userReducer from "./features/users/userSlice";

const store=configureStore({
    reducer:{
        user:userReducer,
        book:bookReducer,
        [api.reducerPath]:api.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(api.middleware)
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export default store;