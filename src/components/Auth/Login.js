import { Component } from 'react';
import  '../../css/login.css';
import {updateUser} from "../../redux/action";
import { connect } from "react-redux";

 class Login extends Component {
constructor(props)
{
    super(props)
    this.state={
        username:"",
        password:"",
        isformvalid:false,
        error:"",
    }
} 
validateform=()=>
{
    if(this.state.username.length>=3&&this.state.password.length>=4)
    {
        this.setState({isformvalid:true})
    }
    else{
        this.setState({isformvalid:false})
    }
}
handleChange=(key)=>event=>
{
this.setState({[key]:event.target.value});
}
componentDidUpdate=(prevProps,prevState)=>
{
    if(prevState.username!==this.state.username||prevState.password!==this.state.password)
        this.validateform()

}
handleSubmit=async (e)=>
{
    e.preventDefault();
    const params={
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({username:this.state.username,password:this.state.password}),
    }
    var response=await fetch(" http://192.168.43.41:1000/login",params);
    if(response.ok)
    {
        this.props.updateUser({username:this.state.username,login:true});
    }
    else
    {
        var error=await response.text();
        this.setState({error:error});
    }
    
    
}

render()
  { 
    return( 
        <div className="loginform">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} >
            <h3 style={{color:'red',fontStyle:'italic'}}>{this.state.error}</h3><br/>
            <input type="text"required placeholder="Username" minLength="3"
            onChange={this.handleChange('username')} />
            <br/>
            <input type="password" placeholder="Password"  minLength="4"
            onChange={this.handleChange('password')} />
            <br/>
            <input type="submit" value="Login" disabled={!this.state.isformvalid}/>
        </form>
        </div>
    )
  }
}

const mapDispatchToProps={
    updateUser:updateUser
}

export default connect(null,mapDispatchToProps)(Login);