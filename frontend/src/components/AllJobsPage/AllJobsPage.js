import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';

import Grid from '@material-ui/core/Grid/index';
import Typography from '@material-ui/core/Typography';

import AllJobsTable from '../AllJobsTable/AllJobsTable';
import makeData from './makeData';

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

const AllJobsPage = () => {
  const classes = useStyles();

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    [],
  );

  const data = React.useMemo(() => makeData(40), []);

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
        <Box component='div'>
          <CssBaseline />

          <AllJobsTable columns={columns} data={data} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default AllJobsPage;
