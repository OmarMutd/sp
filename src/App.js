import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import PastaPage from './Components/MenuLinks/PastaPage';
import SubsPage from './Components/MenuLinks/SubsPage';
import GourmetPage from './Components/MenuLinks/GourmetPage';
import SoupsSaladsPage from './Components/MenuLinks/SoupsSaladsPage';
import WingsPage from './Components/MenuLinks/WingsPage';
import KidsPage from './Components/MenuLinks/KidsPage';
import DessertsPage from './Components/MenuLinks/DessertsPage';
import BeveragesPage from './Components/MenuLinks/BeveragesPage';
import PageDoesNotExist from './Components/PageDoesNotExist/PageDoesNotExist';


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/menu' component={Menu} />
        <Route path='/about' component={About} />
        <Route path='/Pasta' component={PastaPage} />
        <Route path='/Subs' component={SubsPage} />
        <Route path='/Gourmet' component={GourmetPage} />
        <Route path='/SoupsSalads' component={SoupsSaladsPage} />
        <Route path='/Wings' component={WingsPage} />
        <Route path='/Kids' component={KidsPage} />
        <Route path='/Desserts' component={DessertsPage} />
        <Route path='/Beverages' component={BeveragesPage} />
        <Route component={PageDoesNotExist} />
      </Switch>
    </div>
  );
}

export default App;
