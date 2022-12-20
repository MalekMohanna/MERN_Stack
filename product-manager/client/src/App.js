import './App.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route element={<Main/>} path='/products/'/>
      <Route element={<ProductDetail/>} path='/products/:id/' />
      </Routes>
    </div>
  );
}

export default App;
