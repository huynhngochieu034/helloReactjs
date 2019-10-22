import React from 'react';
import './App.css';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';

function App() {
  return (
    <div className="App">
      {/* TITLE : START */}
      <Title></Title>  
      {/* TITLE : END */}

      {/* CONTROL : START */}
      <Control></Control>
      {/* CONTROL : END */}
      <br></br>

      {/* FORM : START */}
      <Form></Form>
      {/* FORM : END */}

      <br></br>
      <br></br>
      <br></br>

      {/* LIST : START */}
      <List></List>
      {/* LIST : END */}
      
    </div>
  );
}

export default App;
