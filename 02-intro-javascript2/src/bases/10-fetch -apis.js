




const apiKey = '424Su1LqwkGBg7OqKM2G0iPL2CT0GhE6';

//funcionamiento del fetch api (esto tambien es una promesa)
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=424Su1LqwkGBg7OqKM2G0iPL2CT0GhE6# ${ apiKey}`);

//por lo tanto podemos imprimirla con el then.
//con esto optendriamos la peticion.
//codigo de encadenacion(promesas)
peticion
.then( respuesta => respuesta.json() )
.then( ({ data }) => {     //hacemos desestructuracion en data
    const {url} = data.images.original;  // destructuracion
    
    const img = document.createElement('img'); // creamos la imagen en el html
    img.src = url;

    document.body.append( img );

} )
.catch( console.warn );   //este catch atrapa todos                                                           
// json()metodo que retorna una promise que resuelve cualquier cosa(api)                                                        
// en caso de que no nos diera, podriamos arreglarlo con esta linea
// .catch(console.warn);



