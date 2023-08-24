import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container scrolled={scrolled}>
      <Container>
        <LogoLink>
          <LogoImage src="/Images/dame_logo.png" alt="" href="/"/>
        </LogoLink>

        <Menu>
          <MenuItem><a href="/">INICIO</a></MenuItem>
          <MenuItem><a href="/dogs">ADOPTÁ</a></MenuItem>
          <MenuItem><a href="/about">SOBRE NOSOTROS</a></MenuItem>
          <MenuItem><a href="/post">PUBLICÁ</a></MenuItem>
          {/*<MenuItem><a href="/give">DONAR</a></MenuItem>*/}
        </Menu>

        <RightMenuContainer>
          <RightMenu>
            <a href="/login">INICIA SESION</a>
            <a href="/register">REGISTRATE</a>
            {/* MENU =========================== */}
            <CustomMenu />
            {/* ================================ */}
          </RightMenu>
        </RightMenuContainer>
      </Container>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 5px;
  background-color: ${props => (props.scrolled ? '#f76402' : 'transparent')};
`;

const LogoLink = styled.a``;

const LogoImage = styled.img`
  width: 55px;
  height: auto;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  @media(max-width: 1000px){
    display:none;
  }
`;

const MenuItem = styled.p`
  a {
    color: white;
    text-decoration: none; 
    transition: color 0.3s ease; 

    &:hover {
      color: black; 
    }
  }
  font-weight: 600;
  padding: 0 20px;
`;

const RightMenuContainer = styled.div`
  margin-left: auto; 
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    color: white;
    font-weight: 600;
    margin-right: 15px;
    transition: color 0.3s ease; 

    &:hover {
      color: black; 
    }

    @media(max-width: 1000px){
      display: none;
    }
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  visibility: hidden;
  margin-right: -20px;

  @media(max-width: 1000px){
    visibility: visible;
    margin-right: 20px;
  }
`;
