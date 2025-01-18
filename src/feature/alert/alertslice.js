import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

const alertslice = createSlice({
    name:'alert',
    initialState,
    reducers:{
        setinfo: (state, action) => {
           state.id = Date.UTC
           state.type = 'alert-info'
           state.msg = action.payload ?? 'unable to render message'
        },
        setwarning: (state, action) => {
            state.id = Date.UTC
            state.type = 'alert-warning'
            state.msg = action.payload ?? 'unable to render message'
        },
        setdanger: (state, action) => {
            state.id = Date.UTC
            state.type = 'alert-danger'
            state.msg = action.payload ?? 'unable to render message'
        }
    }
})

export const alert = (state) => state.alert
export const { setinfo, setwarning, setdanger } = alertslice.actions
export default alertReducer = alertslice.reducer