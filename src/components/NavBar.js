import React from 'react'
import {Link} from 'react-router-dom'
 
export default function NavBar() {
    return (
        <div className='navbar'>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/listfood">List Food</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}
