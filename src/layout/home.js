import Content from "./content";
import FormGroup from "./formgroup";
import Header from "./header";

export default function Home({profile}) {
    return(
        <>
            <Header profile={profile}/>
            <Content profile={profile}/>
        </>
    )
}