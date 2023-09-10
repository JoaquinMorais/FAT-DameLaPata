import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const CenteredContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const CenteredGrid = styled(Grid)`
  text-align: center;
`;

const UserProfileAvatar = styled(Avatar)`
  width: 150px;
  height: 150px;
`;

function UserProfile() {
  return (
    <CenteredContainer maxWidth="md">
      <CenteredGrid container spacing={3}>
        <Grid item xs={12} md={4}>
          <UserProfileAvatar alt="User Profile" src="/path/to/profile-image.jpg" />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h4">User Name</Typography>
          <Typography variant="body1">Email: user@example.com</Typography>
          <Typography variant="body1">Location: City, Country</Typography>
          <Button variant="contained" color="primary">
            Editar Perfil
          </Button>
        </Grid>
      </CenteredGrid>
    </CenteredContainer>
  );
}

export default UserProfile;
