import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid/index';
import Typography from '@material-ui/core/Typography';

import CreateJobForm from '../CreateJobForm/CreateJobForm';
import { useDispatch, useSelector } from 'react-redux';

import { jobRequest } from '../../actions';

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
const CreateJobPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const authUser = useSelector((state) => state.auth);

  const onCreateJob = (data) => {
    console.log(data);
    dispatch(jobRequest(data));
  };

  return (
    <Grid container>
      <Grid item lg={12} container className={classes.gridItem}>
        <Box className={classes.introBox}>
          <div>
            <Typography variant='h3' component='h1' className={classes.primaryText}>
              Create Job
              <Typography variant='h3' className={classes.primaryText}></Typography>
              <Typography variant='h6' component='span' className={classes.secondaryText}>
                Fill this form to create Job
              </Typography>
            </Typography>
          </div>
        </Box>
      </Grid>
      <Grid item lg={12} container className={classes.gridItem}>
        {/* <Grid item lg={6} container className={classes.gridItem}> */}
        <Box component='div'>
          <CreateJobForm onCreateJob={onCreateJob} />
        </Box>
        {/* </Grid> */}
      </Grid>
    </Grid>
  );
};

export default CreateJobPage;
