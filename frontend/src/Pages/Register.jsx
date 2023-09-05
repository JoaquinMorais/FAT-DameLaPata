import React from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShelterRegister from "../components/Register/RegisterShelter";
import AdopterRegister from "../components/Register/RegisterAdopter";
import Navbar from '../components/NavBar/Navbar';
import axios from 'axios';

function Register() {
  return (
    <Container>
      <Navbar />
      <h1>¿Cómo te quieres registrar?</h1>
      <StyledTabs>
        <StyledTabList>
          <StyledTab>Adoptante</StyledTab>
          <StyledTab>Refugio - Home adopter</StyledTab>
        </StyledTabList>
        <StyledTabPanel>
          <AdopterRegister />
        </StyledTabPanel>
        <StyledTabPanel>
          <ShelterRegister />
        </StyledTabPanel>
      </StyledTabs>
    </Container>
  );
}

export default Register;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  font-size: 24px;
  margin-top: 50px;
  padding: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const StyledTabs = styled(Tabs)`
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const StyledTabList = styled(TabList)`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #11111111;
  color: #ffffff;
  border-radius: 5px 5px 0 0;
`;

const StyledTab = styled(Tab)`
  flex: 1;
  padding: 10px 20px;
  text-align: center;
  cursor: pointer;
  color: #555;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
    color: #333333;

  }

  &.react-tabs__tab--selected {
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-bottom: none;
  }
`;

const StyledTabPanel = styled(TabPanel)`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 0 0 5px 5px;
`;
