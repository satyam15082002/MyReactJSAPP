
import "../css/App.css";
import { Component } from 'react';
import {BrowserRouter as Router ,Route ,Switch} from "react-router-dom";
import Nav from '../components/Nav/nav';
import Home from "../components/Home/home";
import  Account from "../components/Auth/Account";

export default class RouteWithNoAuth extends Component {
  render()
  { 
    return( 
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route  exact path="/account" component={Account}/>
        </Switch>
        </div>
    </Router>
    )
  }
}

