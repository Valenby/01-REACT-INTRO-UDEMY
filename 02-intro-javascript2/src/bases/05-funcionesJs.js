

// FUNCIONES JAVASCRIPT

// funcion normal 
// const saludar = function( nombre){
//     return `Hola, ${ nombre }`;
// };


//funcion flecha
const saludar2 = ( nombre) =>{
    return `Hola, ${ nombre}`
};

//simplificada
const saludar3 = ( nombre) => `Hola, ${ nombre}`;
const saludar4 = () => `Hola, mundo`;


console.log( saludar2('miguel'));
console.log( saludar3 ('valen'));
console.log( saludar4());


 
// const getuser = () =>{
//     return {
//         uid: 'ABC123',
//         username: 'camile'
//     }
// }

//asi mostramos que es un objeto
const getuser = () =>({
        uid: 'ABC123',
        username: 'camile'
});

const user =  getuser();
console.log( user);

//ejercicio:
// 1.  tranformar a una funcion de flecha
// 2.  tiene que retornar un objeto explicito
// 3.  probarla


// function  getUsuarioActivo( nombre ){
//     return {
//         uid: 'ABC12345',
//         username: nombre
//     }
// };


// 1, FUNCION FLECHA
const getUsuarioActivo = ( nombre ) => ({
        uid: 'ABC12345',
        username: nombre
});
// 2. RETURN OBJETO EXPLICITO
const getUsuarioActivo2 = {getUsuarioActivo};
getUsuarioActivo2.uid = 'abc123456';
getUsuarioActivo2.username = 'peticolindo';


const userActivo = getUsuarioActivo( 'valnlolcito123');
console.log( userActivo);

console.log( getUsuarioActivo2 );
 




