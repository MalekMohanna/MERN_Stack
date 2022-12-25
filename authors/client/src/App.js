import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './views/Create';
import Main from './views/Main';
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
      <Route path='/new' element={<Create/>}/>
      <Route path='/edit/:id' element={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;
