import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";



describe('Prubas en 08-imp-exp', () => {


    test('getHeroeById debe de retonar un heroe por id', () => {

            const id = 1;
            const hero = getHeroeById(id);
            console.log(hero);

            expect( hero).toEqual({ id: 1, name: 'Batman', owner:'DC'})
    })

    test('getHeroeById debe de retonar un undefined si no existe', () => {

        const id = 100;
        const hero = getHeroeById(id);
        console.log(hero);

    })

    test('getHeroesByOwner debe de retonar un arreglo con los heroes de DC', () => {

        const owner = 'DC';
        const hero2 = getHeroesByOwner(owner);
        console.log(hero2);

        expect( hero2.length ).toBe( 3);

        expect( hero2 ).toEqual([
            {id: 1, name: 'Batman', owner: 'DC'},
            {id: 3, name: 'Superman', owner: 'DC'},
            {id: 4, name: 'Flash', owner: 'DC'} 
        ]);
    })

    test('getHeroesByOwner debe de retonar un arreglo con los heroes de Marvel', () => {

        const owner = 'Marvel';
        const hero2 = getHeroesByOwner(owner);
        console.log(hero2);

        expect( hero2.length ).toBe( 2);
        expect( hero2 ).toEqual( hero2.filter( (heroe)=> heroe.owner === owner ));
    })


 })