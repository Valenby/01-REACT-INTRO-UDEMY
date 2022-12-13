import { Navigate, Route, Routes } from "react-router-dom"
import { Diario } from "../pages/Diario"

//Rutas Hijas
export const RutasDiario = () => {
  return (
    <Routes>

        <Route path="/" element={<Diario/>} />

        <Route path="/*" element={<Navigate to="/" />} />

    </Routes>
  )
}
