import React from 'react';
import '../src/assets/css/App.css';

// Composants
import Header from "./components/Header"

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch,faUser,faPlusSquare } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch,faUser,faPlusSquare);


function App() {
  return (
    <div className="App">
    <header>
      <Header/>
    </header>
    </div>
  );
}

export default App;
