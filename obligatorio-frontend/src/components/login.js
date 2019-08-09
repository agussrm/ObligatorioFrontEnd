import React from "react";
import {
    BrowserRouter as Router,
    Redirect
  } from "react-router-dom";
import {connect}    from 'react-redux';
import {LoginUser} from './../Services/Services.js'
import { Modal, Button } from 'react-materialize';

class Login extends React.Component {
            constructor(props){
                super(props)
                this.state = {
                    email:'',
                    password:''
                }
            }
            handleChange = (event) =>{
                event.preventDefault();
                const name = event.target.name;
                this.setState ({[name]: event.target.value})
            }
        
            onSubmit = (event) =>{
                event.preventDefault();
                const{password,  email} = this.state;
                LoginUser({ email, password})
                    .then(result => {this.props.dispatch(Login(result.data))
                    }).catch(err => {alert ('ERROR')
                     console.log(err)})
            }
        
            render(){
        return( 
            this.props.user ? 
            <Redirect to='/' />
            :
            <div>
                <form onSubmit={this.onSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input required  type="email" id="email" name="email"onChange={this.handleChange} value={this.state.email}/>  
                </div>
                <div>
                <label htmlFor="password">Contraseña</label>
                    <input required type="password" id="password" name="password" onChange={this.handleChange} value={this.state.password}/> 
                </div>
    
                  
                <Button waves="light" style={{marginRight: '5px'}}>Confirmar</Button>
                </form>
                
            </div>
        )
            }
        }

    
 function mapStateToProps(state){
    return{
        user:state.user

    }
 }

 export default connect(mapStateToProps)(Login);
    

