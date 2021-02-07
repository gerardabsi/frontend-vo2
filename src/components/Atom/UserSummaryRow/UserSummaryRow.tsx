import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

interface UserSummaryRowProps {
  title: string;
  value: string;
}
const useStyles = makeStyles({
  title: {
    fontSize: 16,
  },
  value: {
    fontSize: 14,
  },
});
export const UserSummaryRow: React.FC<UserSummaryRowProps> = ({
  title,
  value,
}: UserSummaryRowProps): React.ReactElement => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography className={classes.value} color="textSecondary" gutterBottom>
          {value}
        </Typography>
      </Grid>
    </Grid>
  );
};
