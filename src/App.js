import { Component } from 'react';
import RouteWithAuth from "./route/routewithauth";
import RouteWithNoAuth from "./route/routenoauth";
import { connect } from "react-redux";

class App extends Component {
  
  render()
  { 

    return(      
      (this.props.user.login===true)?<RouteWithAuth/>:<RouteWithNoAuth/>
    )

  }
}
const mapStateToProps=(state)=>({
  user:state.user
})

export default connect(mapStateToProps,null)(App);
