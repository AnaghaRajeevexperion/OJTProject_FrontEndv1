import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Header/Navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Heading from './components/Header/Heading';

function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Heading></Heading>
    <Home/>
    </Fragment>
  );
}

export default App;
