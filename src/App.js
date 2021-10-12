import React from 'react';
// import logo from './logo.svg';
import Navbar from './componets/Navbar';
import Home from './componets/pages/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/services' component={Services} /> */}
        {/* <Route path='/products' component={Products} /> */}
        {/* <Route path='/sign-up' component={SignUp} /> */}
      </Switch>
    </Router>
  </>
  );
}

export default App;
