import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid/index';
import Typography from '@material-ui/core/Typography';
import CustomCard from '../../CustomCard/CustomCard';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const DashboardSection = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item lg={12} container className={classes.gridItem}>
        <Grid item lg={4} container>
          <CustomCard title='Revenue' value='1231' />
        </Grid>
        <Grid item lg={4} container>
          <CustomCard title='Cost' value='1231' />
        </Grid>
        <Grid item lg={4} container>
          <CustomCard title='Profit' value='1231' />
        </Grid>
        <Grid item lg={4} container>
          <CustomCard title='Total Jobs' value='1231' />
        </Grid>
        <Grid item lg={4} container>
          <CustomCard title='Ongoin Jobs' value='1231' />
        </Grid>
        <Grid item lg={4} container>
          <CustomCard title='Completed Jobs' value='1231' />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardSection;
