import React from "react";
import {
    // eslint-disable-next-line no-unused-vars
    BrowserRouter as Router,
    // eslint-disable-next-line no-unused-vars
    withRouter
  } from "react-router-dom";
import {connect}    from 'react-redux';
import { CreateTeam } from "../Services/Services";
import Jugador from './Jugador'

  
  class Equipo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            primaryColor:'',
            secondaryColor:'',
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

    onSubmit = (event) =>{
        event.preventDefault();
        const{userid, name, primaryColor , secondaryColor, players} = this.state;
        CreateTeam({ userid, name, primaryColor, secondaryColor, players})
            .then(result => {this.props.dispatch(CreateTeam(result.data)); 
             
            }).catch(err => {alert ('ERROR')
             console.log(err)})
    }


    render(){
return(
    <div className="formAbout">
        <h2>Nuevo Equipo</h2>
        <form className="formcon" onSubmit="onSubmit"> 
        <div><div>
            <label htmlFor="teamName">Nombre del equipo </label>
             <input type="text"  name="name"  id="teamName" onChange="handleChange" value={this.state.name}/>
            </div>
             <div>
             <label htmlFor="color" >Color de camiseta </label>
             <input type="text"  name="primaryColor"  id="primaryColor" onChange="handleChange" value={this.state.primaryColor}></input>
             </div>
             <div>
              <label htmlFor="secondaryColor">Color alternativo  </label>
             <input type="text"  name="secondaryColor"  id="secondaryColor" onChange="handleChange" value={this.state.secondaryColor}></input>
             </div>
        </div>
        <div>
            <h3>Jugadores</h3>
            <Jugador value={this.state.players}></Jugador>
        </div>    
            
        </form>
        <button className="button"
          onClick={() => {
           this.props.history.push("/Campeonato");
         }}
        >
          Ingresar
        </button>
    </div>
)
    }
}
function mapStateToProps(state){
    return{
        team :state.team

    }
 }

 export default connect(mapStateToProps)(Equipo);