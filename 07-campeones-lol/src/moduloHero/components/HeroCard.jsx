import { Link } from "react-router-dom"


export const HeroCard = ({
        id,
        campeon, 
        publisher, 
        alter_ego,
        first_appearance,
        characters,
}) => {

    const heroImagerUrl = `/assets/heroes/${ id }.jpg`


  return (
   <div className="col">
      <div className="card">
          <div className="row no-gutters">

              <div className="col-4 animate__animated animate__fadeIn">
                 <img  src={heroImagerUrl} className="card-img" alt={ campeon }/>
              </div>

                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title"> {campeon} </h5>
                         <p className="card-text"> {alter_ego} </p>
                        
                        {
                            (alter_ego !== characters ) && ( <p>{characters}</p>)
                        }

                        <p className="card-text">
                            <small className="text-muted"> {first_appearance} </small>
                        </p>

                       
                        <Link className="card-title " to={`/hero/${ id }`} >
                        Más...
                        </Link>
                       
                        
                    </div>
                </div>
          </div>
      </div>
   </div>
  )

}
