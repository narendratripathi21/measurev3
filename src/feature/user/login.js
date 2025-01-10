import { useState } from "react";
import Brand from "../components/brand";
import { useDispatch } from "react-redux";
import { setProfile } from "./userslice";

export default function Login() {
    const [username,setusername] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = () => {
        let profile = {
            data:{
                id:1,
                username:username,
            },
            msg:"Login Successful"
        }
        dispatch(setProfile(profile))
    }
    return (
        <div className="form">
            <Brand/>
            <input className="form-control" type="text" placeholder="username" value={username} onChange={(e)=>setusername(e.target.value)}></input>
            <input className="form-control" type="password" placeholder="password"></input>
            
            <span><input className="control" type="checkbox"/><label className="form-control">By logging in you agree to</label></span>
            <span>our<a href="" className="control">terms&conditions</a></span>
            <span>and<a href="" className="control">privacy policy.</a></span>
           
            <button className="form-control" onClick={handleSubmit}>Login</button>
            <span><a href="" className="control">forgot/reset password</a></span>
            
        </div>
    )
}