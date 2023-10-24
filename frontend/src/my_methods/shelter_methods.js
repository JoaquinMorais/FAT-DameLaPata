import axios from "./base_axios";
let response;

export async function PutDogs(values) {
    try {
      response = await axios.put('pet', values);
      response_message = 'Mascota no agregada, ocurrio un error'
      if (response.status === 200){
        response_message = 'Mascota agregada con exito'
      }
    } catch (error) {
      response_message = 'Ocurrio un error'
    }
    response_status = response.status
    return {
        response_status,
        response_message,
    }
  }