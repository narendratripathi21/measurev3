import { UI_BASE,APP_VERSION,PROFILE_FEATURES } from '../constants'
import profileimage from '../../assets/icons/profile.svg'
export default function Profile({profile}){
    const onClickDialog = (x) => {

    }
    const onClickHandler = (x) => {
        
    }
    return (
        <div className="dropdown">
          <img key={profile?.data?.id} src={profileimage} alt="profile" width={30} height={30} />
          {profile?.data?.username ?? 'username'}
          <div className="dropdown-content">
            <label key='cpr' className="control" onClick={() => onClickDialog('ChangeProfile')} >Edit Profile</label>
            <label key='cpw' className="control" onClick={() => onClickDialog('ChangePassword')} >Change Password</label>
            <label key='lgt' className="control" onClick={() => onClickHandler('logout')} >Logout</label>
            <label className='control-static'>{APP_VERSION}</label>
          </div>
        </div>
    )
}