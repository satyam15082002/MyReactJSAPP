import { Component } from "react";
import { connect } from "react-redux";
import {Link} from "react-router-dom";
class Home extends Component
{
  render()
  {
    return(
       <div style={{textAlign:'center'}}>
         <h1>Hello {(this.props.user.login)?this.props.user.username:"Guest"}</h1>
         <Link to="/grid/3">grid3</Link>
         </div>
        )
  }
}
const mapStateToProps=(state)=>({
  user:state.user,
})
export default connect(mapStateToProps,null)(Home);