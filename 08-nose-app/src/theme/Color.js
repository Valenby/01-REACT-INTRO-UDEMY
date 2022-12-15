import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


// tiene un temapordefecto pero lo podemos modificar
export const Color = createTheme({
    palette: {
        primary:{
            main: '#d1c4e9'
        },
        secondary:{
            main: '#543884' /* C47AFF */
        },
        terceary:{
            main: '#558b2f'
        },
        error:{
            main: red.A400
        }
    }

}) 
 

