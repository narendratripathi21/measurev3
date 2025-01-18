import { useState } from "react";
import Brand from "../../components/brand";
import { useDispatch } from "react-redux";
import { doLogin, setProfile } from "./userslice";
import { MAIL_REGEX, PWD_REGEX } from "../../common/constants";

export default function Login() {
    const dispatch = useDispatch()
    const [usermail,setUsermail] = useState('')
    const [password,setPassword] = useState('')
    const [showDialog, setShowDialog] = useState(false)
    const [isChecked, setChecked] = useState(false)
    const [validMail, setValidMail] = useState(false)
    const [validPassword, setValidPassword] = useState(false)
    const [noSubmit, setNoSubmit] = useState(true)

    const validate = (x, y, z) => {
        setValidMail(MAIL_REGEX.test(x))
        setValidPassword(PWD_REGEX.test(y))
        setNoSubmit(!(validMail && validPassword && z))
    }
    const handleChangeUsermail = (x) => {
        setUsermail(x)
        validate(x, password, isChecked)
    }
    const handleChangePassword = (x) => {
        setPassword(x)
        validate(usermail, x, isChecked)
    }
    const handleChecked = (x) => {
        setChecked(x)
        validate(usermail, password, x)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        var urlencoded = new URLSearchParams()
        urlencoded.append("usermail", usermail)
        urlencoded.append("password", password)
        dispatch(doLogin(urlencoded))
    }
    const handletnc = () => {
        dispatch(setPage('tnc'))
    }
    const handleprivacy = () => {
        dispatch(setPage('privacy'))
    }
    const handleResetPassword = () => {
        setShowDialog(true)
    }
    return (
        <div className="form">
            <Brand/>
            <input className="form-control" type="text" required placeholder="username" value={usermail} onChange={(e)=>handleChangeUsermail(e.target.value)}></input>
            <input className="form-control" type="password" required placeholder="password" value={password} onChange={(e)=>handleChangePassword(e.target.value)}></input>
            <span><input className="control" type="checkbox" required checked={isChecked} onChange={(e)=> handleChecked(e.target.checked)}/><label className="form-control">By logging in you agree to</label></span>
            <span>our<a href="" className="control">terms&conditions</a></span>
            <span>and<a href="" className="control">privacy policy.</a></span>
           
            <button className="form-control" onClick={handleSubmit} disabled={noSubmit}>Login</button>
            <span><a href="" className="control">forgot/reset password</a></span>
            
        </div>
    )
}