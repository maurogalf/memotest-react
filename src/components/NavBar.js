import React from 'react';
import {Link} from 'react-router-dom';
import oliTitle from '../images/oliTitle.png'

const NavBar = () => {
    return (
        <nav className="navbar" >
                <Link to="/">
                    <img className='img-title' src={oliTitle} alt="title" />
                </Link>
        </nav>
    );
}

export default NavBar;
