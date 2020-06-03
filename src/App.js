import React from 'react';
import './App.css';
import DataList from './components/DataList/DataList.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DataList rate='AED' />

      </header>
    </div>
  );
}

export default App;
