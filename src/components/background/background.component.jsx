import React from "react";
import backgroundImg from "../../assets/img/background/gradient.png";
import landingImg from "../../assets/img/background/pink-blue-gradient.svg";
import ScrollDown from "../scroll-down/scroll-down.component";
import Image from 'react-bootstrap/Image'
import './background.style.css';
const Background = () => {
    return (
        <div id="home">
            <img id = "custom-img" class = "img-fluid" src={backgroundImg} />
            {/* <ScrollDown/> */}
        </div>

    )
};

export default Background;