import React from 'react'
import TitleFile from '../components/Who/Title'
import Left from '../components/Who/Left'
import Cards from '../components/Who/Cards'
import History from '../components/Who/History'


function Who() {
  return (
    <>
        <TitleFile/>
        <Left
          text={'Somos un grupo comprometido de estudiantes y amantes de los animales del Instituto Tecnico Salesiano Villada. Nuestro propósito es brindarles una oportunidad de encontrar un hogar responsable. Creemos firmemente que cada perro merece una segunda oportunidad y el cariño incondicional de una familia. Por ello, hemos creado esta plataforma para conectar a perros rescatados con personas que estén dispuestas a darles un hogar lleno de amor.'}
          imageUrl={'https://images.ecestaticos.com/jLESCdMEXIc9qGG2FOpA1NP4H1w=/0x0:2121x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fba6%2F896%2Ff44%2Fba6896f446572c38b60115e358ae8ccb.jpg'}
        />
        <History/>
        <Cards/>
    </>
  )
}

export default Who