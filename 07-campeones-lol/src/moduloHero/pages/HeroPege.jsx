import { useParams } from "react-router-dom"
import { getHeroById } from "../helpers";


export const HeroPege = () => {

  const {id} = useParams();

  // para obtener campeon
  const hero = getHeroById(id);
 


  return (
    <>
    
    <h1>{ hero.campeon} </h1>
    
    
    </>
  )
}
