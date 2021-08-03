import {types} from '../types/types'
import { firebase , google} from '../firebase/firebaseConfig'
describe('Pruebas en <authReducer/>', () => {

    test('Debe retornar el estado por defecto ', () => {
        const loginActions = (email) =>{
    return{
        type:types.login,
        payload:{
            email='Mack'
        }
    }
    const state = loginActions({ logged: false }, action);
    expect(state).toEqual({ logged: true, name: 'Mack' })}
  
}
)})
