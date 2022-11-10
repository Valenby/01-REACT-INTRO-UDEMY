//con el render importamos testyin react
import { render } from '@testing-library/react';
import { FirstApp } from '../FirstApp'; //componente que estamos evaluando


describe('Pruebas en <FirstApp/>', () => { 

    //si algo cambia la purueba falla.
   //  test('debe de hacer match con el snapshot', () => { 

   //      const title = 'Hola,Soy teemo'
   //      //renderiza el componente en memoria
   //      const {container} = render(<FirstApp title={title} />) //sujeto de pruebas
        
   //      expect( container).toMatchSnapshot();
   //   })

     test('debe mostrar el titulo en h1', () => { 

        const title = 'Hola,Soy teemo'
        const {container, getByAltText} = render(<FirstApp title={title} />)
        expect( getByAltText(title) ).toBeTruthy();
     })
})