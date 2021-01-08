import React, { useState } from 'react'

const NewColor = (props) => {
const [color, setColor] = useState("")
const onChange = (e) => {
    setColor(e.target.value)
}
const addColor = (e) => {
    // prevent default prevents the website from default refresh
    e.preventDefault();
    props.addColor(color)
    setColor("");
}

    return(
        <div>
            <h1> Your Color is {color}</h1>
            <form onSubmit = {addColor}>
                <input type = "text" value = {color} onChange = {onChange}/> 
                <input type = "submit" value = "Add a color"/> 
                </form>
            </div>
    )
}

export default NewColor