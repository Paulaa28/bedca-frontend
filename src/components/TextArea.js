import React from 'react'

function TextArea(props) {
    return (
        <div>
            <textarea className="textArea" name={props.name} id={props.name} placeholder={props.placeholder} onChange={props.onChange}></textarea>
        </div>
    )
}

export default TextArea
