import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";


export const HeroPege = () => {

  const {id} = useParams();

  // para obtener campeon
  const hero = getHeroById(id);
 
  if (!hero){
    return  <Navigate to="/marvel" /> 
  }


  return (

    <div className="row mt-5">
      <div className="col-4">
        <img 
          src={`/assets/heroes/${ id }.jpg`}
          alt={ hero.campeon }
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3> {hero.campeon} </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>El es:</b> {hero.alter_ego} </li>
          <li className="list-group-item"> <b>Linea:</b> {hero.publisher} </li>
          <li className="list-group-item"> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam harum placeat doloribus quidem maiores iste aliquam cumque enim explicabo repellendus reiciendis ut mollitia praesentium quis totam, temporibus voluptatibus obcaecati ipsam.</p> </li>
          <li className="list-group-item">  {hero.characters} </li>
          <li className="list-group-item">  {hero.first_appearance} </li>
        </ul>
      </div>

    </div>
    
  )
}
