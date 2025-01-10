import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:{},
    msg:'',
}
const userslice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setProfile: (state, action) => {
            state.data = action.payload.data
            state.msg = action.payload.msg
            state.status = action.payload.status
        },
        logout: (state, action) => {
            state.data = {}
            state.msg = ''
            state.page = 'login'
        },
        setPage: (state, action) => {
            state.page = action.payload
            state.msg = ''
        }
    }
})

export const userProfile = (state) => state.user
export const { setProfile, setPage, logout } = userslice.actions
export default userReducer = userslice.reducer
