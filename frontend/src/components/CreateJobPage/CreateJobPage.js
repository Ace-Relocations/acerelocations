import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid/index';
import Typography from '@material-ui/core/Typography';
import CreateJobForm from '../CreateJobForm/CreateJobForm';
import { useDispatch, useSelector } from 'react-redux';

import { jobRequest, getJobRequest, updateJobRequest } from '../../actions';
import Loader from '../Loader/Loader';

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
  const { jobId } = useParams();

  const { job } = useSelector((state) => state.Job);
  const { loader } = useSelector((state) => state.Loader);

  const isEditing = !!jobId;

  // useEffect(() => {
  //   if (isEditing) {
  //     // dispatch(getJobRequest(jobId));
  //   }
  // }, [isEditing]);

  const onCreateJob = (data) => {
    dispatch(jobRequest(data));
  };

  const onUpdateJob = (data) => {
    dispatch(updateJobRequest(data, jobId));
  };

  const jobToUpdate = useMemo(() => {
    return job;
  }, [loader, job]);

  return (
    <Grid container>
      <Grid item lg={12} container className={classes.gridItem}>
        <Box className={classes.introBox}>
          <div>
            <Typography variant='h3' component='h1' className={classes.primaryText}>
              {isEditing ? 'Update Job' : 'Create Job'}
              <Typography variant='h3' className={classes.primaryText}></Typography>
              <Typography variant='h6' component='span' className={classes.secondaryText}>
                Fill this form to {isEditing ? 'update' : 'create'} Job
              </Typography>
            </Typography>
          </div>
        </Box>
      </Grid>
      <Grid item lg={12} container className={classes.gridItem}>
        {/* <Grid item lg={6} container className={classes.gridItem}> */}
        <Box component='div'>
          {loader ? (
            <Loader />
          ) : (
            <CreateJobForm
              onCreateJob={onCreateJob}
              onUpdateJob={onUpdateJob}
              isEditing={isEditing}
              job={jobToUpdate}
            />
          )}
        </Box>
        {/* </Grid> */}
      </Grid>
    </Grid>
  );
};

export default CreateJobPage;
