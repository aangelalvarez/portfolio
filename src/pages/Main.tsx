import React from 'react';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import About from '../components/About';
import Experiences from '../components/Experiences';

const Main: React.FC = () => {
    return (
        <div>
            <Header/>
            <Experiences/>
            <Projects/>
            <Skills/>
            <About/>
        </div>

    );
};

export default Main;