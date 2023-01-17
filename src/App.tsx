import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Header/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MyProfile from './components/Authentication/MyProfile';
import Home from './components/HomePage/Home';

function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <h1>Offers available for selected products only!</h1>
    <Home/>
    <BrowserRouter>
    <Switch>
        <Route path="/myprofile" component={MyProfile} />
    </Switch>
    </BrowserRouter>
    </Fragment>
  );
}

export default App;
