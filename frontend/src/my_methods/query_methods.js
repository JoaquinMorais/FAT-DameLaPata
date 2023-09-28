import axios from "axios";
import { Navigate } from "react-router";



let colors_array = ['']
let sizes_array = ['']

export async function GetPreference() {
    try {
      const response_color = await axios.get('http://localhost:5000/adopter/tastes/colors', '');
      const response_size = await axios.get('http://localhost:5000/adopter/tastes/sizes', '');

      if (response_color.data['status'] === 402){
        console.log(response_color);
        <Navigate path='/error'/>
      }
      else if(response_color.data['status'] === 200){
        colors_array = response_color.data.colors;
        response_color = console.log(response_color);
        console.log(response_color);

      }
      if (response_size.data['status'] === 402){
        console.log(response_size);
        <Navigate path='/error'/>
      }
      else if(response_size.data['status'] === 200){
        sizes_array = response_size.data.sizes;
        response_size = console.log(response_size);
        console.log(response_size);
      }
    } 
    
    catch (error) {
      console.error('Error al realizar la solicitud:', error.message);
    }

    return{
      colors_array: colors_array,
      sizes_array: sizes_array
    }
}