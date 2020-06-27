import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cálculo de Juros Compostos</h1>
        <div className="Form">
          <Form />
        </div>
        <span className="Author">By André Machado 😉</span>
      </header>
    </div>
  );
}

export default App;
