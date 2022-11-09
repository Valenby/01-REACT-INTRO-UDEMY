

      // PROMISES= PROMSESAS:


//importacion desde la clase 08-export-import...
import getHeroeById from "./bases/08-import-export";
import heroes from "./data/heroes";
//getHeroesById



// const promesa = new Promise((resolve, reject) => {
    
//     setTimeout( () => {                                   // funcion que permite ejecutar una taea en cierto tiempo
//         const heorep1 = getHeroeById(2);
//         reject(heorep1);
//          // reject('no se encontro heroe'); 
//     }, 2000 )                                            // y recive un collback.

// });

// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// })                                                       //otro metodo y taambien recivimos un collback

//para manejar error.
// .catch( error => console.warn(error));


const getHeroeByIdAsync = ( id ) => {
    return new Promise((resolve, reject) => {                 //nueva promesa para mandar arguentos de tla tabla heroe
        setTimeout( () => {                                   // funcion que permite ejecutar una taea en cierto tiempo
            const heorep1 = getHeroeById(id);
                if (heorep1)  {
                    resolve(heorep1); 
                }else {
                    reject('no se encontro un heroe');
                }
        }, 2000 )                                            // y recive un collback.
    });  
}

getHeroeByIdAsync(1)
    .then( console.log )
    .catch( console.warn );

    //.then( heroe => console.log('heroe', heroe))
    //.catch( error =>  console.warn(error));










