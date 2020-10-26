import React from 'react';
import './App.css';

// import my component
import Card from './Card';
import Header from './Header';
import Button from './Button';


// CSS in JS
var styles = {
  display: 'flex',
  flexWrap:'wrap',
}


const Container = (props) => (
  <div className="container App">{props.children}</div>
);


function App() {
  return (
    <Container>
      <Header />
      <h1>TEST</h1>
        <input type="text" />
      <Button color="#fac">Click 1</Button>
      <Button color="red">Click 2</Button>
      <Button color="blue">Click 3</Button>


      <div className="row">
        <Card cardTitle="Card 1" />
        <Card cardTitle="Card 2" />
        <Card cardTitle="Card 3" />
      </div>
    </Container>
  );
}





export default App;
