import React from 'react';
import '../styles/Project.css'; // recycle some css from here
import '../styles/Experience.css'; 

type experienceProps = {
    company: string;
    positon: string;
    duration: string;
    logo: string;
    details: string[];
    colorTheme: string;
};

const Experience: React.FC<experienceProps> = (props) => {
    const detailsArray = props.details.map((item) => 
    <p className = 'description'>{item}</p>);

    return (
        <div className='Experience'>
            <div className='card'>
                <div className='firstHalf'>
                    <div className='contentAligner verticalCentering'>
                        <div>
                            <p className='companyName' style={{color: props.colorTheme}}>{props.company}</p>
                            <p className='grayBoldText' style={{fontSize: "22px"}}>{props.positon}</p>
                            <p className='grayBoldText'>{props.duration}</p>
                        </div>
                        <div className='companyLogoContainer'>
                            <img className='companyLogo' src={props.logo} alt={props.logo}/>
                        </div>
                    </div>
                </div>
                <div className='secondHalf'>
                    <div className='contentAligner'>
                        <p className='description' style={{margin: '0 20px'}}>{detailsArray}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;