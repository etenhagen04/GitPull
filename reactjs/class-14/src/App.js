import logo from './logo.svg';
import './App.css';
import InputList from './InputList';

function App() { // Dumb Component
  return (
    <div className="App">
      <InputList heading="What Are Your 3 Favorite Foods?" />
    </div>
  );
}

export default App;