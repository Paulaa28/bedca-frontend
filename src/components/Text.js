import React from 'react'

function Text({className, id, value}) {
    return (
        <div className={className} id={id ? id : null}>
            <p>{value}</p>
        </div>
    )
}

export default Text
