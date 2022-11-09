


//DESTRUCTURACION DE ARREGLOS:

const personajes = ['teemo', 'missFortune', 'lux'];
const [ , , p3  ] = personajes;
console.log( p3 );


//funcion
const retornaArreglo = () =>{
    return ['ABC', 123];
}

//destructuracion(extracion)
const [letras, numeros] = retornaArreglo();
console.log( letras, numeros );


//tarea
// 1. el primer valor de arr se llamara nombre
// 2. se llamara setNombre
//funcion ue va a retornar un arrelo
const useState = ( valor) =>{
    return [ valor, ()=>{ console.log('holi mundo') } ]; //linea del arreglo
}

//desestructuramos con llaves uwu:
const [nombre, setNombre] = useState('viendoSifunciona');
console.log( nombre); // imprimimos el pirmero que seria valor pero lo definimos con nombre.
setNombre(); //mandamos a llamar el segundo valor del arreglo useSate

