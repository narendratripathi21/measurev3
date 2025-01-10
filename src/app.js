import react from "react";
import { userProfile } from "./feature/user/userslice";
import { useSelector } from "react-redux";
import Navigator from "./layout/navigator";
export function App() {
    const profile = useSelector(userProfile)
    return (<Navigator profile={profile}/>)
  }