import React from 'react'

function label(props) {
    return (
        <div>
            <label htmlFor={props.htmlFor}>{props.value}</label>
        </div>
    )
}

export default label
