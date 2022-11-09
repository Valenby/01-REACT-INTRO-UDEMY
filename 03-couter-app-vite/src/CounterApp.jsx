import PropTypes from 'prop-types'
//los hooks se importan de reat.
import { useState } from 'react';


const apiKey = '424Su1LqwkGBg7OqKM2G0iPL2CT0GhE6';
    const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=424Su1LqwkGBg7OqKM2G0iPL2CT0GhE6# ${ apiKey}`);
    peticion
    .then( respuesta => respuesta.json() )
    .then( ({ data }) => {     
        const {url} = data.images.original;
        const img = document.createElement('img'); 
        img.src = url;
        document.body.append( img );
    } )


//componenete
export const CounterApp = ({value}) => {

  



    //destructur.. //cambiarValor  //valor inicial del hooks
    const [ Counter, setCounter] =  useState(value);

    //hooks contador
    const handleApp = () =>{
        // console.log( event);
        setCounter( Counter + 1); //cuando mandamos a llamar el set. le decimos a react que el estado cambio
    } 
    const secondButton = () =>setCounter( Counter -1);
    const thirddButton = () =>setCounter( value);
    


  return (
    <>
    <h1>HOLA MUNDO </h1>
    <h2> { Counter }  </h2>

    <button onClick={ handleApp } > +1    </button>
    <button onClick={ secondButton } > --1   </button>
    <button onClick={ thirddButton } > reset </button>

    </>
)}

CounterApp.propTypes = {
    value: PropTypes.number
                
  }





















   // const apiKey = '424Su1LqwkGBg7OqKM2G0iPL2CT0GhE6';
    // const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=424Su1LqwkGBg7OqKM2G0iPL2CT0GhE6# ${ apiKey}`);
    // peticion
    // .then( respuesta => respuesta.json() )
    // .then( ({ data }) => {     
    //     const {url} = data.images.original;
    //     const img = document.createElement('img'); 
    //     img.src = url;
    //     document.body.append( img );
    // } )