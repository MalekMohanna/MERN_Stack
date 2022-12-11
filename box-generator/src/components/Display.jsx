import React from 'react'

const Display = (props) => {
    // const mystyle={
    //     height : props.b + "px",
    //     width : props.b + "px",
    //     backgroundColor: props.y,
    // }
  return (
    <div style={{
        display:'flex',
        flexDirection:'row',
        flexWrap: 'wrap',
    }}>
        {
            props.y.map((item,i) => 
            <div key={i} style={{
                height:item[1]+"px",
                width:item[1]+"px",
                backgroundColor: item[0],
                marginLeft:"5px",
            }}></div>
            )
        }
    </div>
  )
}

export default Display