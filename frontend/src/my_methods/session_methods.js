import axios from 'axios';

let pages_array = ['']
let setting_array = ['']
export async function FetchNavbarItems() {
    console.log(localStorage.getItem('type'))
    if(localStorage.getItem('id') !== null){
      if (localStorage.getItem('type') === 'adopter'){
        pages_array = ['Inicio', 'Quienes Somos', 'Pinder']
        setting_array = ['Perfil', 'Cerrar Session']
      }
      else if (localStorage.getItem('type') === 'shelter'){
        pages_array = ['Inicio', 'Quienes Somos', 'Pinder']
        setting_array = ['Perfil', 'Cerrar Session']
      }
    }   
    else{
      pages_array = ['Inicio', 'Quienes Somos']
      setting_array = ['Iniciar Sesion', 'Crear Cuenta']
    }
    return{
      pages_array: pages_array,
      setting_array: setting_array,
    }
  };


  export async function SendLogin(data_to_send) {
    let response = null; // Initialize the response variable
  
    try {
      response = await axios.post('http://localhost:5000/login', data_to_send);
      console.log(response)
      localStorage.setItem('id', response.data.response['id']);
      localStorage.setItem('type', response.data.response['type']);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }