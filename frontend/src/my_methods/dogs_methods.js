import axios from "./base_axios";
let response;
let response_message;
let response_status;

function response_react(status = null, message = null, data = null){
  return {
    response_status : status,
    response_message : message,
    data : data,
  }
}

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
  return response_react(response_status,response_message)
}

export async function GetPets() {
  try {
    response = await axios.get('pets');
    response_message = 'Error al traer a las mascotas, intente denuevo mas tarde'
    if (response.status === 200){
      response_message = ''
    }
  } catch (error) {
    response_message = 'Ocurrio un error'
  }
  response_status = response.status
  return response_react(response_status,response_message, response.data.response)
}

export async function CreateRequest(dog, state) {
  try {
    response = await axios.put('adopter/match', { 'id_pet': dog, 'id_state': state });
    console.log(response);
  } catch {
    console.log('error...');
  }
}

export async function GetSinglePet(id) {
  response = await axios.get(`pet/${id}`);
  console.log(response)
  return response;
}
