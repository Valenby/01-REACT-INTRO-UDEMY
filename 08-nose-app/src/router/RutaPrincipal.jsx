//AppRouter siempre selellamaasi.

import { Route, Routes } from "react-router-dom";
import { AutenticacionRutas } from "../autenticacion/routes/AutenticacionRutas";
import { RutasDiario } from "../diario/routes/RutasDiario";

export const RutaPrincipal = () => {
  return (
    <Routes>

        {/* login y registro */}
        <Route path="/auth/*" element={ <AutenticacionRutas/>} />

        {/* toda la app de diario */}
        <Route path="/*" element={ <RutasDiario/>} />



    </Routes>
  )
}
