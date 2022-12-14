import './App.css';
import {  Router } from '@reach/router';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
function App() {
  return (
    <div className="App">
      <Router>
        <First path="/home"/>
        <Second path="/:input"/>
        <Third path="/:word/:color/:backg"/>
      </Router>
    </div>
  );
}

export default App;
