import axios from "axios";

let pages_array = ['']
let setting_array = ['']
var jsonString = []

async function IsLogged() {
    try {
      const response = await axios.post('http://localhost:5000/profile', '' );
      if (response.data['status'] == 402){
        pages_array = ['pornhub', 'x']
        setting_array = ['iniciar sesion']
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