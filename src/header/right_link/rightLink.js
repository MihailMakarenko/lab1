import { Component } from "react";
import './rightLink.css'

class HeaderContainerRightLink extends Component{
    render(){
        return(
            <div className="header-container-link header-container-link-right">
                <a  className="background-color-anchors lng-about" href="#about">ABOUT</a>
                <a className="background-color-anchors lng-login" href="">LOGIN</a>
                <a className="background-color-anchors" href="">
                    <img src="D:\Университет\2 Курс\Семестр 4\Cursach\MainPage\img\header-right-img.png" alt=""/>
                </a>
            </div>
        )
    }
}

export default HeaderContainerRightLink