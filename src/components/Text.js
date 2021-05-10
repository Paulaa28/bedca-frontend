import React from 'react'

function Text(props) {
    return (
        <div className={props.className} id={props.id ? props.id : null}>
            <p>{props.value}</p>
        </div>
    )
}

export default Text
