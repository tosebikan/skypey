import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import {contacts} from './static-data';
import _ from 'lodash';

function App() {
  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main/>
    </div>
  );
}

export default App;
