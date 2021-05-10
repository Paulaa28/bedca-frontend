<<<<<<< HEAD
import React from 'react'

function Inputa(props) {
    
    return (
        <div>
            <input type={props.type} className="input" name={props.name} id={props.name} placeholder={props.placeholder} onChange={props.onChange}/>
        </div>
    )
}

export default Inputa
=======
function Input({ type = 'text', onChange, value, maxLength = 30, extraClass = '' }) {
    return (
        <input
            type={type}
            onChange={(e) => onChange(e.target.value)}
            value={value}
            className={`input ${extraClass}`}
            maxLength={maxLength}
        />
    )
}

export default Input
>>>>>>> 2098b242bf0ded0ab631b48ad1158ff287dce815
