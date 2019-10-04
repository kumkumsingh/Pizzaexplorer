import React from 'react';
import logo from './logo.svg';
import './App.css';
import PizzaListContainer from './Component/PizzaListContainer'
import PizzaDetailsContainer from './Component/PizzaDetailsContainer'
import AddPizzaFormContainer from './Component/AddPizzaFormContainer'
function App() {
  return (
    <div className="App-Header">
      <PizzaListContainer/>
      <PizzaDetailsContainer/>
      <AddPizzaFormContainer/>

    </div>
  );
}

export default App;
