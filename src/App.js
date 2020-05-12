import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main/>
    </div>
  );
}

export default App;
