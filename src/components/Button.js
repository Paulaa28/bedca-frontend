import React from 'react'


function Button(props) {
    return (
        <div>
            <input type="submit" id={props.id} className="submit" value={props.value} >
      </input>
            
        </div>
    )
}

export default Button



{/* <input type="submit" className="submit" 
name={props.name} id={props.name} value={props.placeholder}/> */}