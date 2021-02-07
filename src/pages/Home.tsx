import { Grid } from '@material-ui/core';
import React from 'react';

import RegistrationForm from '../components/Organism/RegistrationForm/RegistrationForm';

export const Home: React.FC = () => {
  return (
    <Grid container spacing={3} alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={6}>
        <RegistrationForm />
      </Grid>
    </Grid>
  );
};
