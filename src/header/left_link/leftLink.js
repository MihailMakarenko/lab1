
import { Component } from "react";
import './leftLink.css'

class LeftLink extends Component {
  render() {
    return (
      <div className="container-left-link">
       <LeftAncors href="#shop" name="SHOP"></LeftAncors>
       <LeftAncors href="#read" name="READ"></LeftAncors>
       <LeftAncors href="tel:+375256311645" name="020 8004 7160"></LeftAncors>
      </div>
    );
  }
}

class LeftAncors extends Component{
    render(){
        return(
            <a className="background-color-anchors leftLink-style" href={this.props.href}>{this.props.name}</a>
        )
    }
}

export default LeftLink;