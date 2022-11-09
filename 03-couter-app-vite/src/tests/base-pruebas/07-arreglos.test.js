import { retornaArreglo } from "../../base-pruebas/07-deses-arr"




describe('Prueba en 07-arreglos', () => { 


    test('retornaArreglo debe retornar un string y un numero', ()=>{

        const  [ letras, typeor] = retornaArreglo();

        expect( letras).toBe( 'ABC');
        expect( numeros).toBe( 123);

        expect(typeof letras ).toBe( 'string');
        expect(typeof numeros ).toBe( 'numeros');
       
    })

})

