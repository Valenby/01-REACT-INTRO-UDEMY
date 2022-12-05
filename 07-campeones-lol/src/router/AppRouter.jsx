//dependencias react-router.
import {  Route, Routes } from "react-router-dom";
// rutas del components moduloHero.
import { HeroesRoutes } from "../moduloHero";
//components de moduloAuth en las peges.
import { LoginPage } from "../moduloAuth";



//componente rutas:
export const AppRouter = () => {

  return (
    <>
     

    <Routes>
  
        <Route path="login" element={ <LoginPage/> } />
        <Route path="/*" element={ <HeroesRoutes/> } /> {/* cualquier ruta que no sea el login pasa a esta */}
       
    </Routes>
    
    </>
  )
}
