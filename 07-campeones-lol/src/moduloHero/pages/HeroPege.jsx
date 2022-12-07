import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";


export const HeroPege = () => {

  const {id} = useParams();

  // para obtener campeon
  const hero = useMemo( ()=> getHeroById(id), [ id ]); 

  //volver a lapagina anterior
  const navigate = useNavigate();

  const volver = ()=>{
    navigate(-1)
  }

  //para quedarnos en la url establecida /marvel
  if (!hero){
    return  <Navigate to="/marvel" /> 
  }


  return (

    <div className="row mt-5 animate__animated animate__flipInX">
      <div className="col-4 ">
        <img 
          src={`/assets/heroes/${ id }.jpg`}
          alt={ hero.campeon }
          className="img-thumbnail"
        />
      </div>

      <div className="col-8 ">
        <h3> {hero.campeon} </h3>
        <ul className="list-group list-group-flush ">
          <li className="list-group-item"> {hero.alter_ego} </li>
          <li className="list-group-item"> {hero.publisher} </li>
          <li className="list-group-item text"> <p> {hero.description} </p> </li>
          <li className="list-group-item">  {hero.characters} </li>
          <li className="list-group-item">  {hero.first_appearance} </li>
        </ul>

        <button
           className="btn button"
           onClick={volver}
           >
            Regresar
        </button>

      </div>

    </div>
    
  )
}
