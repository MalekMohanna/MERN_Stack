import './App.css';
import PersonCard from './components/PersonCard';
function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Doe"} lastName={"Jane"} age={45} color={"Black"} />
      <PersonCard firstName={"Smith"} lastName={"John"} age={88} color={"Brown"} />
      <PersonCard firstName={"Filmore"} lastName={"Millrad"} age={50} color={"Brown"} />
      <PersonCard firstName={"Smith"} lastName={"Maria"} age={62} color={"Brown"} />
    </div>
  );
}

export default App;
