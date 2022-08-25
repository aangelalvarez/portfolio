import React from 'react';
import '../styles/Skill.css';

type skillProps = {
    skillName: string;
    themeColor: string;
    percentage: number;
};

const Skill: React.FC<skillProps> = (props) => {

    const percentageWidth: string = props.percentage + '%';
    return (
        <div className='skillContainer'>
            <p style={{color: props.themeColor}} className='skillName'>{props.skillName}</p> 
            <div className='fullBar'>
                <div className='percentageBar' style={{backgroundColor: props.themeColor, width: percentageWidth}}></div>    
            </div>
        </div>
    );
};

export default Skill;