import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { navbarStyles } from './styles';
import { mainNavbarItems } from './consts/navbaritems';
import { useNavigate } from 'react-router';
import Dashboard from '../../pages/Dashboard';
const drawerWidth = 220;
function Navbar() {
    const navigate = useNavigate()
  return (
    <div><Drawer
    sx={navbarStyles.drawer}
    variant="permanent"
    anchor="left"
  >
    <Toolbar />
    <Divider />
    <List>
      {mainNavbarItems.map((text, index) => (
        <ListItem key={text.id} disablePadding>
          <ListItemButton onClick={()=> navigate(text.route)}>
            <ListItemIcon sx={navbarStyles.icons}>
              {text.icon}
            </ListItemIcon>
            <ListItemText sx={navbarStyles.text} primary={text.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
  </Drawer>
  
  </div>
  )
}

export default Navbar