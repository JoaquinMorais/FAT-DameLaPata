// NAVBAR SHELTER

import * as React from 'react';
import styled from 'styled-components';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import ProfileImage from '../../images/foto-perfil-ejemplo.jpg';

// function NavBar() {
//   return (
//     <Posicion>
//       <CustomNavbar collapseOnSelect expand="lg" className="bg-body-tertiary">
//         <Container>
//           <Navbar.Brand href="/"><Imagen src="/Images/dame_logo.png" alt="" /></Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="/">Inicio</Nav.Link>
//               <Nav.Link href="/about">Quienes Somos</Nav.Link>
//               <NavDropdown title="Mis Mascotas" id="collasible-nav-dropdown">
//                 <NavDropdown.Item href="/dogs">
//                   Ver mis perros
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="/post">
//                   Publicar
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//             <Nav>
//               {/* Utiliza una clase de CSS personalizada para el botón */}
//               <NavDropdown title={<div className="nav-dropdown-profile"></div>} id="collasible-nav-dropdown">
//                 <NavDropdown.Item href="/TODAVIA-NO-BRO">
//                   Ver Perfil
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="/TODAVIA-NO-BRO">
//                   Cerrar Sesión
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </CustomNavbar>
//     </Posicion>
//   );
// }


// export default NavBar;

// const CustomNavbar = styled(Navbar)`
//   .nav-dropdown-profile {
//     background-image: url(${ProfileImage});
//     background-size: cover;
//     background-repeat: no-repeat;
//     width: 40px; /* Ancho de la imagen */
//     height: 40px; /* Alto de la imagen */
//     border-radius: 50%; /* Esto crea un borde circular para la imagen */
//     margin-right: 8px; /* Espaciado derecho */
//   }

//   /* Cambia la altura del Navbar */
//   height: 60px; /* Establece la altura deseada */
// `;

// const Imagen = styled.img`
//   width: 50px;
// `;

// const Posicion = styled.div`
// position: fixed;
// width: 100%;
// height: auto;
// z-index: 9999;
// `;

// const Perfil = styled.img`
//   width: 50px;
// `;







// /Images/dame_logo.png




import { Link } from 'react-router-dom'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Inicio', 'Adoptar', 'Quienes somos', 'Publicar', 'Mis mascotas'];
const settings = ['Perfil', 'Cerrar sesión'];

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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
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
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                  <Typography textAlign="center">{setting}</Typography>
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

// const Imagen2 = styled.img`
//   width: 50px;
//   display: none;
//   @media (max-width: 899px) {
//     display: flex;
//   }
// `;
