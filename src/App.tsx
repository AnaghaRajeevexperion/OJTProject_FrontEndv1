import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Header/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MyProfile from './components/MyProfile';
import Home from './components/HomePage/Home';

function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
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
