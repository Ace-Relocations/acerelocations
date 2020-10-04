import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid/index';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiPaper-root': {
      borderRadius: '100px',
      boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75);',
    },
  },

  introBox: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '130px',
    marginTop: '20px',
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
    width: '800px',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  actionBtn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    width: '400px',
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 40,
    padding: '0 30px',
    margin: '10px',
  },
}));

const CreateJobForm = ({
  onCreateJob,
  onUpdateJob,
  isEditing,
  job: {
    consignor,
    consignee,
    email,
    contact,
    oaddress1,
    oaddress2,
    ocity,
    ostate,
    opincode,
    daddress1,
    daddress2,
    dcity,
    dstate,
    dpincode,
    status,
    car,
    insuranceP,
    insuranceA,
    type,
    date,
  },
}) => {
  const classes = useStyles();
  const getDefaultValue = (isEditing, value) => (isEditing ? value : '');

  const { handleSubmit, control, errors, getValues, watch, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      cnsFirstName: getDefaultValue(isEditing, consignor),
      cneFirstName: getDefaultValue(isEditing, consignee),
      cneMobile: getDefaultValue(isEditing, contact),
      cneEmail: getDefaultValue(isEditing, email),
      originAddress1: getDefaultValue(isEditing, oaddress1),
      originAddress2: getDefaultValue(isEditing, oaddress2),
      originCity: getDefaultValue(isEditing, ocity),
      ooriginState: getDefaultValue(isEditing, ostate),
      originPincode: getDefaultValue(isEditing, opincode),
      destinationAddress1: getDefaultValue(isEditing, daddress1),
      destinationAddress2: getDefaultValue(isEditing, daddress2),
      destinationCity: getDefaultValue(isEditing, dcity),
      destinationState: getDefaultValue(isEditing, dstate),
      destinationPincode: getDefaultValue(isEditing, dpincode),
      status: getDefaultValue(isEditing, status),
      insuranceP: getDefaultValue(isEditing, insuranceP),
      insuranceA: getDefaultValue(isEditing, insuranceA),
      type: getDefaultValue(isEditing, type),
      date: getDefaultValue(isEditing, date),
      car: isEditing ? car : true,
    },
  });
  const submit = (data) => {
    console.log({ data });
    if (isEditing) {
      onUpdateJob(data);
    } else {
      onCreateJob(data);
      // reset({
      //   cnsFirstName: getDefaultValue(isEditing, consignor),
      //   cneFirstName: getDefaultValue(isEditing, consignee),
      //   cneMobile: getDefaultValue(isEditing, contact),
      //   cneEmail: getDefaultValue(isEditing, email),
      //   originAddress1: getDefaultValue(isEditing, oaddress1),
      //   originAddress2: getDefaultValue(isEditing, oaddress2),
      //   originCity: getDefaultValue(isEditing, ocity),
      //   ooriginState: getDefaultValue(isEditing, ostate),
      //   originPincode: getDefaultValue(isEditing, opincode),
      //   destinationAddress1: getDefaultValue(isEditing, daddress1),
      //   destinationAddress2: getDefaultValue(isEditing, daddress2),
      //   destinationCity: getDefaultValue(isEditing, dcity),
      //   destinationState: getDefaultValue(isEditing, dstate),
      //   destinationPincode: getDefaultValue(isEditing, dpincode),
      //   status: getDefaultValue(isEditing, status),
      //   insuranceP: getDefaultValue(isEditing, insuranceP),
      //   insuranceA: getDefaultValue(isEditing, insuranceA),
      //   type: getDefaultValue(isEditing, type),
      //   date: getDefaultValue(isEditing, date),
      //   car: isEditing ? car : false,
      // });
    }
  };

  watch(['username', 'password', 'car']);
  const values = getValues();

  return (
    <Grid container>
      <Grid item lg={12} container className={classes.gridItem}>
        <Box className={classes.introBox}>
          <Box component='div' className={classes.formBox}>
            <form
              className={classes.stackForm}
              autoComplete='off'
              onSubmit={handleSubmit(submit)}
              noValidate
            >
              {/* <div>
                <Typography variant='h6' component='span' className={classes.secondaryText}>
                  Fill this form to create Job
                </Typography>
              </div> */}

              {/* <fieldset style={{ borderColor: '#ccc' }}> */}
              <legend>Consignor Details</legend>
              <Grid item lg={12} container className={classes.gridItem}>
                <Box marginRight='10px'>
                  <Controller
                    as={TextField}
                    control={control}
                    id='outlined-basic'
                    label='FirstName'
                    variant='outlined'
                    width={300}
                    rules={{ required: true }}
                    className={classes.formControl}
                    name='cnsFirstName'
                    value={values.cnsFirstName}
                    error={errors.cnsFirstName}
                    helperText={errors.cnsFirstName && 'FirstName is required'}
                    required
                  />
                </Box>

                <Controller
                  as={TextField}
                  control={control}
                  id='outlined-basic'
                  label='LastName'
                  variant='outlined'
                  width={300}
                  rules={{ required: true }}
                  className={classes.formControl}
                  name='cnsLastName'
                  value={values.cnsLastName}
                  error={errors.cnsLastName}
                  helperText={errors.cnsLastName && 'LastName is required'}
                  required
                />
              </Grid>
              {/* </fieldset> */}

              <Grid
                item
                lg={12}
                container
                className={classes.gridItem}
                style={{ marginTop: '10px' }}
              >
                <legend>Consignee Details</legend>
                <Grid item lg={12} container className={classes.gridItem}>
                  <Box marginRight='10px'>
                    <Controller
                      as={TextField}
                      control={control}
                      id='outlined-basic'
                      label='FirstName'
                      variant='outlined'
                      width={300}
                      rules={{ required: true }}
                      className={classes.formControl}
                      name='cneFirstName'
                      value={values.cneFirstName}
                      error={errors.cneFirstName}
                      helperText={errors.cneFirstName && 'FirstName is required'}
                      required
                    />
                  </Box>

                  <Controller
                    as={TextField}
                    control={control}
                    id='outlined-basic'
                    label='LastName'
                    variant='outlined'
                    width={300}
                    rules={{ required: true }}
                    className={classes.formControl}
                    name='cneLastName'
                    value={values.cneLastName}
                    error={errors.cneLastName}
                    helperText={errors.cneLastName && 'LastName is required'}
                    required
                  />
                </Grid>

                <Grid item lg={12} container className={classes.gridItem}>
                  <Box marginRight='10px'>
                    <Controller
                      as={TextField}
                      control={control}
                      id='outlined-basic'
                      label='Mobile'
                      variant='outlined'
                      width={300}
                      rules={{ required: true }}
                      className={classes.formControl}
                      name='cneMobile'
                      value={values.cneMobile}
                      error={errors.cneMobile}
                      helperText={errors.cneMobile && 'Contact number is required'}
                      required
                    />
                  </Box>

                  <Controller
                    as={TextField}
                    control={control}
                    id='outlined-basic'
                    label='Email'
                    variant='outlined'
                    width={300}
                    rules={{ required: true }}
                    className={classes.formControl}
                    name='cneEmail'
                    value={values.cneEmail}
                    error={errors.cneEmail}
                    helperText={errors.cneEmail && 'Email is required'}
                    required
                  />
                </Grid>
              </Grid>

              <Grid
                item
                lg={12}
                container
                className={classes.gridItem}
                style={{ marginTop: '10px' }}
              >
                <legend>Origin Details</legend>
                <Grid item lg={12} container className={classes.gridItem}>
                  <Box marginRight='10px'>
                    <Controller
                      as={TextField}
                      control={control}
                      id='outlined-basic'
                      label='Address Line 1'
                      variant='outlined'
                      width={300}
                      rules={{ required: true }}
                      className={classes.formControl}
                      name='originAddress1'
                      value={values.originAddress1}
                      error={errors.originAddress1}
                      helperText={errors.originAddress1 && 'Address is required'}
                      required
                    />
                  </Box>

                  <Controller
                    as={TextField}
                    control={control}
                    id='outlined-basic'
                    label='Address Line 2'
                    variant='outlined'
                    width={300}
                    rules={{}}
                    className={classes.formControl}
                    name='originAddress2'
                    value={values.originAddress2}
                    // error={errors.originAddress2}

                    // helperText={errors.originAddress2 && 'Address is required'}
                  />
                </Grid>

                <Grid item lg={12} container className={classes.gridItem}>
                  <Box marginRight='10px'>
                    <Controller
                      as={TextField}
                      control={control}
                      id='outlined-basic'
                      label='City'
                      variant='outlined'
                      width={300}
                      rules={{ required: true }}
                      className={classes.formControl}
                      name='originCity'
                      value={values.originCity}
                      error={errors.originCity}
                      helperText={errors.originCity && 'City is required'}
                      required
                    />
                  </Box>

                  <Controller
                    as={TextField}
                    control={control}
                    id='outlined-basic'
                    label='State'
                    variant='outlined'
                    width={300}
                    rules={{ required: true }}
                    className={classes.formControl}
                    name='originState'
                    value={values.originState}
                    error={errors.originState}
                    helperText={errors.originState && 'State is required'}
                    required
                  />
                </Grid>
                <Grid item lg={12} container className={classes.gridItem}>
                  <Box marginRight='10px'>
                    <Controller
                      as={TextField}
                      control={control}
                      id='outlined-basic'
                      label='Country'
                      variant='outlined'
                      width={300}
                      rules={{ required: true }}
                      className={classes.formControl}
                      name='originCountry'
                      value={values.originCountry}
                      error={errors.originCountry}
                      helperText={errors.originCountry && 'Country is required'}
                      required
                    />
                  </Box>

                  <Controller
                    as={TextField}
                    control={control}
                    id='outlined-basic'
                    label='Pincode'
                    variant='outlined'
                    width={300}
                    rules={{ required: true }}
                    className={classes.formControl}
                    name='originPincode'
                    value={values.originPincode}
                    error={errors.originPincode}
                    helperText={errors.originPincode && 'Pincode is required'}
                    required
                  />
                </Grid>
              </Grid>

              {/* New */}

              <Grid
                item
                lg={12}
                container
                className={classes.gridItem}
                style={{ marginTop: '10px' }}
              >
                <legend>Destination Details</legend>
                <Grid item lg={12} container className={classes.gridItem}>
                  <Box marginRight='10px'>
                    <Controller
                      as={TextField}
                      control={control}
                      id='outlined-basic'
                      label='Address Line 1'
                      variant='outlined'
                      width={300}
                      rules={{ required: true }}
                      className={classes.formControl}
                      name='destinationAddress1'
                      value={values.destinationAddress1}
                      error={errors.destinationAddress1}
                      helperText={errors.destinationAddress1 && 'Address is required'}
                      required
                    />
                  </Box>

                  <Controller
                    as={TextField}
                    control={control}
                    id='outlined-basic'
                    label='Address Line 2'
                    variant='outlined'
                    width={300}
                    rules={{}}
                    className={classes.formControl}
                    name='destinationAddress2'
                    value={values.destinationAddress2}
                    required
                  />
                </Grid>

                <Grid item lg={12} container className={classes.gridItem}>
                  <Box marginRight='10px'>
                    <Controller
                      as={TextField}
                      control={control}
                      id='outlined-basic'
                      label='City'
                      variant='outlined'
                      width={300}
                      rules={{ required: true }}
                      className={classes.formControl}
                      name='destinationCity'
                      value={values.destinationCity}
                      error={errors.destinationCity}
                      helperText={errors.destinationCity && 'City is required'}
                      required
                    />
                  </Box>

                  <Controller
                    as={TextField}
                    control={control}
                    id='outlined-basic'
                    label='State'
                    variant='outlined'
                    width={300}
                    rules={{ required: true }}
                    className={classes.formControl}
                    name='destinationState'
                    value={values.destinationState}
                    error={errors.destinationState}
                    helperText={errors.destinationState && 'State is required'}
                    required
                  />
                </Grid>
                <Grid item lg={12} container className={classes.gridItem}>
                  <Box marginRight='10px'>
                    <Controller
                      as={TextField}
                      control={control}
                      id='outlined-basic'
                      label='Country'
                      variant='outlined'
                      width={300}
                      rules={{ required: true }}
                      className={classes.formControl}
                      name='destinationCountry'
                      value={values.destinationCountry}
                      error={errors.destinationCountry}
                      helperText={errors.destinationCountry && 'Country is required'}
                      required
                    />
                  </Box>

                  <Controller
                    as={TextField}
                    control={control}
                    id='outlined-basic'
                    label='Pincode'
                    variant='outlined'
                    width={300}
                    rules={{ required: true }}
                    className={classes.formControl}
                    name='destinationPincode'
                    value={values.destinationPincode}
                    error={errors.destinationPincode}
                    helperText={errors.destinationPincode && 'Pincode is required'}
                    required
                  />
                </Grid>
              </Grid>
              {/* ----------------------- */}

              <Grid
                item
                lg={12}
                container
                className={classes.gridItem}
                style={{ marginTop: '10px' }}
              >
                <legend>Other Details</legend>
                <Grid item lg={12} container className={classes.gridItem}>
                  <Box marginRight='10px'>
                    <Controller
                      as={TextField}
                      control={control}
                      id='outlined-basic'
                      label='Status'
                      variant='outlined'
                      width={300}
                      rules={{ required: true }}
                      className={classes.formControl}
                      name='status'
                      value={values.status}
                      error={errors.status}
                      helperText={errors.status && 'Status is required'}
                      required
                    />
                  </Box>

                  <Controller
                    as={TextField}
                    control={control}
                    id='outlined-basic'
                    label='Insurance P'
                    variant='outlined'
                    width={300}
                    rules={{ required: true }}
                    className={classes.formControl}
                    name='insuranceP'
                    value={values.insuranceP}
                    error={errors.insuranceP}
                    helperText={errors.insuranceP && 'Insurance is required'}
                    required
                  />
                </Grid>

                <Grid item lg={12} container className={classes.gridItem}>
                  <Box marginRight='10px'>
                    <Controller
                      as={TextField}
                      control={control}
                      id='outlined-basic'
                      label='Insurance A'
                      variant='outlined'
                      width={300}
                      rules={{ required: true }}
                      className={classes.formControl}
                      name='insuranceA'
                      value={values.insuranceA}
                      error={errors.insuranceA}
                      helperText={errors.insuranceA && 'Insurance is required'}
                      required
                    />
                  </Box>

                  <Controller
                    as={TextField}
                    control={control}
                    id='outlined-basic'
                    label='Type'
                    variant='outlined'
                    width={300}
                    rules={{ required: true }}
                    className={classes.formControl}
                    name='type'
                    value={values.type}
                    error={errors.type}
                    helperText={errors.type && 'Type is required'}
                    required
                  />
                </Grid>
                <Grid item lg={12} container className={classes.gridItem}>
                  <Box marginRight='10px'>
                    <Controller
                      as={TextField}
                      control={control}
                      id='outlined-basic'
                      label='Date'
                      variant='outlined'
                      width={300}
                      rules={{ required: true }}
                      className={classes.formControl}
                      name='date'
                      value={values.date}
                      error={errors.date}
                      helperText={errors.date && 'Date is required'}
                      required
                    />
                  </Box>
                  <Box width='100%'>
                    {/* <section>
                      <Controller
                        as={Checkbox}
                        type='checkbox'
                        name='car'
                        control={control}
                        // value={values.car}
                      />
                      <label>Tick this, if you want to add car</label>
                    </section> */}
                  </Box>
                </Grid>
              </Grid>

              <div className={classes.actionCont}>
                <Button className={classes.actionBtn} fullWidth type='submit'>
                  {isEditing ? 'Update Job' : 'Create Job'}
                </Button>
              </div>
            </form>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CreateJobForm;
