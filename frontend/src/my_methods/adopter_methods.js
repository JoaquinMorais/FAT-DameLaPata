import axios from "./base_axios";
axios.defaults.withCredentials = true;

let response;
let response_message;
let response_status;

export async function PutDogs(values) {
    const navigate = useNavigate();
    try {
      response = await axios.put('pet', values);
      response_message = 'Mascota no agregada, ocurrio un error'
      if (response.status === 200){
        response_message = 'Mascota agregada con exito'
      }
    } catch (error) {
        navigate('/error');
    }
    response_status = response.status
    return {
        response_status,
        response_message,
        }
  }

export async function CreateRequest(values) {
    try {
      response = await axios.put('adopter/match', values);
      console.log(response)
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