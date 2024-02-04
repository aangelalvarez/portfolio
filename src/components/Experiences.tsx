import React from 'react';
import Experience from './Experience';
import '../styles/Project.css';
import '../styles/Experiences.css';
const amazonLogo = require('../assets/amazonlogo.png');


const Experiences: React.FC = () => {
    return (
        <div className='Experiences'>
            <h1 className='title'>EXPERIENCE</h1>

            <Experience
                company='Amazon'
                positon='Software Development Engineer Intern'
                duration = 'Seattle, WA | May 2023 - Aug 2023'
                details={[
                    '● Implemented automated applications for business metrics collection and visualization using Python, SQL, S3, Cloudwatch, SNS, Quicksight, and Lambda',
                    '● Architected and developed an event-driven email notification service using Lambda, SNS, and CloudWatch',
                    '● Streamlined data analysis processes, leading to a significant reduction in the time required for our team to gain insights from collected data',
                    '● Automated data flow by implementing both scheduled and event-driven architectures',
                    '● Ensured data completeness by implementing data completeness algorithms on Lambda',
                ]}
                colorTheme='#fc8403'
                logo={amazonLogo}>
            </Experience>
        </div>
    );
}

export default Experiences;