import { useNavigate } from "react-router";
import axios from "axios";
axios.defaults.withCredentials = true;
let data;
let response;
let response_status;
let response_message;

export async function getUserDogs() {
    response_message = "ocurrio un error"

  try {
    response = await axios.get('http://localhost:5000/user/requests');
    if (response.status === 200) {
      data = response.data;
      response_message = "salio bien"
      response_status = 200
    } else {
        data = []
        response_message = "salio mal"
        response_status = 400
    }
  } catch (error) {
    return {
      response_status: 402, 
      response_message: 'Error brodi',
    };
  }
  return {
        data: data,
        response_status: response.status,
        response_message: 'Error en la solicitud',
      };
}