import React from 'react';
import './App.css';

// import my component
import Card from './Card';
import Header from './Header';


// CSS in JS
var styles = {
  display: 'flex',
  flexWrap:'wrap',
}


function App() {
  return (
    <div className="App">
      <Header />
      <h1>TEST</h1>
      <div className="row">
        <Card cardTitle="Card 1" />
        <Card cardTitle="Card 2" />
        <Card cardTitle="Card 3" />
      </div>
    </div>
  );
}





export default App;
