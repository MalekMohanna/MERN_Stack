import React from 'react'
import {useState} from 'react'

const Task = (props) => {

    const [checked, setChecked] = useState(false)

    const handleCheckbox = () => {
        setChecked(!checked)
    }
    console.log("Task "+props.index+" is generated with status = "+ checked)
  return (
        <li className= {checked ? "checked-item": ""} >{props.item} <input onClick={e=>handleCheckbox()} type="checkbox" /> <button onClick={e=>props.deleteTask(props.index)}>Delete</button> </li>

  )
}

export default Task