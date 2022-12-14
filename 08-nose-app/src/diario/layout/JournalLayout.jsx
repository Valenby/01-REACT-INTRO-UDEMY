import { Box } from "@mui/system"
import { Navbar } from "../components/Navbar";

// para crear menu lateral
 const drawerWidth = 240;

// cualquier pantalla puede heredar todo lo que tiene este component
export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex' }}>

        {/* Navbar */}
        <Navbar  drawerWidth={drawerWidth}  />

        {/* Sildebar drawerWidth */}

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3 }}
        >
            {/* Toolbar */}
            {children}

        </Box>

    </Box>
  )
}
