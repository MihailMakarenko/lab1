import { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return <footer className="footer-style">
     <SectionCompany></SectionCompany>
    </footer>;
  }
}

class InformAboutCompany extends Component {
  render() {
    return <div className="inform-about-atherCompany">
      <p>Компания {this.props.nameCompany}</p>
      <a href={this.props.href} >{this.props.ancorForCompany}</a>  
    </div>;
  }
}

class SectionCompany extends Component{
    render(){
        return(
            <div className="sectionCompanyStyle">
                 <InformAboutCompany nameCompany = "EPAM" href = "https://www.epam.com/" ancorForCompany = "https://www.epam.com/"></InformAboutCompany>
                 <InformAboutCompany nameCompany = "Agava" href = "https://agava.tech/" ancorForCompany = "https://agava.tech/"></InformAboutCompany>
            </div>
        )
    }
}

export default Footer;
