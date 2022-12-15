import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";

// import logo from '../img/logo.png';


export const SideBar = ({drawerWidth = 280}) => {
  return (
    <Box
        component='nav'
        sx={{ width: {sm: drawerWidth}, flexShrink: {sm: 0} }}
    >
        <Drawer
            variant="permanent"
            open
            sx={{
                display: { xs: 'block'},
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            <Toolbar>
                <Typography 
                    variant="h6" 
                    noWrap
                    component='div'
                >
                    Valentina Pulgarin
                </Typography>
            
                    {/* <img src={logo}/> */}
               
                <Divider/>
            </Toolbar>

            <List>
                {
                    ['Tulipanes', 'Girasoles', 'Pensamientos', 'Margarita', 'Dalia'].map( text =>(
                        <ListItem key={text} disablePadding>
                            <ListItemButton>

                                <ListItemIcon>
                                    <FavoriteBorder/>
                                </ListItemIcon>

                                <Grid container>
                                    <ListItemText primary={ text } />
                                    <ListItemText secondary={ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quia et labore eum porro soluta facilis doloribus, ipsum esse amet omnis fugit nam quibusdam voluptatum expedita dolorem, deleniti vel aspernatur.' } />
                                </Grid>

                            </ListItemButton>

                        </ListItem>
                    ))
                }
            </List>
        </Drawer>





    </Box>
  )
}
