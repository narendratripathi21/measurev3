import Filters from "./filters";
import Report from "./report";

export default function Content(){
    return (
        <div className="content">
            <Filters/>
            <Report/>
        </div>
        
    )
}