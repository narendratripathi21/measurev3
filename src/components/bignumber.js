export default function Bignumber({title,measure}){
    return(
        <div className="bignumber">
            <label className="bignumber-title">{title}</label>
            <label className="control-static">{measure}</label>
        </div>
    )
}