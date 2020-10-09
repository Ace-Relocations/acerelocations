import React, { useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid/index';
import Typography from '@material-ui/core/Typography';

import AllJobsTable from '../AllJobsTable/AllJobsTable';
import makeData from './makeData';
import {
  allJobRequest,
  deleteJobRequest,
  updateJobStatusRequest,
  getJobRequest,
  createInvoiceRequest,
} from '../../actions';
import toaster from '../../utils/toaster';

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

const AllJobsPage = ({ match }) => {
  const classes = useStyles();
  const history = useHistory();

  const [isChanged, updateIsChanged] = useState(true);
  const dispatch = useDispatch();
  const { allJobs, job } = useSelector((state) => state.Job);
  const loading = useSelector((state) => state.Loader);

  const jobIds = allJobs.map(({ id }) => id).join(',');

  const onDeleteJob = useCallback((selectedGcnNo) => {
    updateIsChanged(true);
    dispatch(deleteJobRequest(selectedGcnNo));
  });

  const onUpdateJobStatus = useCallback((status, gcnNo) => {
    updateIsChanged(true);
    dispatch(updateJobStatusRequest({ status, gcnNo }));
  });

  useEffect(() => {
    if (!isChanged) {
      dispatch(allJobRequest());
    }
    updateIsChanged(false);
  }, [isChanged]);

  const data = React.useMemo(() => {
    return allJobs;
  }, [allJobs, isChanged]);

  const onEditJobClick = useCallback((gcnno) => {
    dispatch(getJobRequest(gcnno));
    history.push(`${match.path}/edit/${gcnno}`);
  });

  const onAddInvoiceClick = useCallback((data, gcnno) => {
    dispatch(createInvoiceRequest({ invoice: data, gcnno }));
  }, []);

  const onAddExpenseClick = useCallback((data, gcnno) => {
    dispatch(createInvoiceRequest({ invoice: data, gcnno }));
  });

  return (
    <Grid container>
      <Grid item lg={12} container className={classes.gridItem}>
        <Box className={classes.introBox}>
          <div>
            <Typography variant='h3' component='h1' className={classes.primaryText}>
              All Jobs
              <Typography variant='h3' className={classes.primaryText}></Typography>
              <Typography variant='h6' component='span' className={classes.secondaryText}>
                List of all Jobs
              </Typography>
            </Typography>
          </div>
        </Box>
      </Grid>
      <Grid item lg={12} container className={classes.gridItem}>
        <Box component='div' style={{ minWidth: '700px' }}>
          <CssBaseline />

          <AllJobsTable
            data={data}
            onDeleteJob={(gcnNo) => onDeleteJob(gcnNo)}
            match={match}
            onUpdateJobStatus={(status, gcnNo) => onUpdateJobStatus(status, gcnNo)}
            onEditJobClick={onEditJobClick}
            isLoading={loading}
            onAddInvoiceClick={onAddInvoiceClick}
            onAddExpenseClick={onAddExpenseClick}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default AllJobsPage;
