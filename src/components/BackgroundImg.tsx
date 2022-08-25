import React from "react";
import '../css/backgroundImg.css';
import bg from '../assets/bubble.jpg';
import Greeting from "./Greeting";

const BackgroundImg: React.FC = () => {
    return (
        <div>            <Greeting/>

            <img className = 'backgroundImg' src = {bg}></img>
        </div>
    );
};

export default BackgroundImg;