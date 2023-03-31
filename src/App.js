
import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Players from './Components/Players/Players';



function App() {
  const [total, setTotal] = useState("");

  const handlePlayer = (value) => {
  const previousValue = JSON.parse(localStorage.getItem("brandValue"))
  if (previousValue) {
    const playerValueTottal = previousValue + value;
    localStorage.setItem("brandValue", playerValueTottal)
    setTotal(playerValueTottal);
  }
  else {
    localStorage.setItem("brandValue", value);
    setTotal(value)
  }
}
  return (
    <div className="App">

      <Header></Header>
      <Players handlePlayer={handlePlayer} brandTotal={total}  ></Players>
    </div>
  );
}

export default App;
