// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'


function NavLink(props) {
    return <Link {...props}  activeStyle={{ color: 'red' }} />;
}

export default NavLink;


