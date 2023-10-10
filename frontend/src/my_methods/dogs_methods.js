import axios from "axios";

/**
 * Envía una solicitud PUT para agregar un perro con los datos proporcionados.
 * @param {object} values - Los datos del perro a agregar.
 * @returns {Promise<object>} - Una promesa que resuelve en la respuesta del servidor.
 * Si hay un error, se rechaza con un objeto que contiene un mensaje de error.
 */
export async function PutDogs(values) {
  let response; // Declarar la variable response
  try {
    response = await axios.put('http://localhost:5000/pet', values);
  } catch (error) {
    console.error('Error:', error);
  }
  return response;
}

export async function CreateRequest(dog, state) {
  let response; // Declarar la variable response
  try {
    response = await axios.put('http://localhost:5000/adopter/match', { 'id_pet': dog, 'id_state': state });
    console.log(response);
  } catch {
    console.log('error...');
  }
}

export async function GetSinglePet(id) {
  let response; // Declarar la variable response
  response = await axios.get(`http://localhost:5000/pet/${id}`);
  return response;
}
