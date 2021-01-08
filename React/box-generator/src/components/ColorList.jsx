import React , {useState}from 'react'
import NewColor from './NewColor'

import Colors from './Colors'

const ColorList=() => {
// set up data here so it can be used by the components below
const [colors, setColors] = useState(['red', 'green','orange'])

const addColor = (color) =>{
    setColors([...colors, color]);
}

    return (
        <div>
            <NewColor addColor = {addColor} />
            <hr/>
          <span>  <Colors colors = {colors}/></span>
            
            </div>
    )

};

export default ColorList