import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid/index';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Loader from '../Loader/Loader';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { useSelector } from 'react-redux';

import CreateJobPDF from '../CreateJobPDF/CreateJobPDF';

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
    gcnno,
    carGcnno,
    consignorF,
    consignorL,
    consigneeF,
    consigneeL,
    contact,
    email,
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
    insuranceCarP,
    insuranceCarA,
    type,
    date,
    items,
    gst,
    item,
  },
}) => {
  const classes = useStyles();
  const getDefaultValue = (isEditing, value) => (isEditing ? value : '');
  const [isDownloadingPDF, updateIsDownloadingPDF] = useState(false);
  const [jobDetails, updateJobDetails] = useState();
  const { job } = useSelector((state) => state.Job);

  // const onDownloadPDFNowClick = () => {
  //   isDownloadingPDF(false);
  // };
  const { handleSubmit, control, errors, getValues, watch, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      gcnno: getDefaultValue(isEditing, gcnno),
      carGcnno: getDefaultValue(isEditing, carGcnno),
      consignorF: getDefaultValue(isEditing, consignorF),
      consignorL: getDefaultValue(isEditing, consignorL),
      consigneeF: getDefaultValue(isEditing, consigneeF),
      consigneeL: getDefaultValue(isEditing, consigneeL),
      contact: getDefaultValue(isEditing, contact),
      email: getDefaultValue(isEditing, email),
      oaddress1: getDefaultValue(isEditing, oaddress1),
      oaddress2: getDefaultValue(isEditing, oaddress2),
      ocity: getDefaultValue(isEditing, ocity),
      ostate: getDefaultValue(isEditing, ostate),
      opincode: getDefaultValue(isEditing, opincode),
      daddress1: getDefaultValue(isEditing, daddress1),
      daddress2: getDefaultValue(isEditing, daddress2),
      dcity: getDefaultValue(isEditing, dcity),
      dstate: getDefaultValue(isEditing, dstate),
      dpincode: getDefaultValue(isEditing, dpincode),
      status: getDefaultValue(isEditing, status),
      insuranceP: getDefaultValue(isEditing, insuranceP),
      insuranceA: getDefaultValue(isEditing, insuranceA),
      insuranceCarP: getDefaultValue(isEditing, insuranceCarP),
      insuranceCarA: getDefaultValue(isEditing, insuranceCarA),
      items: getDefaultValue(isEditing, items),
      gst: getDefaultValue(isEditing, gst),
      item: getDefaultValue(isEditing, item),
      type: isEditing ? type : 'household',
      date: getDefaultValue(isEditing, date),
      car: isEditing ? car : true,
    },
  });
  
  const submit = (data) => {
    console.log({ data });
    updateJobDetails(data);
    if (isEditing) {
      onUpdateJob(data);
      // updateIsDownloadingPDF(true);
    } else {
      onCreateJob(data);
    }
  };

  watch(['username', 'password', 'car', 'type']);
  const values = getValues();

  return (
    <Grid container>
      {isDownloadingPDF ? (
        <PDFDownloadLink
          document={<CreateJobPDF invoice={{ firstName: 'sdf', LastName: 'sdfasdf' }} />}
          fileName='job.pdf'
        >
          {({ blob, url, loading, error }) =>
            loading ? <Loader /> : <Button>Download Now</Button>
          }
        </PDFDownloadLink>
      ) : (
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

                <legend>Job Document Numbers</legend>
                <Grid item lg={12} container className={classes.gridItem}>
                  <Box marginRight='10px'>
                    <Controller
                      as={TextField}
                      control={control}
                      id='outlined-basic'
                      label='GCNNO'
                      variant='outlined'
                      width={300}
                      // rules={{ required: true }}
                      className={classes.formControl}
                      name='gcnno'
                      value={values.gcnno}
                      // error={errors.gcnno}
                      // helperText={errors.consignorF && 'GCNNO is required'}
                      // required
                    />
                  </Box>

                  <Controller
                    as={TextField}
                    control={control}
                    id='outlined-basic'
                    label='CAR GCNNO'
                    variant='outlined'
                    width={300}
                    // rules={{ required: true }}
                    className={classes.formControl}
                    name='carGcnno'
                    value={values.carGcnno}                
                  />
                </Grid>

              <Grid item lg={12} container className={classes.gridItem}>
                <Box marginRight='10px'>
                  <Controller
                    as={TextField}
                    control={control}
                    id='outlined-basic'
                    label='Items'
                    variant='outlined'
                    width={300}
                    // rules={{ required: true }}
                    className={classes.formControl}
                    name='items'
                    value={values.items}
                  />
                </Box>

                <Controller
                    as={TextField}
                    control={control}
                    id='outlined-basic'
                    label='Company GST.No'
                    variant='outlined'
                    width={300}
                    // rules={{ required: true }}
                    className={classes.formControl}
                    name='gst'
                    value={values.gst}                
                  />
              </Grid>

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
                      name='consignorF'
                      defaultValue='Mr '
                      value={values.consignorF}
                      error={errors.consignorF}
                      helperText={errors.consignorF && 'FirstName is required'}
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
                    // rules={{ required: true }}
                    className={classes.formControl}
                    name='consignorL'
                    value={values.consignorL}
                    // error={errors.consignorL}
                    // helperText={errors.consignorL && 'LastName is required'}
                    // required
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
                        name='consigneeF'
                        value={values.consigneeF}
                        error={errors.consigneeF}
                        helperText={errors.consigneeF && 'FirstName is required'}
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
                      // rules={{ required: true }}
                      className={classes.formControl}
                      name='consigneeL'
                      value={values.consigneeL}
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
                        rules={{
                          required: true,
                          minLength: 10,
                          maxLength: 12,
                          pattern: /^\d{10}$/,
                        }}
                        className={classes.formControl}
                        name='contact'
                        value={values.contact}
                        error={errors.contact}
                        helperText={errors.contact && 'This number is not valid'}
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
                      rules={{ pattern: /^\S+@\S+$/i }}
                      className={classes.formControl}
                      name='email'
                      value={values.email}
                      helperText={errors.contact && 'This Email is not valid'}
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
                        // rules={{ required: true }}
                        className={classes.formControl}
                        name='oaddress1'
                        value={values.oaddress1}
                      />
                    </Box>

                    <Controller
                      as={TextField}
                      control={control}
                      id='outlined-basic'
                      label='Address Line 2'
                      variant='outlined'
                      width={300}
                      // rules={{}}
                      className={classes.formControl}
                      name='oaddress2'
                      value={values.oaddress2}
                      // error={errors.oaddress2}

                      // helperText={errors.oaddress2 && 'Address is required'}
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
                        name='ocity'
                        value={values.ocity}
                        error={errors.ocity}
                        helperText={errors.ocity && 'City is required'}
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
                      // rules={{ required: true }}
                      className={classes.formControl}
                      name='ostate'
                      value={values.ostate}
                    />
                  </Grid>
                  <Grid item lg={12} container className={classes.gridItem}>
                    {/* <Box marginRight='10px'>
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
                    </Box> */}

                    <Box>
                      <Controller
                        as={TextField}
                        control={control}
                        id='outlined-basic'
                        label='Pincode'
                        variant='outlined'
                        width={300}
                        // rules={{ required: true }}
                        className={classes.formControl}
                        name='opincode'
                        value={values.opincode}
                      />
                    </Box>
                    <Box width='100%'></Box>
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
                        // rules={{ required: true }}
                        className={classes.formControl}
                        name='daddress1'
                        value={values.daddress1}
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
                      name='daddress2'
                      value={values.daddress2}
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
                        name='dcity'
                        value={values.dcity}
                        error={errors.dcity}
                        helperText={errors.dcity && 'City is required'}
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
                      // rules={{ required: true }}
                      className={classes.formControl}
                      name='dstate'
                      value={values.dstate}
                    />
                  </Grid>
                  <Grid item lg={12} container className={classes.gridItem}>
                    <Box>
                      {/* <Controller
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
                      /> */}
                    </Box>

                    <Controller
                      as={TextField}
                      control={control}
                      id='outlined-basic'
                      label='Pincode'
                      variant='outlined'
                      width={300}
                      // rules={{ required: true }}
                      className={classes.formControl}
                      name='dpincode'
                      value={values.dpincode}
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
                      <FormControl variant='outlined' className={classes.formControl}>
                        <InputLabel id='Type' paddingLeft='10px'>
                          Type
                        </InputLabel>
                        <Controller
                          as={
                            <Select labelId='type' label='Type' value={values.type}>
                              <MenuItem value='household' selected>
                                Household
                              </MenuItem>
                              <MenuItem value='car'>Car</MenuItem>
                              <MenuItem value='both'>Both</MenuItem>
                            </Select>
                          }
                          id='type'
                          name='type'
                          className={classes.textField}
                          control={control}
                          error={!!errors.type}
                          defaultValue='household'
                          variant='outlined'
                          margin='normal'
                          helperText={errors.date && 'Date is required'}
                          required
                        />
                      </FormControl>
                    </Box>

                    <Controller
                      as={TextField}
                      control={control}
                      id='outlined-basic'
                      label='Household Insurance Percentage'
                      variant='outlined'
                      width={300}
                      className={classes.formControl}
                      name='insuranceP'
                      value={values.insuranceP}
                      error={errors.insuranceP}
                      helperText={errors.insuranceP && 'Insurance percentage is required'}
                      required
                    />
                  </Grid>

                  <Grid item lg={12} container className={classes.gridItem}>
                    <Box marginRight='10px'>
                      <Controller
                        as={TextField}
                        control={control}
                        id='outlined-basic'
                        label='Household Insurance Amount'
                        variant='outlined'
                        width={300}
                        rules={{ required: true }}
                        className={classes.formControl}
                        name='insuranceA'
                        value={values.insuranceA}
                        error={errors.insuranceA}
                        helperText={errors.insuranceA && 'Insurance amount is required'}
                        required
                      />
                    </Box>

                    <Controller
                      as={TextField}
                      control={control}
                      id='outlined-basic'
                      label='Car Insurance Percentage'
                      variant='outlined'
                      width={300}
                      className={classes.formControl}
                      name='insuranceCarP'
                      value={values.insuranceCarP}
                    />
                  </Grid>

                  <Grid item lg={12} container className={classes.gridItem}>
                    <Box marginRight='10px'>
                      <Controller     
                        as={TextField}
                        control={control}
                        id='outlined-basic'
                        label='Car Insurance Amount'
                        variant='outlined'
                        width={300}
                        className={classes.formControl}
                        name='insuranceCarA'
                        value={values.insuranceCarA}
                      />
                    </Box>

                    <Box>
                      <Typography lineHeight='10px'>Date</Typography>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <FormControl variant='outlined' className={classes.formControl}>
                          <Controller
                            as={
                              <KeyboardDatePicker
                                disableToolbar
                                variant='inline'
                                format='dd/MM/yyyy'
                                margin='normal'
                                id='date-picker-inline'
                                value={values.date}
                                KeyboardButtonProps={{
                                  'aria-label': 'change date',
                                }}
                              />
                            }
                            control={control}
                            id='outlined-basic'
                            label=''
                            // label='Date picker inline'
                            // variant='outlined'
                            width={300}
                            rules={{ required: true }}
                            className={classes.formControl}
                            name='date'
                            // value={values.date}
                            error={errors.date}
                            helperText={errors.date && 'Date is required'}
                            required
                          />
                        </FormControl>
                      </MuiPickersUtilsProvider>
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
      )}
    </Grid>
  );
};

export default CreateJobForm;
