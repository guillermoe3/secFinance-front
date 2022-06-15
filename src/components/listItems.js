import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import CampaignIcon from '@mui/icons-material/Campaign';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {Link} from "react-router-dom"
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';


const customTheme = createTheme({
  textDecoration: 'none',
  
});

export const mainListItems = (
  <div>
   <Link to="/home" style={{ textDecoration: 'none', color: "#4154FF"}}>
    <ListItem button>
    
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      
      <ListItemText primary="Home" />
      
    </ListItem>
    </Link>


    
    <Link to="/investigation" style={{ textDecoration: 'none', color: "#4154FF"}}>
        <ListItem button>
        <ListItemIcon>
          <ManageSearchIcon />
        </ListItemIcon>
          <ListItemText primary="Investigaciones" />
          </ListItem>
      </Link>

      <Link to="/alerts" style={{ textDecoration: 'none', color: "#4154FF"}}>
    <ListItem button>
      <ListItemIcon>
        <CampaignIcon />
      </ListItemIcon>
      <ListItemText primary="Alertas" />
    </ListItem>
    </Link>

    <Link to="/business" style={{ textDecoration: 'none', color: "#4154FF"}}> 
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      
      <ListItemText primary="Mi Empresa" />
     
    </ListItem>
    </Link>

    <Link to="/alerts" style={{ textDecoration: 'none', color: "#4154FF"}}>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Menu4" />
    </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset sx={{backgroundColor: "#262629",
              color: "#4154FF", 
            }}            
              >title: admin functions</ListSubheader>
    <Link to="/admin/alerts" style={{ textDecoration: 'none', color: "#4154FF"}}>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="manage alerts" />
    </ListItem>
    </Link>

    <Link to="/admin/users" style={{ textDecoration: 'none', color: "#4154FF"}}>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="manage users" />
    </ListItem>
    </Link>

    <Link to="/admin/business" style={{ textDecoration: 'none', color: "#4154FF"}}>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="manage business" />
    </ListItem>
    </Link>

    <Link to="/admin/business" style={{ textDecoration: 'none', color: "#4154FF"}}>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="bitacora" />
    </ListItem>
    </Link>
  </div>
);
