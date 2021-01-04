import { Component } from "react";
import { connect } from "react-redux";
import {updateUser  } from "../../redux/action";


const style={padding:'10px',borderRadius:'10px',margin:'5px',backgroundColor:'black',color:'white'}
class Logout extends Component
{
    logout=()=>this.props.updateUser({login:false,username:""});

    render()
    {
        return(
        <div style={{textAlign:'center'}}>
            <h1>Hello {this.props.user.username}</h1>
            <button onClick={this.logout} style={style} >Logout</button>
        </div>   
        )
    }
}


export default connect((state)=>({user:state.user}),{updateUser:updateUser})(Logout);