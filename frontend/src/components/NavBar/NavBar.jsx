import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

// Import your FetchNavbarItems function here
import { FetchNavbarItems } from '../../my_methods/session_methods';

function Navbar() {
  const [pages, setPagesArray] = useState([]);
  const [settings, setSettingsArray] = useState([]);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const navbarItems = await FetchNavbarItems();
      setPagesArray(navbarItems.pages_array);
      setSettingsArray(navbarItems.setting_array);
    };

    fetchData();
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Function to get the corresponding page routes
  function getPageLink(page) {
    switch (page) {
      case 'Inicio':
        return '/';
      case 'Adoptar':
        return '/dogs';
      case 'Quienes Somos':
        return '/about';
      case 'Publicar':
        return '/post';
<<<<<<< HEAD
      case 'Mis mascotas':
        return '/dogs';
      default:
        return '/';
=======
      case 'Peticiones':
        return '/peticiones';
      case 'Mis Mascotas':
        return '/mis-mascotas-shelter';
>>>>>>> develop
    }
  }

  // Function to get the corresponding settings routes
  function getSettingsLink(setting) {
    switch (setting) {
      case 'Mi Perfil':
<<<<<<< HEAD
        return '/profile/adopter';
      case 'Perfil del Refugio':
        return '/profile/shelter';
=======
        return '/profile';
      case 'Mi Refugio':
        return '/profile';
>>>>>>> develop
      case 'Iniciar Sesion':
        return '/login';
      case 'Cerrar Sesion':
        return '/login';
      /*
      case 'Crear Cuenta':
        return '/TODAVIA-NO-BRO';
      */
        default:
        return '/';
    }
  }

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#FF5722',
        position: 'fixed',
        zIndex: '9998',
        height: '50px',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a href="/">
            <Imagen1 src="/Images/dame_logo.png" alt="Logo" style={{ width: '40px', marginRight: '16px' }} />
          </a>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {/* Your page title */}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', zIndex: '9998' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none', zIndex: '9998' },
              }}
            >
              {pages.length > 0 &&
                pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    component={Link}
                    to={getPageLink(page)} // Navigate to the corresponding route
                  >
                    {page}
                  </MenuItem>
                ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
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
            {/* Your mobile page title */}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.length > 0 &&
              pages.map((page) => (
                <Link key={page} to={getPageLink(page)}>
                  <Button sx={{ my: 2, color: 'white', display: 'block' }}>{page}</Button>
                </Link>
              ))}
          </Box>

          <Box sx={{ flexGrow: 0, zIndex: '9999' }}>
            <Tooltip title="Open settings">
              <Link to={getSettingsLink(settings[0])} />
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* Replace the src with your user avatar */}
                <Avatar src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px', zIndex: '9999' }}
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
              {settings.length > 0 &&
                settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    {/* Use Link to redirect */}
                    <Link to={getSettingsLink(setting)}>
                      <Typography textAlign="center" color="#212529">
                        {setting}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;

const Imagen1 = styled.img`
  width: 50px;
  display: flex;
  // @media (max-width: 899px) {
  //   display: none;
  // }
`;

const Avatar = styled.img`
  width: 40px;
  border-radius: 100%;
`;

// const Imagen2 = styled.img`
//   width: 50px;
//   display: none;
//   @media (max-width: 899px) {
//     display: flex;
//   }
// `;



