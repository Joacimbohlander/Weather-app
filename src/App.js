import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React, {useState} from 'react';
import CityPage from './Components/Search';

const App = () => {

  const [isFavorite, setIsFavorite] = useState(false);
  const toggle = () => {
      setIsFavorite(!isFavorite)
  }

  return (
    <Router>
      <CityPage isFavorite={isFavorite} toggle={toggle} />
    </Router>
  );
}

export default App;
