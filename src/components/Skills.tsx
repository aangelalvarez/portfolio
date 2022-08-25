import React from 'react';
import Skill from '../components/Skill';
import '../styles/Skills.css';

const Skills: React.FC = () => {
    return (
        <div className='Skills'>
            <h1 className='skillsTitle'>SKILLS</h1>
            <Skill skillName='C++' percentage={85} themeColor='rgb(13, 146, 223)'></Skill>
            <Skill skillName='Python' percentage={80} themeColor='rgb(26, 107, 200)'></Skill>
            <Skill skillName='Javascript' percentage={90} themeColor='rgb(223, 219, 13)'></Skill>
            <Skill skillName='HTML' percentage={80} themeColor='rgb(241, 131, 6)'></Skill>
            <Skill skillName='CSS' percentage={75} themeColor='rgb(13, 146, 223)'></Skill>
            <Skill skillName='React' percentage={80} themeColor='rgb(4, 200, 235)'></Skill>
            <Skill skillName='Django' percentage={60} themeColor='rgb(0, 75, 59)'></Skill>
            <Skill skillName='Tensorflow' percentage={10} themeColor='rgb(255, 166, 0)'></Skill>
            <Skill skillName='Keras' percentage={20} themeColor='rgb(255, 0, 0)'></Skill>
            <Skill skillName='NodeJS' percentage={50} themeColor='rgb(81, 214, 19)'></Skill>



        </div>
    );
} ;

export default Skills;