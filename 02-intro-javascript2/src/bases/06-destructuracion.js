

//DESTRUCTURACION:

//destrucrturamos a los objetos literarios:

const persona = {
    nombre: 'shaggy',
    edad: '19',
    clave: 'holliwod123'
};

//forma correcta de destructuracion:( sirve para optimizar el console.log)
//const { nombre, edad, clave} = persona;
// console.log( nombre);
// console.log( edad);   
// console.log( clave);
// EXTRAEMOS mas facil los datos sin el .


// console.log(  persona.nombre);
// console.log(  persona.edad);  //FORMA TRADICIONAL
// console.log(  persona.clave);


const useContext = ( { clave, nombre, edad, rango='polita12',}) => { //const retornaPersona = ( usuario ) =>
    // const { nombre, edad, apellido} = usuario;
    // console.log( nombre, edad, rango);
    return{
        nombreClave: clave,
        anios: edad, 
        latlng: {
            lat: 13.34344,
            lng: 12.34532
        }
    }
}

//destructuracion del argumento(usuario)


const { nombreClave, anios, latlng:{lat,  lng} } = useContext ( persona );
//destructuracion echa por mi.
// const { nombreClave, anios } = productoDeFuncion;

console.log( nombreClave, anios);
console.log( lat, lng);