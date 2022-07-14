import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems, analystListItems} from './listItems';
import Button from '@mui/material/Button'
import { AccountCircle } from "@material-ui/icons"
import Copyright from "./default/Copyright"
import {Tooltip, Menu, MenuItem, MenuList, ListItem, ListItemIcon, ListItemText} from "@mui/material"
import AssignmentIcon from '@mui/icons-material/Assignment';

import {useState, useContext, useEffect} from "react"
import UserContext from "../context/UserContext"
import {useNavigate} from "react-router-dom"


//copyright here

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme({
  palette: {
    primary: {
      main: '#262629',
      contrastText: '#4154FF',
    }
  }
});

function DashboardContent({ component }) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };


  //User Menu
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const settings = [
  
  <Link to="/logout">Logout</Link>];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



              const createEvent = (severity, event, userEmail) => {

                let fetchEvent = fetch("http://localhost:3004/events/create", 
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        severity : severity, 
                        event: event, 
                        userEmail : userEmail
                      })
        
                })}

  //Context User

  const navigate = useNavigate();

  const {getUser, isLogged, logout, getRole} = useContext(UserContext);
  let result = isLogged();
  let user = getUser();
  let role = getRole();

  const logoutUser = () => {
    logout();
    createEvent("Informational", "Logout user", user.email)
    navigate("/");
    
  }

  const [review, setReview] = useState("0");

  const getReview = async () => {
      const response = await fetch("http://localhost:3004/investigation/toreview");
      const data = await response.json();
      //console.log("en getReview")
      //console.log(data.length)
      setReview(data.length);

  }

  useEffect(()=> {
    getReview();

  }, [review])
  

  const clicOnButton = () => {
    console.log("clic en el boton")
    navigate("/review");
  }
 

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Security Finance
            </Typography>
            
            <IconButton color="inherit" onClick={clicOnButton}>
              <Badge badgeContent={review} color="secondary">
                
                   <NotificationsIcon />
                
              </Badge>
            </IconButton>
            
            
            {console.log(result)}
            {result ? 
              
              <Button color="primary" onClick={logoutUser}>
                <Link to="/" style={{ textDecoration: 'none', color: "#4154FF"}}>Logout</Link>
            </Button>
            
               : 
            <div>
            <Button color="inherit">
              Login
            </Button>
            <Button color="inherit">
              Register
            </Button>
            </div>}

 

            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings"> 
                <IconButton aria-label="account" color="inherit" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <AccountCircle />
                </IconButton>
              </Tooltip>
              <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
             
                <MenuItem  onClick={handleCloseUserMenu}>
                     <Link to="/profile">Profile</Link> 
                  
                </MenuItem>
                

                <Typography textAlign="center"></Typography>
              
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to="/logout">
                  <Typography textAlign="center">Logout</Typography>
                  </Link>
                </MenuItem>
                
            </Menu>



            </Box>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open} PaperProps={{
          sx: {
            backgroundColor: "#262629",
          }
        }}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
              backgroundColor: "#262629",
              color: "#4154FF"
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>

          <Divider />

          {
          ((role == "analista") || (role == "admin") || (role == "investigador"))
          
          ? 

            <div>
              <Typography
                component="h5"
                variant="h6"
                sx={{
                  backgroundColor: "#262629",
                  color: "#4154FF",
                  marginLeft:1,
                }}
              >
                User
              </Typography>
              <List sx={{
                backgroundColor: "#262629",
                color: "#4154FF"
              }}>{mainListItems}</List>
              <Divider />
            </div>
            : ""}

          
          {((role == "analista") || (role == "admin"))
          
                ? 
                  <div>
                      <Typography 
                      component="h5"
                      variant="h6"
                      sx={{
                        backgroundColor: "#262629",
                        color: "#4154FF",
                        marginLeft:1,
                      }}>
                      Analyst
                      </Typography>
                      <List sx={{
                        backgroundColor: "#262629",
                        color: "#4154FF"
                      }}>{analystListItems}</List>
                      <Divider />
                      </div>

                  : ""}

          {console.log(role)}
          {role == "admin" ? 
          <div> 
          <Typography
            component="h5"
            variant="h6"
            sx={{
              backgroundColor: "#262629",
              color: "#4154FF", 
              marginLeft:1,
            }}
          >
  
            Admin
          </Typography>
          <List sx={{
            backgroundColor: "#262629",
            color: "#4154FF"
          }}>
            {secondaryListItems}</List>
            </div>

            : null
            }
           
  
                

        </Drawer>

        <Box
          component="main"

          sx={{

            //container color
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',

            overflow: 'auto',
          }}
        >

          <Toolbar />



          {component}



        </Box>

      </Box>
      <Copyright sx={{
        pt: 4, backgroundColor: "#262629",
        color: "#4154FF", position: "fixed", left: 0, bottom: 0, right: 0,
      }} />

    </ThemeProvider>
  );
}

export default function Dashboard({ component }) {
  return <DashboardContent component={component} />;
}
