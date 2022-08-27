import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {

    const year = new Date().getFullYear();

    return (
        <div className='About'>
            <h1 className='aboutTitle'>About Me</h1>
            <p className='aboutMe'>
                I can still remember the first time I got to use a computer, it felt as if I had discovered a new world, so much to explore and do. That was
                the first time ever I felt that special connection with computers. Eventually I realized that a computer is nothing more than hardware and software, where hardware is the 
                stuff you can see and touch, and software is the stuff you can see but not touch, where the magic happens.
                It was not until my senior year of high school that I finally decided to make the move and learn how to create my own software,
                that is when I discovered my passion for coding.
                Software is truly incredible because it is the ultimate tool, a tool that can turn
                into anything you wish it to be, it is the closest thing to magic that exists in this world.             

            </p>
            <footer className='footer'>Angel Alvarez {year}</footer>
        </div>
    );
};

export default About;