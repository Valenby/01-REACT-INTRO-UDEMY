import { Navigate, Route, Routes } from "react-router-dom";
import { Login, Registro } from "../pages";


export const AutenticacionRutas = () => {
  return (
   <Routes>

        <Route path="login" element={ <Login/> } />

        <Route path="registro" element={ <Registro/> } />

        <Route path="/*" element={ <Navigate to="/auth/login" /> } />


   </Routes>
  )
}
