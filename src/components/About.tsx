import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {

    const year = new Date().getFullYear();

    return (
        <div className='About'>
            <h1 className='aboutTitle'>About Me</h1>
            <p className='aboutMe'>
                I can still remember the first time I got to use a computer, my dad gave a laptop back when I was 9
                years old, as every other kid with a computer, I mainly used it to play games. I have a lot of beatiful memories with that computer, 
                and more important than the memories themselves is the feeling that they awakened within me. As I kept utilizing my computer, I realized
                that with a computer I could virtually do anything, watch videos, listen to music, play videogames, 
                read books, draw, edit photos, chat with other people, etcetera, that discovery ignited a fire deep within myself, I fell in love with
                computers. Shortly after that, I learned that a computer is made up of both hardware and software, where hardware is the 
                stuff you can see and touch, and software is the stuff you can see but not touch, where the magic happens.
                It was not until my freshman year of high school that I finally decided to make the move and learn how to create my own software,
                that is when I discovered my passion for coding.
                I learned a bunch of programming languages, and once I felt comfortable enough with coding, I knew it was time to choose a path.
                One of the reasons that I got into coding was that it has always been a dream of mine to be an entrepreneur, and I though well if I ever
                want to do that I need to be on as many platforms as possible; and, most devices are able to browse the web so I said why not? And I dived into the world of web development;
                it was a wonderful process. Software is truly incredible because it is the ultimate tool, a tool that can turn
                into anything you wish it to be, it is the closest thing to magic that exists in this world.             

            </p>
            <footer className='footer'>Angel Alvarez {year}</footer>
        </div>
    );
};

export default About;