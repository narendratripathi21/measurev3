import { createSlice } from "@reduxjs/toolkit";
import { postApiData } from "../../common/services";
import { LOGIN_API, LOGINOTP_API, UPDATEPASSWORD_API, UPDATEUSERNAME_API, GETOTP_API, GETOTPRESETPW_API } from "../../common/constants";
import { useDispatch } from "react-redux";
import { setinfo, setwarning, setdanger } from "../alert/alertslice";

const initialState = {}

export const doLogin = postApiData("user/doLogin", LOGIN_API)
export const doLoginOtp = postApiData("user/doLoginOtp", LOGINOTP_API)
export const updatepassword = postApiData("user/updatePassword", UPDATEPASSWORD_API)
export const updateusername = postApiData("user/updateUsername", UPDATEUSERNAME_API)
export const getotp = postApiData("user/getOtp", GETOTP_API)
export const getotpresetpw = postApiData("user/getOtpResetPw", GETOTPRESETPW_API)
const dispatch = useDispatch
const userslice = createSlice({
    name:'user',
    initialState,
    reducers: {
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
    },
    extraReducers(builder){
        builder.addCase(doLogin.fulfilled, (state,action) => {
            state.data = action.payload.data ?? ''
            state.msg = action.payload.msg
            state.page = action.payload.data?.otp ? 'loginotp' : 'login'
            dispatch(setinfo(action.payload.msg))
        })
        .addCase(doLogin.pending, (state,action) => {
            state.msg = ''
            state.page = 'loading'
        })
        .addCase(doLogin.rejected, (state,action) => {
            state.msg = action.payload.msg
            state.page = 'login'
            dispatch(setdanger(action.payload.msg))
        })
        .addCase(doLoginOtp.fulfilled, (state, action) => {
            state.data = action.payload.data ?? ''
            state.msg = action.payload.msg
            state.page = action.payload.data?.token ? 'report' : 'login'
        })
        .addCase(doLoginOtp.pending, (state, action) => {
            state.msg = ''
            state.page = 'loading'
        })
        .addCase(doLoginOtp.rejected, (state, action) => {
            state.msg = action.payload
            state.page = 'login'
        })
        .addCase(updatepassword.fulfilled, (state, action) => {
            state.msg = action.payload.msg
        })
        .addCase(updatepassword.pending, (state, action) => {
            state.msg = ''
        })
        .addCase(updatepassword.rejected, (state, action) => {
            state.msg = action.payload
        })
        .addCase(updateusername.fulfilled, (state, action) => {
            state.msg = action.payload.msg
        })
        .addCase(updateusername.pending, (state, action) => {
            state.msg = ''
        })
        .addCase(updateusername.rejected, (state, action) => {
            state.msg = action.payload
        })
        .addCase(getotp.fulfilled, (state, action) => {
            state.msg = action.payload.msg
        })
        .addCase(getotp.pending, (state, action) => {
            state.msg = ''
        })
        .addCase(getotp.rejected, (state, action) => {
            state.msg = action.payload
        })
        .addCase(getotpresetpw.fulfilled, (state, action) => {
            state.data = action.payload.data ?? ''
            state.msg = action.payload.msg
        })
        .addCase(getotpresetpw.pending, (state, action) => {
            state.msg = ''
        })
        .addCase(getotpresetpw.rejected, (state, action) => {
            state.msg = action.payload
        })
    }
})

export const userProfile = (state) => state.user
export const { setProfile, setPage, logout } = userslice.actions
export default userReducer = userslice.reducer
