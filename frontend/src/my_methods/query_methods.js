import axios from "axios";
import { useNavigate } from "react-router-dom";

async function GetPreference() {
  const navigate = useNavigate();

  try {
    const response_color = await axios.get('http://localhost:5000/adopter/tastes/colors', '');
    const response_size = await axios.get('http://localhost:5000/adopter/tastes/sizes', '');

    if (response_color.data.status === 402 || response_size.data.status === 402) {
      // Manejar el error 402 y redirigir a la página de error
      navigate('/error');
      return { colors_array: [], sizes_array: [] };
    }

    if (response_color.data.status === 200) {
      const colors_array = response_color.data.colors;
      console.log('Colores:', colors_array);
    }

    if (response_size.data.status === 200) {
      const sizes_array = response_size.data.sizes;
      console.log('Tamaños:', sizes_array);
    }

    return {
      colors_array: colors_array || [],
      sizes_array: sizes_array || [],
    };
  } catch (error) {
    console.error('Error al realizar la solicitud:', error.message);
    // Manejar otros errores si es necesario
    navigate('/error');
    return { colors_array: [], sizes_array: [] };
  }
}

export default GetPreference;
