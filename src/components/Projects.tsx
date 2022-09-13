import React from 'react';
import Project from './Project';
import '../styles/Projects.css';
const piImg = require('../assets/pi.png');
const countryAPIImg = require('../assets/countryapi.png');
const clolorImg = require('../assets/clolor.png');
const urlShortenerImg = require('../assets/url-shortener.png');
const swipeImg = require('../assets/swipe.png');

const Projects: React.FC = () => {
    return (
        
    <div className='Projects'>
        <h1 className='title'>PROJECTS</h1>

        <Project 
            name='Swipe' 
            technologies={[
                'Python', 
                'Django', 
                'HTML',
                'CSS',
                'SQLite',
            ]} 
            hasBeenDeployed={false}
            hasSourceCode={true}
            sourceCode='https://github.com/aangelalvarez/swipe'
            linkToProject='#' 
            description={[
                'Full stack Django web application',
                'With this app users can create their own rooms and chat with each other',
                'Some functionalities such as creating rooms are limited to users who are logged in',
                'The host of a room can edit/delete it, the author of a message can delete it',
                'Utilized cookies and sessions'
            ]} 
            image={swipeImg} 
            themeColor='#11967e'>
        </Project>

        <Project 
            name='URL Shortener' 
            technologies={[
                'JavaScript', 
                'TypeScript', 
                'Node',
                'React',
                'Express',
                'MongoDB']} 
            hasBeenDeployed={false}
            hasSourceCode={true}
            sourceCode='https://github.com/aangelalvarez/url-shortener' 
            description={[
                'A simple full-stack web application that can turn any link into a short version of the same, which can then be used as a regular link',
                'The short version of the link redirects the user to the original link',
                'Implemented both front-end and back-end to make a fully functional application',
                'Handled HTML DOM events'
            ]} 
            image={urlShortenerImg} 
            themeColor='#f21b3f'>
        </Project>

        <Project 
            name='Countries API' 
            technologies={[
                'JavaScript', 
                'TypeScript', 
                'Node',
                'Express', 
                'MongoDB']} 
            hasBeenDeployed={true}
            hasSourceCode={true}
            linkToProject='https://thawing-brook-65052.herokuapp.com/' 
            sourceCode='https://github.com/aangelalvarez/countryAPI' 
            description={[
                'API that allows users to search what languages are spoken in a specific country, as well as in what countries is a certain language spoken',
                'Developed functions to handle CRUD operations on the database via route handlers', 
                'Created a custom error handler, as well as an invalid route/request handler', 
                'Included asynchronous handlers to successfuly make requests to the database']} 
            image={countryAPIImg}
            themeColor='#f37f1b'>
        </Project>

        <Project 
            name='Clolor' 
            technologies={[
                'JavaScript', 
                'TypeScript', 
                'Node',
                'React']} 
            hasBeenDeployed={true}
            hasSourceCode={true}
            linkToProject='https://aangelalvarez.github.io/clolor/' 
            sourceCode='https://github.com/aangelalvarez/clolor' 
            description={[
                'Clolor is a colorful clock app that will let you choose the font and background color of your clock from over 100+ different colors',
                '3 Different Modes: clock, stopwatch, and timer',
                'Built using React hooks, context, and state',
                'Implemented custom hour-getting functions to be able to work in any region over the world'
            ]} 
            image={clolorImg} 
            themeColor='#626ee3'>
        </Project>

    </div>
    );
} ;

export default Projects;