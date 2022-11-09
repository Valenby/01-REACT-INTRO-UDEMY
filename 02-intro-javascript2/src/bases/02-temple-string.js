

const nombre = "valen";
const apellido = "pulga";

// const nombre2 = "olga";
// const apellido2 = "barco";

// linea de mala concatenacion
// const nombreCompleto = nombre + ' ' + apellido;

// const nombreCompleto = 'hola mundo' ; // forma correcta

const nombreCompleto = `${ nombre } ${ apellido}`;

//templete string
//se guardan los cambios de linea y se pueden poner expresiones solo de javascript
// const nombreCompleto2 = `
// ${ nombre2 }  
// ${ apellido2}
// ${ 1 + 1}
// `;

console.log( nombreCompleto );
// console.log( nombreCompleto2 );


// funcion getsaludo, en este mandamos argumentos
function getSaludo(nombre) {
    return 'Hola mundo '+ nombre;
}

console.log( `Este es un texto: ${ getSaludo(nombre) } `); //en el parametro (se pone la variable)