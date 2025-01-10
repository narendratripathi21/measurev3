import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feature/user/userslice";

const preloadedState = {}
export const store = configureStore({
    reducer:{
        user:userReducer,
    },
    preloadedState
})