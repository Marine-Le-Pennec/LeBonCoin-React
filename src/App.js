import React from 'react';
import '../src/assets/css/App.css';


// React Router

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Composants
import Header from "./components/Header"

// Containers
import Home from "./containers/Home"
import OfferPage from "./containers/OfferPage"

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch,faUser,faPlusSquare } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch,faUser,faPlusSquare);


function App() {

  return (
    <div className="App">
    <Router>
      <Header/>
        <Switch>
        <Route path="/">
          <Home/>
        </Route>
        <Route path="/offer/:id">
          <OfferPage/>
        </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
