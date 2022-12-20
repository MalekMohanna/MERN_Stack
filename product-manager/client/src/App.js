import './App.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route element={<Main/>} path='/products/'/>
      <Route element={<ProductDetail/>} path='/products/:id/' />
      <Route element={<Update/>} path="/products/:id/edit"/>
      </Routes>
    </div>
  );
}

export default App;
