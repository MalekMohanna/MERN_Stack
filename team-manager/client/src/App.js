import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './views/Create';
import Main from './views/Main';
import Status from './views/Status';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/create' element={<Create/>}/>
        <Route path='/' element={<Main/>}/>
        <Route path='/status/game/:id' element={<Status/>}/>
      </Routes>
    </div>
  );
}

export default App;
