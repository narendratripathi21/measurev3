import Alert from "../feature/alert/alert";

export default function Notifications({alerts}){
    const renderAlerts = alerts?.map(x=>(
        <Alert id={x.id} msg={x.msg} type ={x.type} />
    ))??<div></div>
    return (
        <div className="notifications">
            {renderAlerts}
        </div>
    )
}