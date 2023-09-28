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