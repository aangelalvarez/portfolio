import React from 'react';
import '../styles/Project.css';

type projectProps = {
    name: string;
    description: string[];
    image: string;
    technologies: string[];
    linkToProject?: string;
    sourceCode?: string;
    themeColor: string;
    hasBeenDeployed: boolean;
    hasSourceCode: boolean;
}; 

const Project: React.FC<projectProps> = (props) => {

    const technologiesArray = props.technologies.map((technology) => 
        <p className='technology'>{technology}</p>
    );
    const descriptionArray = props.description.map((descriptionSentence) => 
        <p className='description'>{descriptionSentence}</p>
    );
    
    return (
        <div className='Project'>
            <div className='card'>
                <div className='leftColumn'>
                    <div className='contentAligner'>
                        <p className='projectName' style={{color: props.themeColor}}>{props.name}</p>
                        <div className='technologies'>{technologiesArray}</div>
                        <div className='links'>
                            {props.hasBeenDeployed && <a className='projectLink' href={props.linkToProject} style={{backgroundColor: props.themeColor}} target='_blank'>View Project</a>}
                            {props.hasSourceCode && <a className='codeLink' href={props.sourceCode} style={{backgroundColor: props.themeColor}}target='_blank'>Source Code</a>}
                        </div>
                    </div>

                </div>
                <div className='middleColumn' >
                    <div className='contentAligner' style={{margin: '0 20px'}}>
                        <div className='description' >{descriptionArray}</div>
                    </div>
                </div>
                <div className='rightColumn'>
                    <div className='contentAligner'>
                        <img className='image' src={props.image}/>
                    </div>
                </div>
            </div>
        </div>
        
        ); 

}

export default Project;