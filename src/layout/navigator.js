import Login from "../feature/user/login"
import { isActiveState } from "../common/services"
import Home from "./home"
import Notifications from "./notifications"
import Loginotp from "../feature/user/loginotp"
import Loading from "../components/loading"

export default function Navigator({profile}){
    const username = profile?.data?.username ?? undefined
    const page = profile?.page ?? 'login'
    console.log(page)
    const msg = profile?.data?.msg ?? ''
    const isValid = isActiveState(profile)
    const content = (page)=>{
        switch(page){
            case 'loading': return <Loading />
            case 'login': return <Login profile={profile}/>
            case 'loginotp': return <Loginotp />
            default:<Login/>
        }
    }

    return <div className="app">
        {content(page)}
    </div>
}