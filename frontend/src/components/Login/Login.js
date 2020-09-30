import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid/index';
import Typography from '@material-ui/core/Typography';

import LoginForm from '../LoginForm/LoginForm';

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
  stackForm: {
    dispaly: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  formControl: {
    margin: '10px 0',
    width: '400px',
  },
  formHelper: {
    textAlign: 'right',
    cursor: 'pointer',
    marginTop: '-10px',
    marginRight: '4px',
  },
  actionCont: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  actionBtn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 40,
    padding: '0 30px',
    margin: '10px',
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item lg={6} container className={classes.gridItem}>
          <Box className={classes.introBox}>
            <div>
              <Typography variant='h3' component='h1' className={classes.primaryText}>
                Ace Relocation,
                <Typography variant='h3' className={classes.primaryText}>
                  We Make ...
                </Typography>
                <Typography variant='h5' component='span' className={classes.secondaryText}>
                  Welcome back to Ace Relocation
                </Typography>
              </Typography>
            </div>
            <Box component='div' className={classes.formBox}>
              <LoginForm />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
