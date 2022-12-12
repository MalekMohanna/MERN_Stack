import React, { useState } from 'react'

const Tabs = (props) => {
  const [values,setValues] = useState("");

  const handleClick=(e,item)=>{
    setValues(item[1]);
  }


  return (
    <div style={{
      display:'flex',
      flexDirection:'row',
      flexWrap:'nowrap',
      }}>
        {
            props.test.map((item,index)=>
            <button key={index} style={{
              marginLeft:'50px',
              border:"1px black solid",
              width:'100px',
              height:'50px',
            }} 
            onClick={(e)=>handleClick(e,item)} >
              <p >{item[0]}</p>
              
            </button>
            
                )
                
        }{values ? <div style={{width:'200px',height:'200px',border:'1px red solid',}}>{values}</div> :''}
    </div>
  )
}

export default Tabs