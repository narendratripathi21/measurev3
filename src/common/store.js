import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user/userslice";
import { getLocalStorage, setLocalStorageAsync } from "./services";

const preloadedState = {
    user:getLocalStorage('eldt') ?? {
        data:{},
        msg:'',
        page:'login',
    }
}
export const store = configureStore({
    reducer:{
        user:userReducer,
    },
    preloadedState
})

store.subscribe(()=>{
    setLocalStorageAsync("eldt",store.getState().user)
    .then()
    .catch((error) => console.error(error))
})