import axios from "axios";

let pages_array = ['']
let setting_array = ['']
var jsonString = []

async function IsLogged() {
    try {
      const response = await axios.post('http://localhost:5000/profile', '' );
      if (response.data['status'] === 402){
        pages_array = ['Inicio', '¿Quienes Somos?']
        setting_array = ['Iniciar Sesion', 'Crear Cuenta']
      }
      else if(response.data['status'] === 200){
        if (response.data['type'] === 'shelter')
          pages_array = ['Inicio', '¿Quienes Somos?','Mis Mascotas', 'Publica', 'Peticiones']
          setting_array = ['Administrar Cuenta', 'Cerrar Sesion']
      }
    
    } catch (error) {
      console.error('Error al realizar la solicitud:', error.message);
    }
    return{
      pages_array: pages_array,
      setting_array: setting_array,
    }
  }

export default IsLogged