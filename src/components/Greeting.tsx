import React from "react";
import '../css/greeting.css';

const Greeting: React.FC = () => {
    return (
        <div className = 'grContainer'>
            <p style = {{fontSize: '70px', marginLeft: '100px', marginTop: '50px'}}>Hello, I am Angel Alvarez</p>
            <p style = {{fontSize: '30px', marginLeft: '950px', marginTop: '50px'}}>A Web Developer</p>
        </div>
    );
};

export default Greeting;
