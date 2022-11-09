



// OPERADOR CONDICIONAL TERNARIO:


// condicion normal:
const activo = true;
const activo2 = true;


// let mensaje = '';

// if (activo) {
//     mensaje= 'Activo';
// } else{
//     mensaje= 'Inactivo';
// }
// console.log(mensaje);


// condiconal con OPERADOR TERNARIO:
const mensaje  = (activo) ? 'Activo' : 'Inactivo';
//con el operador and(&&) es util para mostrar algo.
const mensaje2  = !activo2 && 'Activo';

console.log(mensaje);
console.log(mensaje2);