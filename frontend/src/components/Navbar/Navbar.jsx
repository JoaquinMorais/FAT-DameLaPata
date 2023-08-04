import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
  return (
    <Container>
      <LogoLink>
        <LogoImage src="/Images/dame_logo.png" alt="" href="/"/>
      </LogoLink>

      <Menu>
        <MenuItem><a href="/">INICIO</a></MenuItem>
        <MenuItem><a href="/dogs">ADOPTA</a></MenuItem>
        <MenuItem><a href="/about">SOBRE NOSOTROS</a></MenuItem>
        <MenuItem><a href="/give">DONAR</a></MenuItem>
      </Menu>

      <RightMenuContainer>
        <RightMenu>
          <a href="#">INICIA SESION</a>
          <a href="#">REGISTRATE</a>
          <CustomMenu />
        </RightMenu>
      </RightMenuContainer>
    </Container>
  );
}

export default NavBar;

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  min-height: 80px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px;
`;

const LogoLink = styled.a``;

const LogoImage = styled.img`
  width: 90px;
  height: auto;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  @media(max-width: 768px){
    display:none;
  }
`;

const MenuItem = styled.p`
  a {
    color: white;
  }
  font-weight: 600;
  padding: 0 20px;
`;

const RightMenuContainer = styled.div`
  margin-left: auto; /* Pushes the RightMenu to the right */
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    color: white;
    font-weight: 600;
    margin-right: 15px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
