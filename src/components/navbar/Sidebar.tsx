import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { menu } from '../../data/menu-helper';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {

  const location = useLocation();

  const [open, setOpen] = React.useState<boolean>(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: '270', height: '100%', backgroundColor: 'primary.main', color: 'white' }}
      justifyContent='center'
      alignItems='center'
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {
          menu.map((item, index) => (
            <Link key={index} to={item.url} style={{ textDecoration: 'none' }}>
              <ListItem key={index}>
                <ListItemButton className={location.pathname === item.url ? 'active' : ''}
                  sx={{ 
                    "&.active": {
                      color: 'secondary.main',
                      borderBottomColor: 'secondary.main',
                      borderBottomStyle: 'solid',
                      borderBottomWidth: '2px',
                      borderRadius: 0
                    },
                  }}
                >
                  <ListItemIcon >
                    {index % 2 === 0 ? <InboxIcon color='secondary' /> : <MailIcon color='secondary' />}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
              <Divider />
            </Link>
          )
        )}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        size="large"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={'left'}
        open={open}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </>
  );
}

export default Sidebar;