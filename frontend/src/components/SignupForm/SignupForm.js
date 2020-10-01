import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';

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

const SignupForm = () => {
  const classes = useStyles();
  const [showPassword, updateShowPassword] = useState(false);

  const { handleSubmit, control, errors, reset, getValues, watch } = useForm({
    mode: 'all',
  });

  const handleClickShowPassword = () => {
    updateShowPassword(!showPassword);
  };

  const submit = (data) => {
    console.log({ data });
  };

  watch(['firstName', 'lastName', 'age', 'birthdate', 'mobile', 'email', 'password']);
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
            label='FirstName'
            variant='outlined'
            width={300}
            rules={{ required: true }}
            className={classes.formControl}
            name='firstName'
            value={values.firstName}
            error={errors.firstName}
            helperText={errors.firstName && 'firstName required'}
          />
        </div>
        <div>
          <Controller
            as={TextField}
            control={control}
            id='outlined-basic'
            label='LastName'
            variant='outlined'
            width={300}
            rules={{ required: true }}
            className={classes.formControl}
            name='lastName'
            value={values.lastName}
            error={errors.lastName}
            helperText={errors.lastName && 'lastName required'}
          />
        </div>
        <div>
          <Controller
            as={TextField}
            control={control}
            id='outlined-basic'
            label='Email'
            variant='outlined'
            width={300}
            rules={{ required: true }}
            className={classes.formControl}
            name='email'
            value={values.email}
            error={errors.email}
            helperText={errors.email && 'email required'}
          />
        </div>
        <div>
          <Controller
            as={TextField}
            control={control}
            id='outlined-basic'
            label='Password'
            variant='outlined'
            width={300}
            rules={{ required: true }}
            className={classes.formControl}
            name='password'
            value={values.password}
            error={errors.password}
            helperText={errors.password && 'password required'}
          />
        </div>
        <div>
          <Controller
            as={TextField}
            control={control}
            id='outlined-basic'
            label='mobile'
            variant='outlined'
            width={300}
            rules={{ required: true }}
            className={classes.formControl}
            name='mobile'
            type='number'
            value={values.mobile}
            error={errors.mobile}
            helperText={errors.mobile && 'mobile required'}
          />
        </div>
        <div className={classes.actionCont}>
          <Button className={classes.actionBtn} fullWidth type='submit'>
            Sign up
          </Button>
        </div>
      </form>
    </>
  );
};

export default SignupForm;