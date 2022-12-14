import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";


export const Login = () => {
  return (

    <AuthLayout title="Login">
        <form>
            <Grid container> {/* inicio container grid */}
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
                      <Grid item xs={12} sm={6}>
                          <Button variant="contained"
                          fullWidth
                          >
                            Login
                          </Button>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                          <Button variant="contained"
                          fullWidth
                          >
                           <Google/>
                           <Typography sx={{ ml: 1 }}>Google</Typography>
                          </Button>
                      </Grid>
                  </Grid>
                  {/* para ir a la enpoint de registro */}
                  <Grid container direction="row" justifyContent="end"> {/* para utilizar flexbox */}
                         {/* importar link, ESTILO DEL LINK: */}
                          <Link component={RouterLink} color="inherit" to="/auth/registro">
                             Crear una Cuneta
                          </Link>
                  </Grid>
            </Grid> {/* fin container grid */}
        </form>
    </AuthLayout>
        
      


  )
}
