import React from 'react'
import { NavBar } from '../components'

function Wrapper({children}) {
    return (
        <div className="wrapper">
            <NavBar/>
            {children}
        </div>
    )
}

export default Wrapper
