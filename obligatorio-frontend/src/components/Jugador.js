import React from 'react';
import {
    // eslint-disable-next-line no-unused-vars
    BrowserRouter as Router,
    // eslint-disable-next-line no-unused-vars
    withRouter
} from "react-router-dom";

class Jugador extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            players: [
                {
                    name: '',
                    lastName: '',
                    birthDate:'',
                    number: 0
                }
            ]
        }
    }
    handleChange = (event) =>{
        event.preventDefault();
        const name = event.target.name;
        this.setState ({[name]: event.target.value})
    }
    
    /*  onSubmit = (event) =>{
        event.preventDefault();
        const{name, primaryColor , secondaryColor, players} = this.state;
        CreateTeam({ name, primaryColor, secondaryColor, players})
        .then(result => {this.props.dispatch(CreateTeam(result.data)); 
            
        }).catch(err => {alert ('ERROR')
        console.log(err)})
    } */
    
    
    render(){
        return(
            <div>
            <h4>Jugador 1</h4>
            <div><label htmlFor="pname"> Nombre </label>
            <input type="name"  name="name"  id="pname" onChange="handleChange" value={this.state.name}></input></div>
            <div><label htmlFor="lastname">Apellido  </label>
            <input type="text"  name="lastName"  id="lastname" onChange="handleChange" value={this.state.lastName}></input></div>
            <div><label htmlFor="FechaNac">Fecha Nacimiento  </label>
            <input type="date"  name="birthDate"  id="FechaNac" onChange="handleChange" value={this.state.birthDate}></input></div>
            <div><label htmlFor="number">Numero  </label>
            <input type="number"  name="number"  id="number" onChange="handleChange" value={this.state.number}></input></div>
            </div>
            )
        }
    }
    export default Jugador;