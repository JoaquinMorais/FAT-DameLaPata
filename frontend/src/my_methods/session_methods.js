let pages_array = ['']
let setting_array = ['']

export async function FetchNavbarItems() {
    var session = JSON.parse(sessionStorage.getItem('user_id'));
    console.log(session)
    if(session !== null){
      pages_array = ['algo']

    }
    else{
      pages_array = ['Inicio', 'Quienes Somos']
      setting_array = ['Iniciar Sesion', 'Crear Cuenta']
    }
    return{
      pages_array: pages_array,
      setting_array: setting_array,
    }
  };
