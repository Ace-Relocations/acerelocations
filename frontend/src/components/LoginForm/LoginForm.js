import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { loginRequest } from '../../actions';

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

const LoginForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const [showPassword, updateShowPassword] = useState(false);
  const [showCustomLoader, updateShowCustomLoader] = useState(false);

  const dispatch = useDispatch();
  const { authUser, logout } = useSelector((state) => state.Auth);

  const { handleSubmit, control, errors, getValues, watch } = useForm({
    mode: 'all',
  });

  // THIS IS TEMPORARY
  useEffect(() => {
    if (!logout && logout !== undefined && authUser !== undefined && authUser !== null) {
      window.location.reload(false);
      // setTimeout(() => {
      //   history.push('/');
      // }, 1000);
    }
  }, [logout, authUser]);

  const submit = (data) => {
      dispatch(loginRequest(data));
      history.push('/');

  };

  watch(['username', 'password']);
  const values = getValues();

  return (
    <>
      <form
        className={classes.stackForm}
        autoComplete='off'
        onSubmit={handleSubmit(submit)}
        noValidate
      >
        <div>
          <Controller
            as={TextField}
            control={control}
            id='outlined-basic'
            label='Username'
            variant='outlined'
            width={300}
            rules={{ required: true }}
            className={classes.formControl}
            name='username'
            value={values.username}
            error={errors.username}
            defaultValue=''
            helperText={errors.username && 'username required'}
          />
        </div>
        <div>
          <Controller
            as={TextField}
            control={control}
            id='outlined-basic'
            label='password'
            variant='outlined'
            width={300}
            rules={{ required: true }}
            className={classes.formControl}
            name='password'
            value={values.password}
            error={errors.password}
            helperText={errors.password && 'password required'}
            type='password'
            defaultValue=''
          />
          {/* <FormHelperText id='forget-password-text' className={classes.formHelper} error='true'>
            Forget password
          </FormHelperText> */}
        </div>
        <div className={classes.actionCont}>
          {/* <Button className={classes.actionBtn}>Sign up</Button> */}
          {/* <Box component='span' style={{ opacity: '.67' }}>
          OR
        </Box> */}
          <Button className={classes.actionBtn} fullWidth type='submit'>
            Sign In
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
