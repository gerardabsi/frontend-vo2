import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Grid, makeStyles, Typography } from '@material-ui/core';
import { AppState } from '../store/configureStore';
import { UserSummaryRow } from '../components/Atom/UserSummaryRow/UserSummaryRow';

const useStyles = makeStyles({
  mainContainer: {
    minHeight: '100vh',
  },
  card: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    paddingBottom: 10,
  },
});

export const Summary: React.FC = () => {
  const userInfo = useSelector((state: AppState) => state.User);
  const { firstName, lastName, phoneNumber, salary } = userInfo;
  const { mainContainer, card, title } = useStyles();

  return (
    <Grid container spacing={3} alignItems="center" justify="center" className={mainContainer}>
      <Grid item xs={12} sm={6}>
        <Card className={card}>
          <Grid item xs={12}>
            <Typography className={title} color="textPrimary" gutterBottom>
              Summary
            </Typography>
          </Grid>
          <UserSummaryRow title="First Name" value={firstName} />
          <UserSummaryRow title="Last Name" value={lastName} />
          <UserSummaryRow title="Phone Number" value={phoneNumber} />
          <UserSummaryRow title="Salary" value={salary} />
        </Card>
      </Grid>
    </Grid>
  );
};
