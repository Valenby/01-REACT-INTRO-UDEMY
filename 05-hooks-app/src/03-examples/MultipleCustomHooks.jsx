import { useFetch } from "../Hook/useFetch"

//componente
export const MultipleCustomHooks = () => {

    const {data, isloading, hasError} = useFetch('https://www.breakingbadapi.com/api/quotes/1')
    // console.log({data, isloading, hasError});


    // if ( isloading){
    //     return (
    //         <h1>cargando...</h1>
    //     )
    // }

  return (
    <>
    {/* sitio web  */}
    <h1>THE BREAKING BAD API</h1>
    <hr />

    {/* O perador ternario */}  {/* forma corta del if */}
    {
        isloading
        ? (  
            <div className="alert alert-info text-center ">
                 Loading...
            </div>
        )
        : (
            <blockquote className="blockquote text-end"> 
            <p className="mb-1">El Probema De Los Tres Cuerpos</p>
            <footer className="blockquote-footer">Cixin Liu</footer>
            </blockquote>
        )
    } {/* fin operador ternario(solo usarlo cuando hay pocas lineas de code) */}



    </>
  )
}
