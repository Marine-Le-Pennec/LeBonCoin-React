import React from 'react';
// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import '../src/assets/css/App.css';




// Composants
import Header from "./components/Header"
import Footer from "./components/Footer"

// Containers
import Home from "./containers/Home"
import OfferPage from "./containers/OfferPage"

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch,faUser,faPlusSquare,faShoppingCart} from '@fortawesome/free-solid-svg-icons';
library.add(faSearch,faUser,faPlusSquare,faShoppingCart);


function App() {

  return (
    <div className="App">
    <Router>
      <Header/>
        <Switch>
        <Route path="/offer/:id">
          <OfferPage/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        </Switch>
        <Footer/>
    </Router>
    </div>
  );
}

export default App;
