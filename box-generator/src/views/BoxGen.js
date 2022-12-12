import React from 'react'
import Form from '../components/Form';
import Display from '../components/Display';
import { useState } from 'react';

export default function BoxGen() {
     // const [inner,setInner]=useState([]);
  const [outer,setOuter]=useState([]);
  const fill=(color,height)=>{
    // setInner();
    setOuter([...outer,[color,height]]);
  }
  return (
    <div className="App">
      <Form filling={fill}></Form>
      <Display y={outer} ></Display>
    </div>
  );
  
}
