//con las proptypes definimos el tipo de estas
import PropTypes from 'prop-types';

//componente hijo de props; del <ReactStricModo-main.jsx>
//destructuramos el title de las props de chrome.
export const FirstApp = ( {title, subTitle, name}) => {   //propiedades

  

  return (
    <> 
    {/* imprimimos el title, desde el navChrom*/}
      <div data-testid="test-title"> {title} </div>
      {/*<code>{ JSON.stringify (newMessage)}</code>*/}
      <p>{subTitle}</p>
      <p>{name}</p>

      {/* contenedor padre */}
    
    
        
</>
  )
}

//configuraciones a nuestros componentes(siempre al final)

//definir los tipos props
FirstApp.propTypes = {
  title: PropTypes.string.isRequired, 
  subTitle: PropTypes.string               //.isRequired
}
// no es obligatorio definirlos...
FirstApp.defaultProps = {
  name: 'valentin jeje',
  subTitle: 'no hay subtitulo',
  title: 'no hay titulo' ,
}
