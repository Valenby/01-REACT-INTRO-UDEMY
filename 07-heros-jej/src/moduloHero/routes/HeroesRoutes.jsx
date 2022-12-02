import { Navigate, Route, Routes } from "react-router-dom"

import { DcPage, HeroPege, MarvelPages, SearchPages } from "../pages"
//components de modulo iu-interfazGrafica en las peges.
import { Navbar } from "../../iu-interfazGrafica/components/Navbar"


//componente  rutas 
export const HeroesRoutes = () => {
  return (
   <>
   
   <Navbar/>

    <div className="container">
        <Routes>
             <Route path="marvel" element={ <MarvelPages/> } />
                <Route path="dc" element={ <DcPage/> } />

                <Route path="search" element={ <SearchPages/> } />
                <Route path="hero" element={ <HeroPege/> } />

               
                {/* path donde queremos que se renderice nuestra primer vista */}
            <Route path="/" element={ <Navigate to="/marvel" /> } />
        </Routes>
    </div>
   
   </>
  )
}
