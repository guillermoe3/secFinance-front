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
   <Link to="/">
    <ListItem button>
    
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      
      <ListItemText primary="Home" />
      
    </ListItem>
    </Link>


    
    <Link to="/investigation">
        <ListItem button>
        <ListItemIcon>
          <ManageSearchIcon />
        </ListItemIcon>
          <ListItemText primary="Investigaciones" />
          </ListItem>
      </Link>

      <Link to="/alerts">
    <ListItem button>
      <ListItemIcon>
        <CampaignIcon />
      </ListItemIcon>
      
      <ListItemText primary="Alertas" />
     
    </ListItem>
    </Link>

    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      
      <ListItemText primary="Mi Empresa" />
     
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Menu4" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset sx={{backgroundColor: "#262629",
              color: "#4154FF", 
            }}            
              >title: admin functions</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="manage alerts" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="manage users" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="manage business" />
    </ListItem>
  </div>
);
