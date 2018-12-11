import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/catters">catters</Link></li>
            <li><Link to="/doggos">doggos</Link></li>
        </ul>
    );
};

export default NavBar;