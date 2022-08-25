import React from 'react';
import '../styles/Nav.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons/index';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';

const Nav: React.FC = () => {
    return (
        <div className='Nav'>
            <a className='navLink' href='https://github.com/aangelalvarez' target='_blank'>
                <FontAwesomeIcon className='navIcon gitHub' icon={faGithub}/>    
            </a>
            <a className='navLink' href='https://www.linkedin.com/in/angel-alvarez-904004205/' target='_blank'>
                <FontAwesomeIcon className='navIcon linkedIn' icon={faLinkedin}/>    
            </a>
            <a className='navLink' href='https://docs.google.com/document/d/1LF9AeeHKs5bVU5GwVqmVMRSUDcxPxCcJ-w5DBPdkFW4/edit?usp=sharing' target='_blank'>
                <FontAwesomeIcon className='navIcon resume' icon={faFileLines}/>    
            </a>
        </div>
    );
};

export default Nav;