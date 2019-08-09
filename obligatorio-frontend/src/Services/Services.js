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