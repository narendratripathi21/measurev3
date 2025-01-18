import { useState } from "react"

export default function Alert({id,msg,type}){
    const [visible,setVisible] = useState(true)
    const handleClick = (alertid) => {
        setVisible(false)
    }
    return(
        <div id={id} className={type} style={{display:visible?'flex':'none'}}>
            <label>{msg}</label>
            <button onClick={(e)=>handleClick(id)}>x</button>
        </div>
    )
}