import React from 'react'

const Third = (props) => {
  return (
    <div>
      <h1 style={{color:props.color,backgroundColor:props.backg,}}>{props.word}</h1>
    </div>
  )
}

export default Third