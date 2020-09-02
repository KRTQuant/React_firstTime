import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Payment_Method from './Component/Payment-Method'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Payment_Method />
    </Router>
  );
}

export default App;
