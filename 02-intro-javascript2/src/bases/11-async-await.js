



     // ASYNC Y  AWAIT.
     // VAN MUCHO DE LA MANO Y SE TRABAJAN CON LAS PROMISES.

//simplificacion de una funcion y promesa normal usan do el async
const getImagen = async() => {

    try{
        //DEFINIMOS CONSTANTE APIKEY.
        const apiKey = '424Su1LqwkGBg7OqKM2G0iPL2CT0GhE6';
        //PETICION HTTP(FETCH)
        const respuesta =  await fetch(`https://api.giphy.com/v1/gifs/random?api_key=424Su1LqwkGBg7OqKM2G0iPL2CT0GhE6# ${ apiKey}`);
        //coin los awaits volvemos el codigo sincrono.
        const {data} = await respuesta.json()

        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img ); 
    }catch (error) {
        //manejo del error.
        console.error(error);
    }
   
    
}

getImagen().then( );

// .catch( console.warn );                                                             
                                    
 // .then( ({data}) => {
    //     //llamando al body la imagen.
    //     const {url} = data.images.original; 
    //     const img = document.createElement('img'); 
    //     img.src = url;
    //     document.body.append( img );  
    // })