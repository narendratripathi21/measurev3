import { useEffect, useState } from "react"

export default function FormGroup({showdialog}){
    const [showDialog,setshowdialog] = useState(false)
    useEffect(()=>{

    },[showdialog])
    return(
        <dialog open={showDialog}>
            <label className="control">Login Dialog</label>
            <label className="control">username</label>
            <label className="control">submit</label>
        </dialog>
    )
}