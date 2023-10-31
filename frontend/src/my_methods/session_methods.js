import { responsiveProperty } from '@mui/material/styles/cssUtils';
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
      response_status : response_status,
      response_message : response_message,
      data : data
  }
}

export async function SendRegister(values, method){
  try{
    response = await axios.put('' + method + '/register', values);
    response_status = 400;
    response_message = 'ocurrio un error al procesar la peticion'
    if (response.data['status'] === 200){
      localStorage.setItem('id', response.data.response['id'])
      localStorage.setItem('type', response.data.response['type'])
      response_status = 200;
      response_message = 'peticion precesada correctamente';  
    }
  }
  catch{
    window.location.href = '/error';
  }
  return {
      response_status : response_status,
      response_message : response_message,
      data : data
  }
}

export async function LogOut(){
  try{
    response = await axios.post('/logout', []);
  }
  catch{
    window.location.href = '/error';
  }
  localStorage.setItem('id', null);
  localStorage.setItem('type', null);
}

export async function GetProfile(){
  try{
    response = await axios.post('/profile', {address_is_requiered : true});
    if(response.data.status !== 200){
      window.location.href = '/login';
    }
  }
  catch{
    window.location.href = '/error';
  }
  return{
    response_message : 'peticion completada con exito',
    response_status : 200,
    data : response.data.response
  }
}
