import React from 'react'

const Color = (props) => {
const {color} = props
const box = {
  height: 50,
  width:50,
  background:color,
  padding:50,
  margin:10
  
}
    return(
        <div>
            <p style={ box }>
                
                
                </p>
            </div>
    )
}

export default Color