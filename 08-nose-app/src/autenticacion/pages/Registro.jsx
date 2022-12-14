import { Link as RouterLink } from "react-router-dom";

import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";


export const Registro = () => {
  return (

    <AuthLayout title="Crear Cuenta">
        <form>
            <Grid container> {/* inicio container grid */}
                  <Grid item xs={12} sx={{ mt: 2}}>{/*en pantallas grandes usamos md*/}
                      <TextField 
                        label="Nombre Completo" 
                        type="text" 
                        placeholder="Tu Nombre"
                        fullWidth /* para tomar todo el ancho */
                        />
                  </Grid>
                  <Grid item xs={12} sx={{ mt: 2}}>{/*en pantallas grandes usamos md*/}
                      <TextField 
                        label="correo" 
                        type="email" 
                        placeholder="correo@gmail.com"
                        fullWidth /* para tomar todo el ancho */
                        />
                  </Grid>
                  <Grid item xs={12} sx={{ mt: 2}}>
                      <TextField 
                        label="contraseña" 
                        type="password" 
                        placeholder="contraseña"
                        fullWidth /* para tomar todo el ancho */
                        />
                  </Grid>

                  <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                      <Grid item xs={12}>
                          <Button variant="contained"
                          fullWidth
                          >
                            Crear Cuenta
                          </Button>
                      </Grid>
                  </Grid>
                  {/* para ir a la enpoint de registro */}
                  <Grid container direction="row" justifyContent="end"> {/* para utilizar flexbox */}
                         {/* importar link, ESTILO DEL LINK: */}
                          <Typography sx={{mr: 2}}>¿Ya tienes Cuenta?</Typography>
                          <Link component={RouterLink} color="inherit" to="/auth/login">
                             Ingresar
                          </Link>
                  </Grid>
            </Grid> {/* fin container grid */}
        </form>
    </AuthLayout>
        
      


  )
}

