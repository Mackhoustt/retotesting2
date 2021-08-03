import React, {Component} from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Login extends Component {

    //Para cerrar la sesión.
    cerrarSesion=() =>{
        //Cuando se cierra sesión se borran los datos
        cookies.remove("id", {path:"/"});
        cookies.remove("primer_apellido", {path:"/"});
        cookies.remove("segundo_apellido", {path:"/"});
        cookies.remove("nombre", {path:"/"});
        cookies.remove("username", {path:"/"});
        window.location.href="./login";

    }

    render() { 
        console.log('id' + cookies.get('id'));
        console.log('primer_apellido' + cookies.get('primer_apellido'));
        console.log('segundo_apellido' + cookies.get('segundo_apellido'));
        console.log('nombre' + cookies.get('nombre'));
        console.log('username' + cookies.get('username'));

        return (
            <div>
                Hola soy el login

                <br/>
                <button type="button" onClick={() => this.cerrarSesion()} className="btn btn-outline-primary">Cerrar Sección</button>
            </div>




          );
    }
}
 
export default Login;