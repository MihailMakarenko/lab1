import { Component } from "react";
import PersonCardSection from "./personCardsSection/person";
class MainPage extends Component{
    render(){
        return(
            <main>
                <PersonCardSection></PersonCardSection>
            </main>
        )
    }
}

export default MainPage