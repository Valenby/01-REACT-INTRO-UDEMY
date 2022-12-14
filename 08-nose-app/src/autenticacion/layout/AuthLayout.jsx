// contenido espara reutilizar cosas del estilo

import { Grid, Typography } from "@mui/material"

//todas laspaginas que tengan este componente tendran TODOOO LO DE ESTE COMPONENT
export const AuthLayout = ({children, title = ""}) => {
  return (
    
    <Grid
    container
    spacing={ 0 }
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
    
      <Grid item
      className="box-shadow"
      xs={3} /*(tamaño de la caja)*/
      sx={{ 
        width: { md: 450 },
        backgroundColor: 'white',
        padding: 3, 
        borderRadius: 2  
        }}> {/* para dar estilo */}
        <Typography variant="h5" sx={{mb: 1}} > {title} </Typography>

        {/* aca van los hijo del children */}
        {children}

      </Grid>
    </Grid>
  
  )
}
