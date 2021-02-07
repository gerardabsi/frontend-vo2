import { Grid } from '@material-ui/core';
import React from 'react';

import { FormikValues } from 'formik';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import RegistrationForm from '../components/Organism/RegistrationForm/RegistrationForm';
import { addUser } from '../store/Actions/User';

const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time));

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = async (values: FormikValues) => {
    await sleep(1000);
    const { firstName, lastName, phoneNumber, salary } = values;
    dispatch(
      addUser({
        firstName,
        lastName,
        phoneNumber,
        salary,
      }),
    );
    history.push('/summary');
  };
  return (
    <Grid container spacing={3} alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={6}>
        <RegistrationForm onSubmit={onSubmit} />
      </Grid>
    </Grid>
  );
};
