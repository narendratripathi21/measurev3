import react from "react";
import { userProfile } from "./feature/user/userslice";
import { useSelector } from "react-redux";
import Navigator from "./layout/navigator";
import Notifications from "./layout/notifications";
export function App() {
    const profile = useSelector(userProfile)
    return (
    <>
      <Notifications/>
      <Navigator profile={profile}/>
    </>
    )
  }