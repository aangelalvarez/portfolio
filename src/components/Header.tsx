import React from 'react';
import '../styles/Header.css';
import Nav from './Nav';
const img = require('../assets/three-sum.png');

const Header: React.FC = () => {
    const code: string = '</>';
    return (
        <div className='Header'>
            <Nav/>
            <div className='leftContainer'>
                <div className='headerMsg'>
                    <p className = 'hey'>Hey There!</p>
                    <p className='name'>I am Angel Alvarez</p>
                    <p className='programmer'>A Software Engineer</p>
                </div>
                <div className='codeSymbolContainer'>
                    <p className='codeSymbol'>{code}</p>
                </div>
            </div>
            <div className = 'rightContainer'>
                <img className='img' src={img} alt="code"></img>
            </div>
        </div>
    );
};

export default Header;