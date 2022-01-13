import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'#FDB035',boxShadow:'0px 5px 5px #CCCCCC'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <HomeIcon /> 
          </IconButton>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
         
          </Typography>
          <IconButton
            edge="End"
            color="inherit"
          >
            <AccountCircle /> 
          </IconButton>
          <Button
            edge="End"
            color="inherit"
          >
            Login
              </Button> |
              <Button
            edge="End"
            color="inherit"
          >
            Sign up
              </Button>
        </Toolbar>
      </AppBar>
      <br></br>
    </Box>
    
  );
}
