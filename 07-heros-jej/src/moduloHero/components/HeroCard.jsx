

export const HeroCard = ({
        id,
        superhero, 
        publisher, 
        alter_ego,
        first_appearance,
        characters,
}) => {

    const heroImagerUrl = `/assets/heroes/${ id }.jpg`


  return (
   <div className="col">
      <div className="card">
          <div className="rew no-gutters">
              <div className="col-4">
                 <img src={heroImagerUrl} className="card-img" alt={ superhero }/>
              </div>
          </div>
      </div>

      <div className="col-8">
          <div className="card-body">
              <h5 className="card-title"> {superhero} </h5>
              <p className="card-text"> { alter_ego} </p>
              <p>{characters}</p>
          </div>
      </div>




   </div>
  )
}
