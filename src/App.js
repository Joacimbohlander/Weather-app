import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, {useState} from 'react';
import CityPage from './Components/ResultPage';

const App = () => {

  return (
    <Router>
      <CityPage/>
    </Router>
  );
}

export default App;
