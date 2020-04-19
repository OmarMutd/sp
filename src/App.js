import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import About from './Components/About/About';
import PageDoesNotExist from './Components/PageDoesNotExist/PageDoesNotExist';


import './App.css';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/menu' component={Menu} />
          <Route  path='/about' component={About} />
          <Route component={PageDoesNotExist} />
        </Switch>
    </div>
  );
}

export default App;
