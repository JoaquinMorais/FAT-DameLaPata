import axios from 'axios';
axios.defaults.withCredentials = true;
let pages_array = ['']
let setting_array = ['']

export async function FetchNavbarItems() {
    if(localStorage.getItem('id') !== null){
      if (localStorage.getItem('type') === 'adopter'){
        pages_array = ['Inicio', 'Quienes Somos', 'Adoptar']
        setting_array = ['Mi Perfil']//'Cerrar Session'
      }
      else if (localStorage.getItem('type') === 'shelter'){
        pages_array = ['Inicio', 'Quienes Somos', 'Publicar']
        setting_array = ['Perfil del Refugio'] 
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
    let response = null;
    try {
      response = await axios.post('http://localhost:5000/login', data_to_send);
      if (response.data['status'] === 200) {
        localStorage.setItem('id', response.data.response['id']);
        localStorage.setItem('type', response.data.response['type']);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    return false;
  }

  export async function SendRegister(data_to_send, method) {
    let response = null;
    try {
      response = await axios.put('http://localhost:5000/' + method + '/register', data_to_send);
      if (response.data['status'] === 200) {
        localStorage.setItem('id', response.data.response['id']);
        localStorage.setItem('type', response.data.response['type']);
        return {
          status : 200,
          response : 'Succeslful'
        };
      } else {
        return {
          status : response.data.status,
          response : response.data.response
        }
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    return {
      status : 401,
      response : 'error inesperado...'
    };
  }

  export async function IsUserLogged(){
    if (localStorage.getItem['type'] === 'adopter'){
      return true
    }
    return false
  }

  export async function GetProfile(){
    var cosa = await axios.post('http://localhost:5000/profile', {
      address_is_requiered : true
    });
    return cosa
  }