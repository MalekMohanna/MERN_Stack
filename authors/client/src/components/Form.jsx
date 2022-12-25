import React from 'react'
import {Paper,FormControl,InputLabel,OutlinedInput,Button} from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


const Form = (props) => {
    const {onSubmitProp,initialName,errors} = props;
    const [name,setName] = useState(initialName);
    const navigate = useNavigate();
    const styles = {
        paper: {
            width: "20rem", padding: "1rem"
        },
        input: {
            marginBottom: "1rem",
        },
        button: {
            width: "40%",
            margin:'10px',
        },
        name:{
            width:'50%'
        },
    }
    const submitHandler=e=>{
        e.preventDefault();
        onSubmitProp({name});
        setName('');
    }
    const cancelHandler=e=>{
        e.preventDefault();
        navigate('/');
    }
  return (
    <Paper elevation={3} style={styles.paper}>
    
    <form >
        <p style={{color:'red'}}>{errors.map((err, index) => <p key={index}>{err}</p>)}</p>
        <p style={styles.name}>Name:</p>
        <FormControl variant="outlined" style={styles.input}>
            <InputLabel>Name</InputLabel>
            <OutlinedInput label="Outlined" variant="outlined" type="text" onChange={e=>setName(e.target.value)} value={name} />
        </FormControl>
        <Button style={styles.button} type="submit" variant="contained" color="primary" onClick={cancelHandler}>
            Cancel
        </Button>
        <Button style={styles.button} type="submit" variant="contained" color="primary" onClick={submitHandler}>
            Submit
        </Button>
    </form>
</Paper>
  )
}

export default Form