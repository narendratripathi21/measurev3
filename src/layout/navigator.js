import Login from "../feature/user/login"
import Home from "./home"

export default function Navigator({profile}){
    const username = profile?.data?.username ?? undefined
    const content = username ? <Home profile={profile}/> : <Login/>
    return <>
        {content}
    </>
}