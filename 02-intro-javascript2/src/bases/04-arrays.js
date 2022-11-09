// ARREGLOS 

//forma de arreglo NO RECOMENDABLE
//const arreglo = new Array(100);
//reglo.push(1) y no es recomendable tamopco el push    //paqra agregar una adicional
//console.log( arreglo);

const arreglo = [1,2,3,4];
// arreglo.push(1)
// arreglo.push(2)  //NO USAR  PUSH
// arreglo.push(3)
// arreglo.push(4)

let arreglo2 = [ ...arreglo, 5,6,7];
// arregtlo2.push(5);

//fuction collback
 const arreglo3 = arreglo2.map( function(numero){
    return numero * 2;
 });

console.log( arreglo);
console.log( arreglo2);
console.log( arreglo3);