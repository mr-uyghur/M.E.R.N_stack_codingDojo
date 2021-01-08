import React, {useState} from 'react'

const Tabs = (props) => {
    const [selectedIndex,setSelectedIndex] = useState(1)
   
    return (
        <div style={{ marginTop: 20 }}>
            {
                props.tabItems.map((tab, i) => {
                    const labelStyle = {
                        padding: 10,
                        marginRight: 20,
                        border: "1px solid gray",
                    };
                    if(selectedIndex === i){
                        labelStyle.background = "black";
                        labelStyle.color = "white"
                    }
                    return <span
                    key = {i}
                        onClick = {e => {
                            setSelectedIndex(i)
                        }}
                        style={labelStyle}>
                            
                        {tab.header}
                    </span>
                })
            }
            
            <body style = {{marginTop:40}}>
                <fieldset>
                <h3> {props.tabItems[selectedIndex].content} </h3>
                </fieldset>
                </body>
        </div>
    )

}

export default Tabs