import { Grid } from '@material-ui/core';
import React from 'react';

import { FormikValues } from 'formik';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import RegistrationForm from '../components/Organism/RegistrationForm/RegistrationForm';
import { addUser } from '../store/Actions/User';

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = async (values: FormikValues) => {
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
        <RegistrationForm
          initialValues={{ firstName: '', lastName: '', phoneNumber: '', salary: '' }}
          onSubmit={onSubmit}
        />
      </Grid>
    </Grid>
  );
};
