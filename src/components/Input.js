import React from 'react'

function Inputa(props) {
    
    return (
        <div>
            <input type={props.type} className="input" name={props.name} id={props.name} placeholder={props.placeholder} onChange={props.onChange}/>
        </div>
    )
}

export default Inputa
