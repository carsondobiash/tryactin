import React from 'react';
import './App.css';
import Home from "./pages/Home"
import ShopWomen from "./pages/ShopWomen";
import ShopMen from "./pages/ShopMen";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props}/>}/>
          <Route path="/men" render={(props) => <ShopMen {...props}/>}/>
          <Route path="/women" render={(props) => <ShopWomen {...props}/>}/>
          <Route path="/cart" render={(props) => <Cart {...props}/>}/>
          <Route path="/account" render={(props) => <Account {...props}/>}/>
        </Switch>
      </Router>
  );
}

export default App;
