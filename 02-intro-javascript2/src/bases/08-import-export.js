  
  
//codigo para importar archivos de otras carpetas.
//  import { heroes } from './data/heroes'
//import {heroes} from './data/heroes' = (imp)

// import heroes, {owners} from "../data/heroes";
import heroes from "../data/heroes";

// import { heroes } from "./data/heroes"; = (heroes)


//  console.log( heroes );


// const getHeroeById = ( id ) =>{
//     return heroes.find(( heroe )=>{
//         if  ( heroe.id === id){
//             return true;
//         }else{
//             return false;
//         }
//     });
// }

const getHeroeById = ( id ) => heroes.find(( heroe )=> heroe.id === id);
        
// console.log( getHeroeById(2)); //imprime el dato que queremos mandar a llamar



 export const getHeoresByOwner = ( owner ) => heroes.filter(( heroe )=> heroe.owner === owner);

export  default getHeroeById;  
// console.log( getHeoresByOwner('DC') );  //linea de condicion que lee cual es el dueño de los heroes si dc o marvel