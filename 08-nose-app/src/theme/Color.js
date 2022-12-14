import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


// tiene un temapordefecto pero lo podemos modificar
export const Color = createTheme({
    palette: {
        primary:{
            main: '#B1AFFF'
        },
        secondary:{
            main: '#543884' /* C47AFF */
        },
        error:{
            main: red.A400
        }
    }

}) 
 

