
import '../../css/App.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";


class Nav extends Component {
  
  isAuth=(arg)=>(this.props.user.login)?arg:"/account";

  render()
  { 
    return( 
    <nav className="Nav">
        <Link to="" ><h3>Home</h3></Link>
        <Link to={this.isAuth("/todo")}><h3>Todo</h3></Link>
        <Link to={this.isAuth("/grid")}><h3>Grid</h3></Link>
        <Link to="/account"><h3>{this.props.user.login?"Account":"Login"}</h3></Link>
    </nav>
    )
  }
}
const mapStateToProps=(state)=>({
  user:state.user,
})



export default connect(mapStateToProps,null)(Nav);
