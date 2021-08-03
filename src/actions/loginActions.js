import {types} from '../types/types'
export const loginActions = (email) =>{
    return{
        type:types.login,
        payload:{
            email
        }
    }
}


//Inicio de Seccion Con Google

export const loginGoogle = () =>{

    return (dispatch) =>{

     firebase.auth().signInWithPopup(google)
        .then(({user}) =>{
            console.log(user);
              dispatch(
                loginActions(user.email,user.pass)
                ) 
                alert(`Registro Exitoso con Google`)
        })
        .catch(e =>{
           console.log(e);
       })
    }
}

// Inicio de seccion con Email y Contraseña

export const loginEmailPass = (email,pass,location) =>{
    //devuelve un callback
     return (dispatch) =>{

        firebase.auth().signInWithEmailAndPassword(email,pass)
        .then(({user}) =>{
            if(user){
                dispatch(loginActions(user.email,user.pass)) 
                alert(`Inicio de Seccion con ${email}`)
            }
              
        })
        .catch(e =>{
            console.log(e);
             alert('Datos incorrectos');
        })
     }
}