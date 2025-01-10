import { useState } from "react"
import Brand from "../feature/components/brand"
import Profile from "../feature/components/profile"
import FormGroup from "./formgroup"

export default function Header({profile}){
    const username = profile?.data?.username ?? ''
    const [showdialog,setshowdialog] = useState(true)
    const showForm = () => {
        FormGroup.show()
    }
    return(<div className="header">
        <Brand/>
        <Profile/>
        <FormGroup open={showdialog}/>
    </div>)
}