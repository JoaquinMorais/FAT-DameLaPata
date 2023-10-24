import axios from "./base_axios";
let response;

export async function GetAllColors(){
  try{
    response = await axios.get('pets/info/colors')
    return{
      data : response.data 
    }
  }
  catch(error){
    console.log(error)
  }
}

export async function GetAllCharacteristics(){
  try{
    response = await axios.get('pets/info/characteristics')
    return{
      data : response.data 
    }
  }
  catch(error){
    console.log(error)
  }
}

export async function GetAllSizes(){
  try{
    response = await axios.get('pets/info/sizes')
    return{
      data : response.data 
    }
  }
  catch(error){
    console.log(error)
  }
}

export async function GetAllCategories(){
  try{
    response = await axios.get('pets/info/category-characteristics')
    return{
      data : response.data 
    }
  }
  catch(error){
    console.log(error)
  }
}