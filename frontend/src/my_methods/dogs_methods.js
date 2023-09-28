import axios from "axios";

/**
 * Envía una solicitud PUT para agregar un perro con los datos proporcionados.
 * @param {object} values - Los datos del perro a agregar.
 * @returns {Promise<object>} - Una promesa que resuelve en la respuesta del servidor.
 * Si hay un error, se rechaza con un objeto que contiene un mensaje de error.
 */
export async function PutDogs(values) {
<<<<<<< HEAD
    try {
        response = await axios.put('http://localhost:5000/pet', values);
      } catch (error) {
        console.error('Error:', error);
      }
      return response
  };

export async function CreateRequest(dog, state){
  response = await axios.put('http://localhost:5000/adopter/match', {'id_pet': dog, 'id_state': state})

  try{
    console.log(response)
  }
  catch{
    console.log('error...')
  }
}

export async function GetSinglePet(id){
  response = await axios.get(`http://localhost:5000/pet/${id}`);
  return response 
}
=======
  try {
    const response = await axios.put('http://localhost:5000/pet', values);
    return response.data; // Devuelve los datos de la respuesta
  } catch (error) {
    console.error('Error en PutDogs:', error);
    // Manejo de error más detallado
    throw new Error('No se pudo agregar el perro. Por favor, inténtalo de nuevo.');
  }
}
>>>>>>> 0bba3e27d34e0285a9b4a19d2e846ab43e6d12f4
