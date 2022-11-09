import { getImagen } from "../../base-pruebas/11-async-await"


describe('Prubeas en 11-async-await', () => { 
    
    test('getImagen debe retonar la url de la apikey ', async() => { 

        const url = await getImagen();
        expect( typeof url).toBe('string');

     })
})