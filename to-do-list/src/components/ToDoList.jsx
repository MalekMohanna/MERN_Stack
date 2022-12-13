import React, { useState } from "react";
import Task from './Task'
import uniqid from 'uniqid';

const ToDoList = (props) => {
    const[list,setList]=useState([]);
    const[taskTitle, setTaskTitle] = useState("")
    const addTask = (task)=>{
        setList([...list,task]);
    }
    const deleteTask = (index)=>{
        // setList([...list.slice(0,index),...list.slice(index+1)]);
        console.log("item at index "+index+" is going to be deleted")
        let newList = [...list]
        newList.splice(index,1)
        setList(newList);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        // const task = document.querySelector("#add").value;
        // const task = taskTitle
        // const vlaues = task;
        addTask(taskTitle);
    }
  return <div>
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="add">Add task :</label>
        <input type="text" id="add" value={taskTitle} onChange={(e) => {setTaskTitle(e.target.value)}}/>
        <input type="submit" value="Add" />
        </form>
        <div>
            <ul>
            {
            list.map((item,index) => 
            <Task key={uniqid()} index={index} item={item} deleteTask={deleteTask}></Task>
            )
        }
        </ul>
        </div>
    </div>

    </div>;
};

export default ToDoList;
