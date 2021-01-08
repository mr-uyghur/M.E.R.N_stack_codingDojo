import React from 'react'
import Color from './Color'
const Colors = (props) => {

    return(
      <div>
         
          {
              props.colors.map((val,index)=>
                <div key = {index}>
                    <Color color={val}/>
                    </div>
              )
          }
          </div>
    )
}

export default Colors