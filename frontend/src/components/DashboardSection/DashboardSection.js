import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid/index';
import Typography from '@material-ui/core/Typography';
import CustomCard from '../CustomCard/CustomCard';
import { dashbordStatsRequest } from '../../actions';
import Loader from '../Loader/Loader';

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
  const dispatch = useDispatch();
  const stats = useSelector((state) => state.Dashboard.dashboardStats);
  const { loader } = useSelector((state) => state.Loader);

  useEffect(() => {
    dispatch(dashbordStatsRequest());
  }, []);

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
          <Grid container>
            <Grid item lg={12} container className={classes.gridItem}>
              <Grid item lg={4} container>
                <CustomCard title='Revenue' value={stats ?.revenue} />
              </Grid>
              <Grid item lg={4} container>
                <CustomCard title='Cost' value={stats ?.cost} />
              </Grid>
              <Grid item lg={4} container>
                <CustomCard title='Profit' value={stats ?.profit} />
              </Grid>
              <Grid item lg={4} container>
                <CustomCard title='Total Jobs' value={stats ?.totalJobs} />
              </Grid>
              <Grid item lg={4} container>
                <CustomCard title='Ongoing Jobs' value={stats ?.ongoingJobs} />
              </Grid>
              <Grid item lg={4} container>
                <CustomCard title='Completed Jobs' value={stats ?.completedJobs} />
              </Grid>
            </Grid>
          </Grid>
        )}
    </div>
  );
};

export default DashboardSection;
