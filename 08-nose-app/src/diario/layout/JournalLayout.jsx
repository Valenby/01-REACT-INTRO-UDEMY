import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { Navbar, SideBar } from "../components";

// para crear menu lateral
 const drawerWidth = 280;

// cualquier pantalla puede heredar todo lo que tiene este component
export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex' }}>

        {/* Navbar */}
        <Navbar  drawerWidth={drawerWidth}  />

        {/* Sildebar*/}
        <SideBar drawerWidth={drawerWidth}  />

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            <Toolbar/>
            {/* Toolbar */}
            {children}

        </Box>

    </Box>
  )
}
