import React from 'react';
import Experience from './Experience';
import '../styles/Project.css';
import '../styles/Experiences.css';
const amazonLogo = require('../assets/amazonlogo.png');
const snapchatLogo = require('../assets/snapchat_logo_long.png')


const Experiences: React.FC = () => {
    return (
        <div className='Experiences'>
            <h1 className='title'>EXPERIENCE</h1>
            <Experience
                company='Snapchat'
                positon='Software Engineer Intern'
                duration = 'Seattle, WA | May 2024 - Aug 2024'
                details={[
                    '● Architected and implemented a new push notification resender system that uses less cache memory, leading to a $200K reduction in yearly operational costs',
                    '● Optimized the notification resender flow to reduce average cache usage by over 65%%',
                    '● Reduced cache peak usage by over 80%',
                    '● Contributed to improving the push notification resender which handles over 3 billion notifications per day',
                    '● Developed a mixed mode for the resender which would allow for a seamless flow change between the old resender and the new resender, allowing both pure and mixed flows ',
                    '● Added guardrails to the push notification debugger tool so that we are not able to accidentally send test notifications to production users',
                    '● Improved the UI of the push notification debugger tool by introducing features such as new error messages and better display formatting',
                ]}
                colorTheme='#b5b400'
                logo={snapchatLogo}>
            </Experience>
            <Experience
                company='Amazon'
                positon='Software Development Engineer Intern'
                duration = 'Seattle, WA | May 2023 - Aug 2023'
                details={[
                    '● Architected and developed a comprehensive tool that automates the collection, processing, and visualization of key business metrics',
                    '● Integrated new data pipelines into the service, allowing for a seamless end-to-end flow of the data being processed',
                    '● Enabled automated alerts based on real-time data triggers',
                    '● Streamlined data analysis processes, leading to a 75% reduction in manual reporting time and increased real-time decision-making efficiency by over 50%',
                    '● Designed and implemented a hybrid architecture system that combines scheduled jobs with event-driven mechanisms to optimize data flow',
                ]}
                colorTheme='#fc8403'
                logo={amazonLogo}>
            </Experience>
        </div>
    );
}

export default Experiences;