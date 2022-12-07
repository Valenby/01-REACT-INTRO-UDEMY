import { useForm } from "../../hook/useForm";
import { HeroCard } from "../components/index";


export const SearchPages = () => {

  // hook useForm
  const {searchText, onInputChange} = useForm({
    searchText: '',
  });

  //from onSubmit
  const onSearchSubmit = (event) =>{
    event.preventDefault();
    if ( searchText.trim().length <= 1 ) return;
    console.log({searchText});
  }

  return (
    <>
      <br/>
      <h1>Search</h1> 
      <hr />

    <div className="row">
      <div className="col-5">
          <h4>Ingresa Campeon</h4>
          <hr />
            <form onSubmit={onSearchSubmit}>
              <input 
                type="text"
                placeholder="Ingresa Personaje"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
              />
              <button className="btn button mt-3">
                Search
              </button>
            </form>
      </div>

     <br /> 
     <br />

      <div className="col-7">
        <h4>Resultado 7u7</h4>
        <hr />

        <div className="alert alert-primary">
          Search un campeon
        </div>

        <div className="alert alert-danger">
          No se encontraron resultados
        </div>

        {/* <HeroCard/> */}

      </div>
  </div>

    
    </>
  )
}
