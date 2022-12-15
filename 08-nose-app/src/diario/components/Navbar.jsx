import { AppBar, Avatar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";


export const Navbar = ({ drawerWidth = 280 }) => {
  return (
   <AppBar 
        position='fixed'
        sx={{ 
            width: { sm: `calc(100% - ${ drawerWidth }px)` },
            ml: { sm: `${ drawerWidth }px` }
         }}
    >
        <Toolbar>
            <IconButton
                 color="inherit"
                 edge="start"
                 sx={{ mr: 2, display: { sm: 'none'} }}
            >
                <MenuOutlined/>
            </IconButton>

            <Grid container direction='row' justifyContent='space-between' alignItems="center">
                <Typography variant="h6" noWrap component="div">Diario App </Typography>
                <IconButton color="error">
                    <LogoutOutlined/>
                    
                </IconButton>
            </Grid>

        </Toolbar>
   </AppBar>
  )
}
