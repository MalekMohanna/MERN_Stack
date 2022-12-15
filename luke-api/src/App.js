import './App.css';
import { Router } from '@reach/router';
import Search from './components/Search';
import People from './components/People';
import Planets from './components/Planets';
import { useState } from 'react';

function App() {
  const [id,setId] = useState('');
  const values = (ids)=>{
    setId(ids);
  }
  return (
    <div className="App">
    <Search values={values}/>
    <Router>
    <People path="/people/:peopleid" />
    <Planets path="/planets/:planetid" />
    </Router>
    </div>
  );
}

export default App;
