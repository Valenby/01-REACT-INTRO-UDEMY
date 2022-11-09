//con el render importamos testyin react
import { render } from '@testing-library/react';
import { FirstApp } from '../FirstApp'; //componente que estamos evaluando


describe('Pruebas en <FirstApp/>', () => { 

    //si algo cambia la purueba falla.
    test('debe de hacer match con el snapshot', () => { 

        //renderiza el componente en memoria
        render(<FirstApp/>) //sujeto de pruebas

     })

})