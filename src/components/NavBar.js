import React from 'react'
import Logo from '../image/logo1.png'
import {Link} from 'react-router-dom'
 
export default function NavBar() {
    return (
        <div className='navbar'>
            <img src={Logo}></img>
            <ul>
                <li><Link to="/home">Home</Link></li>|
                <li><Link to="/listfood">ListFood</Link></li>|
                <li><Link to="/api">ApiGuide</Link></li>|
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div> 
    )
}
