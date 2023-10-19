import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Fade from 'react-reveal/Fade';


function PetContent() {
    const { id } = useParams();
    const [responseData, setResponseData] = useState(null); // Agrega el estado para la respuesta de axios


    useEffect(() => {
        async function fetchData() {
        try {
            const response = await axios.get(`http://localhost:5000/pet/${id}`);
            setResponseData(response.data);
        } catch (error) {
            console.error('Error al realizar la solicitud:', error.message);
        }
        }
        
        fetchData();
    }, []);

  /* ------------------------------------ */

    const [selectedColors, setSelectedColors] = useState([]);
    const [responseDataColors, setresponseDataColors] = useState(null); // Agrega el estado para la respuesta de axios

    useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/pets/info/colors'); 
        setresponseDataColors(response.data);
      } catch (error) {
        console.error('Error al realizar la solicitud:', error.message);
      }
    }
    
    fetchData(); // Llama a la función fetchData para obtener los datos
    }, []);

  /* ------------------------------------ */

  const ifGuion = (mylist,element) => {
    if(mylist[mylist.length - 1] === element){
      return ''
    }
    return ' - '
  }

  /* ------------------------------------ */

  const [availablePetIds, setAvailablePetIds] = useState([]);

  // Obtener lista de IDs disponibles (excluyendo el ID actual)
  useEffect(() => {
    async function fetchAvailablePetIds() {
      try {
        const response = await axios.get('http://localhost:5000/adopter/match');
        const availableIds = response.data.filter((id_pet) => id_pet !== id);
        setAvailablePetIds(availableIds);
      } catch (error) {
        console.error('Error al obtener los IDs disponibles:', error.message);
      }
    }
    fetchAvailablePetIds();
  }, [id]);

  /* ------------------------------------ */

  const calcularEdad = () => {
    if (responseData?.response.birth_date) {
        const fechaNacimiento = new Date(responseData?.response.birth_date);
        const fechaHoy = new Date();
        const diferenciaMilisegundos = fechaHoy - fechaNacimiento;
        const edadPerro = Math.floor(diferenciaMilisegundos / (365.25 * 24 * 60 * 60 * 1000));
        return `${edadPerro} años`;
    }
    return '';
};

/* ------------------------------------ */

const navigate = useNavigate();

// const handlePerroSiClick = async () => {
//   try {
//     if (availablePetIds.length === 0) {
//       // No hay más perros disponibles para mostrar
//       console.log('availablePetIds:', availablePetIds);
//       alert('No hay más perros disponibles.');
//       return;
//     }

//     // Generar un número aleatorio basado en la lista de IDs disponibles
//     const randomIndex = Math.floor(Math.random() * availablePetIds.length);
//     const randomPetId = availablePetIds[randomIndex];

//     const estado = {
//       id_pet: randomPetId,
//       id_status: 3,
//     };

//     const response = await axios.put('http://localhost:5000/adopter/match', estado);
//     console.log('Respuesta del servidor:', response.data);

//     // Redireccionar a la página de detalles del perro seleccionado aleatoriamente
//     navigate(`/pet/details/${randomPetId}`);
//   } catch (error) {
//     console.error('Error al realizar la solicitud:', error.message);
//   }
// };

/* ------------------------------------ */

const estado = {
  id_pet: parseInt(id),
  id_status: 4,
}
console.log(estado);

const handlePerroNoClick = async () => {
  try{
    const response = axios.put('http://localhost:5000/adopter/match', estado);
  }
  catch{
    alert("no");
  }
}

//   try {
//     if (availablePetIds.length === 0) {
//       // No hay más perros disponibles para mostrar
//       console.log('availablePetIds:', availablePetIds);
//       alert('No hay más perros disponibles.');
//       return;
//     }

//     // Generar un número aleatorio basado en la lista de IDs disponibles
//     const randomIndex = Math.floor(Math.random() * availablePetIds.length);
//     const randomPetId = availablePetIds[randomIndex];

//     const estado = {
//       id_pet: randomPetId,
//       id_status: 4,
//     };

//     const response = await axios.put('http://localhost:5000/adopter/match', estado);
//     console.log('Respuesta del servidor:', response.data);

//     // Redireccionar a la página de detalles del perro seleccionado aleatoriamente
//     navigate(`/pet/details/${randomPetId}`);
//   } catch (error) {
//     console.error('Error al realizar la solicitud:', error.message);
//   }
// };

/* ------------------------------------ */

const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};


  return (
    
    <Container>
            <Fade>
              <Div1>
                <Titulo2>Nombre</Titulo2>
                <Caracteristicas>{`${responseData?.response.name}`}</Caracteristicas>
              </Div1>
            </Fade>
              
            <Fade>
              <Div2>
                <Titulo2>Nacimiento</Titulo2>
                <Caracteristicas>{`${responseData?.response.birth_date}`}</Caracteristicas>
              </Div2>
            </Fade>

            <Fade>
              <Div3>
                <Titulo2>Tamaño y peso</Titulo2>
                <Caracteristicas>{`${responseData?.response.size}`} - {`${responseData?.response.weight}`}kg</Caracteristicas>
              </Div3>
            </Fade>
            
            <Fade>
              <Div4>
                <Titulo2>Color/es</Titulo2>
                <Caracteristicas>
                  {responseData?.response.colors.map(color => (
                    <span key={color.id_color}>{color.title} {ifGuion(responseData?.response.colors,color)}</span>

                  ))}
                </Caracteristicas>
              </Div4>
            </Fade>

            <Fade>
              <Div5>
                <Titulo2>Caracteristica/s</Titulo2>
                <Caracteristicas>
                  {responseData?.response.characteristics.map(carac => (
                    <span key={carac.id_category}>{carac.title} {ifGuion(responseData?.response.characteristics,carac)} </span>
                  ))}
                </Caracteristicas>
              </Div5>
            </Fade>
              
            <Fade>
              <Div6>
                <Titulo2>Vacunas</Titulo2>
                <Caracteristicas>Consultar</Caracteristicas>
              </Div6>
            </Fade>        
    </Container>
  )
}

export default PetContent

const Container = styled.div`
    width: 100%;
    text-align: left;
    color: white;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const Titulo2 = styled.h2`
    color: black;
    text-transform: uppercase;
    font-style: italic;
    padding: 20px 15px 0 15px;
    margin-bottom: 10px;
`;

const Caracteristicas = styled.p`
    font-size: 18px;
    color: black;
    padding: 0px 15px 20px 15px;
    word-wrap: break-word;
`;

const Div1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffc0ad;
`;

const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffb199;
`;

const Div3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffa185;
`;

const Div4 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ff9270;
`;

const Div5 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ff825c;
`;

const Div6 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ff7247;
`;
