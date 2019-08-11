import axios from 'axios';


       const API_HOST = 'https://taller-frontend.herokuapp.com/api';
        
       export function signUpUser(user){
        return axios.post(`${API_HOST}/user`, user,{
            header:{
                'Content-type': 'application/json'
    
            } 
        })
      

}
 export function LoginUser(email, password){
    return axios.post(`${API_HOST}/user/login`, {email, password},{
        header:{
            'Content-type': 'application/json'

        } 
    })
}

    export function CreateTeam(user, team){
        return axios.post(`${API_HOST}/team/${user}`, {team},{
            header:{
                'Content-type': 'application/json'
    
           
        }
        })
  

}

export function getChampionship(user){
    return axios.get(`${API_HOST}/user/confirmChampionship/${user}`,{
        header:{
            'Content-type': 'application/json'
       
    }
    })


}