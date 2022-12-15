import { Grid, Typography } from "@mui/material";
import { StarOutline } from "@mui/icons-material";



//este componente significa, que se mostrara cuando no hay nada seleccionado 
export const NothingSelectedView = () => {
  return (

    <Grid
        container
        spacing={ 0 }
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: 'calc( 100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 2.5}}
    >
    
        <Grid item xs={ 12 }>
            <StarOutline sx={{ fontSize: 100, color: 'black' }} />
        </Grid>
        <Grid item xs={ 12 }>
            <Typography color="black" variant="h5" >En que podemosa yudarte?</Typography>
        </Grid>

        </Grid>
  
  )
}
