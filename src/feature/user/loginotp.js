import { useState } from "react"
import Brand from "../../components/brand"

export default function Loginotp(){
    const[otp,setotp] = useState('')
    const[noSubmit, setNoSubmit] = useState(true)
    const handleChange = (value) => {
        if(Number(value)|| value===''){
            setotp(value)
            validate(value)
        }
    }
    const handleSubmit = () => {

    }
    const validate = (value) => {
        if((value/100000)>=1 && (value/100000)<10){
            setNoSubmit(false)
        }
        else{
            setNoSubmit(true)
        }
    }
    return(
        <div className="form">
            <Brand/>
            <input className="form-control otp" type="text" onChange={(e)=>handleChange(e.target.value)} value={otp} placeholder="enter otp here"></input>
            <button className="form-control" onClick={handleSubmit} disabled={noSubmit}>submit</button>
        </div>
    )    
}