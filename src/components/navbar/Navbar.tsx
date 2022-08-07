import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Sidebar from './Sidebar';
import { Link, useLocation } from 'react-router-dom';
import { menu } from '../../data/menu-helper';

const Navbar: React.FC = () => {

  const location = useLocation();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Link to={"/"} style={{ textDecoration: 'none' }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Franco Aguirre
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Sidebar/>
          </Box>
          
          <Link to={"/"} style={{ textDecoration: 'none' }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Franco Aguirre
            </Typography>
          </Link>

          <Box flexGrow={1} />
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {
              menu.map((item, index) => (
                <Link key={index} to={item.url} style={{ textDecoration: 'none' }}>
                  <Button
                    key={item.title}
                    className={location.pathname === item.url ? 'active' : ''}
                    sx={{ 
                      my: 2, color: 'white', display: 'block' ,
                      ":hover": {
                        color: 'secondary.main',
                      },
                      "&.active": {
                        color: 'secondary.main',
                        borderBottomColor: 'secondary.main',
                        borderBottomStyle: 'solid',
                        borderBottomWidth: '2px',
                        borderRadius: 0
                      },
                    }}
                  >
                    {item.title}
                  </Button>
                </Link>
              )
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
