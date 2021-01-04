
import "../css/App.css";
import { Component } from 'react';
import {BrowserRouter as Router ,Route ,Switch} from "react-router-dom";
import Nav from '../components/Nav/nav';
import  Todo  from "../components/Todo/todo";
import Grid from '../components/Grid/grid';
import  GridwithId   from "../components/Grid/gridwithid";
import Home from "../components/Home/home";
import  Account from "../components/Auth/Account";

export default class RouteWithAuth extends Component {
  render()
  { 
    return( 
    <Router>
      <div className="App">
        <Nav />
       <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/todo" component={Todo}/>
        <Route exact  path="/grid" component={Grid}/>
        <Route  exact path="/grid/:id" component={GridwithId}/>
        <Route  exact path="/account" component={Account}/>
       </Switch>
        </div>
    </Router>
    )
  }
}

