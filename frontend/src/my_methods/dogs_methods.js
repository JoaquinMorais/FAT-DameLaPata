import axios from "axios";

var response = {}

export async function PutDogs(values) {
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