import React, { useState, useEffect } from 'react';

const Phrase = () => {
  // Lista de frases
  const frases = [
    "'Un perro es la única cosa en la Tierra que te amará más de lo que tú te amas a ti mismo.' (Josh Billings)",
    "'El dinero puede comprarte un lindo perrito, pero no puede comprar que sacuda su cola.' (Henry Wheeler Shaw)",
    "'Los perros no son toda tu vida, pero hacen tu vida completa.' (Roger Caras)",
    "'Hasta que uno no ha amado a un animal, parte de su alma permanece dormida.' (France, Anatole)",
    "'Todo el conocimiento, la totalidad de preguntas y respuestas se encuentran en el perro.' (Franz Kafka)",
    "'Se puede vivir sin perro, pero no merece la pena.' (Heinz Rühmann)",
    "'La unión con un perro es de las cosas más duraderas en el mundo.' (Konrad Lorenz)",
    "'Los perros solo necesitan amor y a ti, eso es todo.' (Jennifer Westfeldt)",
    "'Mis perros han sido la razón por la que he despertado todos los días de mi vida con una sonrisa en mi cara.' (Jennifer Skiff)"
  ];

  // Estado para almacenar la frase actual
  const [fraseActual, setFraseActual] = useState('');

  // Función para obtener una frase aleatoria
  const obtenerFrase = () => {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    return frases[indiceAleatorio];
  };

  // UseEffect para actualizar la frase cada vez que se monta el componente
  useEffect(() => {
    setFraseActual(obtenerFrase());
  }, []);

  return (
    <div>
      <p>{fraseActual}</p>
    </div>
  );
};

export default Phrase;