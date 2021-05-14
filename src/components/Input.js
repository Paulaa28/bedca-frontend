import React from 'react'

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
