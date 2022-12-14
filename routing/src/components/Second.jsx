import React from 'react'
const Second = (props) => {
  return (
    <div>
        {isNaN(props.input)?<h1>The word is :{props.input}</h1>:<h1>The number is :{props.input}</h1>}
    </div>
  )
}

export default Second