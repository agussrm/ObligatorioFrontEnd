import React from "react";
import {
    // eslint-disable-next-line no-unused-vars
    BrowserRouter as Router,
    // eslint-disable-next-line no-unused-vars
    withRouter
  } from "react-router-dom";
import {connect}    from 'react-redux';
import { getChampionship } from "../Services/Services";


//user/confirmchampionship/userId
  
  class Campeonato extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            "played": true,
            "team1": {
              "id": "string",
              "score": 0,
              "players": [
                "string"
              ]
            },
            "team2": {
              "id": "string",
              "score": 0,
              "players": [
                "string"
              ]
            },
            "events": [
              {
                "playerId": "string",
                "minute": 0,
                "type": "GOAL"
                }
            ]
              
    }

}


    handleChange = (event) =>{
        event.preventDefault();
        const name = event.target.name;
        this.setState ({[name]: event.target.value})
    }

    getChampionship = (event) =>{
        event.preventDefault();
        getChampionship()
            .then (result => {this.props.dispatch(getChampionship(result.data)); 
            })
            .catch(err => {alert ('ERROR')
             console.log(err)
            })
        }


    render(){
return(
    <div>
    <div className="tabla">
        <h2>Resultado</h2>
        <table border="1">
        <tbody>
            <tr>
            <td></td>
            <th>{this.state.team1.id}</th>
            <th>{this.state.team2.id} </th>
            </tr>
            <tr>
            <th>Puntos</th>
            <td>{}</td>
            <td>{}</td>
            </tr>
            <tr>
            <th>Goles a Favor</th>
            <td>{}</td>
            <td>{}</td>
            </tr>
            <tr>
            <th>Goles en Contra</th>
            <td>{}</td>
            <td>{}</td>
            </tr>
            <tr>
            <th>Diferencia de goles</th>
            <td>{}</td>
            <td>{}</td>
            </tr>
        </tbody>
        </table>   
    </div>
    <div className="tabla">
        <h2>Goleadores</h2>
        <table border="1">
        <tbody>
            <tr>
            <th>Nombre</th>
            <th>Goles</th>
            </tr>
            <tr>
            <td>random1</td>
            <td>random1</td>
            </tr>
            <tr>
            <td>random1</td>
            <td>random1</td>
            </tr>
            <tr>
            <td>random1</td>
            <td>random1</td>
            </tr>
            <tr>
            <td>random1</td>
            <td></td>
            </tr>
        </tbody>
        </table>   
    </div>
    </div>
)
    }
}
function mapStateToProps(state){
    return{
        championship :state.championship

    }
 }

 export default connect(mapStateToProps)(Campeonato);