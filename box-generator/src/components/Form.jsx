import React, { useState } from 'react'

const Form = (props) => {
    const [box, setBox] = useState("");
    const [height, setHeight] = useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.filling(box,height);
        setBox("");
        setHeight("");
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="mycolor">Color :</label>
                <input id='mycolor' type="text" onChange={(e)=>setBox(e.target.value)} value={box}/>
            </div>
            <div>
                <label htmlFor="myHeight">Height :</label>
                <input id='myHeight' type="text" onChange={(e)=>setHeight(e.target.value)} value={height}/>
            </div>
            <input type="submit" value={"Submit"} />
        </form>
        <hr />
    </div>
  )
}

export default Form