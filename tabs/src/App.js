import './App.css';
import Tabs from './components/Tabs';

function App() {
  const x=[
    ["Ttile 1","adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    ["Title 2","ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    ["Title 3","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
  ]
  return (
    <div className="App">
      <Tabs test={x} ></Tabs>
    </div>
  );
}

export default App;
