import axios from './base_axios';

axios.defaults.withCredentials = true;
let pages_array = [];
let setting_array = [];
let response;
let response_message;
let response_status;
let data;

function setDefaultNavigationArrays() {
  pages_array = ['Inicio', 'Quienes Somos'];
  setting_array = ['Iniciar Sesion', 'Crear Cuenta'];
}

export async function FetchNavbarItems() {
  try {
    if (localStorage.getItem('id') !== null) {
      if (localStorage.getItem('type') === 'adopter') {
        pages_array = ['Inicio', 'Quienes Somos', 'Adoptar'];
        setting_array = ['Mi Perfil']; //'Cerrar Session'
      } else if (localStorage.getItem('type') === 'shelter') {
        pages_array = ['Inicio', 'Quienes Somos', 'Publicar'];
        setting_array = ['Perfil del Refugio'];
      }
    } else {
      setDefaultNavigationArrays();
    }
  } catch {
    setDefaultNavigationArrays();
  }
  return {
    pages_array: pages_array,
    setting_array: setting_array,
  };
}

export async function SendLogin(values) {
  try {
    response = await axios.post('login', values);
    response_message = 'Credenciales, incorrectas'
    data = false;
    if (response.status === 200){
        localStorage.setItem('id', response.data.response['id']);
        localStorage.setItem('type', response.data.response['type']);
        data = true;

    }
  } catch (error) {
    window.location.href = '/error';

  }
  response_status = response.status
  return {
      response_status,
      response_message,
      data : data
      }
}