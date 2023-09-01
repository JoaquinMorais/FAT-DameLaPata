// NAVBAR SHELTER

import * as React from 'react';
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
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Inicio', 'Adoptar', 'Quienes somos', 'Publicar', 'Mis mascotas'];
const settings = ['Perfil', 'Cerrar sesion'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  // Función para obtener las rutas correspondientes a las páginas
  function getPageLink(page) {
    switch (page) {
      case 'Inicio':
        return '/';
      case 'Adoptar':
        return '/dogs';
      case 'Quienes somos':
        return '/about';
      case 'Publicar':
        return '/post';
      case 'Mis mascotas':
        return '/TODAVIA-NO-BRO';
    }
  }

  function getSettingsLink(settings) {
    switch (settings) {
      case 'Perfil':
        return '/profile';
      case 'Cerrar sesion':
        return '/TODAVIA-NO-BRO';
    }
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: '#FF5722', position: 'fixed', zIndex: '9998', height: '50px', justifyContent: 'center' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a href='/'><Imagen1 src='/Images/dame_logo.png' alt="Logo" style={{ width: '40px', marginRight: '16px'}} /></a>
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
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={getPageLink(page)} // Navegar a la ruta correspondiente
                >
                  {page}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <a href='/'><Imagen2 src='/Images/dame_logo.png' alt="Logo" style={{ width: '40px', marginRight: '16px'}} /></a> */}
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
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page} to={getPageLink(page)}>
                <Button
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, zIndex: '9999' }}>
            <Tooltip title="Open settings">
            <Link to={getSettingsLink(settings)} />
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src='https://pbs.twimg.com/profile_images/1501988258078674950/_5xMT_RA_400x400.jpg' />
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
              {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                {/* Utiliza Link para redirigir */}
                <Link to={getSettingsLink(setting)}>
                  <Typography textAlign="center" color='#212529'>{setting}</Typography>
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
