import React from "react";
import {BrowserRouter as Router, Redirect} from "react-router-dom";
import { runInThisContext } from "vm";
import {signUpUser} from '../Services/Services.js';
import {ToastsContainer, ToastsStore} from 'react-toasts';

class SignUp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            password:'',
            confirmPassword:'',
            email:''
        }
    }
    handleChange = (event) =>{
        event.preventDefault();
        const name = event.target.name;
        this.setState ({[name]: event.target.value})
    }

    onSubmit = (event) =>{
        event.preventDefault();
        const{password, confirmPassword, name, email} = this.state;
            if(password !== confirmPassword){
                this.setState({confirmPassword:'', password: ''})
                return alert('Las contraseñas deben ser iguales'); 

            }
           
            signUpUser({name, email, password, confirmPassword})
            .then(result =>  { 
                                console.log(result)  })
            .catch(err => {
                          console.log(err)})
    }

    render(){
        
return(
   
    this.state.user ? <Redirect to='/' /> 
    :
    <div>
        <form onSubmit={this.onSubmit}>
        <div>
            <label htmlFor="name">Nombre</label>
            <input required id="name" name ="name" onChange={this.handleChange} type="text" value={this.state.name}/>
        </div> 
            <label htmlFor="password">Contraseña</label>
            <input required type="password" id="password" name="password" onChange={this.handleChange} value={this.state.password}/> 
        <div>
            <label htmlFor="password2">Repetir Contraseña</label>
            <input required type="confirmPassword" id="password2" name="confirmPassword" onChange={this.handleChange} value={this.state.confirmPassword}/>
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input required  type="email" id="email" name="email"onChange={this.handleChange} value={this.state.email}/>  
        </div>  
        <button>Confirmar</button>
        
        </form>
        
    </div>
)
    }
}

export default SignUp;