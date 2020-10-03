import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Grid from '@material-ui/core/Grid/index';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  introBox: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '130px',
    marginTop: '60px',
    fontFamily: 'Roboto Mono, monospace',
  },
  primaryText: {
    fontSize: '35px',
    fontWeight: 'bold',
  },
  secondaryText: {
    position: 'relative',
    top: '-10px',
    opacity: '.78',
  },
  formBox: {
    dispaly: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(5),
  },
}));

const ViewJobPage = () => {
  const classes = useStyles();
  const { jobId } = useParams();

  return (
    <Grid container>
      <Grid item lg={12} container className={classes.gridItem}>
        <Box className={classes.introBox}>
          <div>
            <Typography variant='h3' component='h1' className={classes.primaryText}>
              Job #{jobId}
              <Typography variant='h3' className={classes.primaryText}></Typography>
              <Typography
                variant='h6'
                component='span'
                className={classes.secondaryText}
              ></Typography>
            </Typography>
          </div>
        </Box>
      </Grid>
      <Grid item lg={12} container className={classes.gridItem}>
        <Box component='div'></Box>
      </Grid>
    </Grid>
  );
};

export default ViewJobPage;
