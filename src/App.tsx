import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/Navbar';
import ProductList from '../src/components/ProductList';
import { Filter } from './components/Filter';
import Filters from './components/Filters';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Filters></Filters>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
