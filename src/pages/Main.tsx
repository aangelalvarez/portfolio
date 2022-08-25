import React from 'react';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import About from '../components/About';

const Main: React.FC = () => {
    return (
        <div>
            <Header/>
            <Projects/>
            <Skills/>
            <About/>
        </div>

    );
};

export default Main;