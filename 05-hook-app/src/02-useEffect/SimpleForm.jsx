import { useEffect, useState } from "react"
import { Message } from "./Message";

//componente useEffect
export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'valenby',
        email: '30valenby@mail.com'
    });

    //establecemos los valores {destructurando}
    const { username, email } = formState;

    //para actuaiar valores de input
    const onInputChange = ({target})=>{ //destructuramos target de value
        const {name, value} = target; //de target destructuramos lo que necesitemos 
        setFormState({
            ...formState,  //destructuramos el formstaee
            [name]: value //establecemos las props que queremos en este caso es name
        });
    }


    //este recive una funcion colback como argumento
    useEffect(()=>{
        // console.log('useEffect inicial ');
    }, []); //dependencias(condiciones para que se dispare)

    //segundo efecto secundario(hacerlos todos por separado)
    useEffect(()=>{
        // console.log('useEffect cambio#2 ');
    }, [formState]);

    useEffect(()=>{
        // console.log('useEffect email#3');
    }, [email]);
  return (
    <>

    <h1>Simple Form</h1>
    <hr />

    <input type="text" 
    className="form-control"
    placeholder="Username"
    name="username"
    value={ username }
    onChange={ onInputChange } 
    />
    
    <input type="email" 
    className="form-control mt-2" //con el mt-2 btrap separamos los inputs
    placeholder="valen@gmail.com"
    name="email"
    value={ email }
    onChange={ onInputChange }
    />

    {
       ( username === 'valenby2') && <Message />
    }

    </>
  )
}
