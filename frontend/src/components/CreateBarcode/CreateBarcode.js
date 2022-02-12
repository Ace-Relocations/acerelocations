import React, { useEffect, useRef, useState } from "react";
import JsBarcode from "jsbarcode";

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid/index';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Loader from '../Loader/Loader';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CreateBarcodePDF from './CreateBarcodePDF';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { barcodeRequest, getBarcodeRequest, updateBarcodeRequest } from '../../actions';

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

const CreateBarcode = (props) => {
  const classes = useStyles();
  const ref = useRef(null);
  const values = useState();
  const [isDownloadingPDF, updateIsDownloadingPDF] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();


  const { handleSubmit, control, errors, getValues, watch, reset } = useForm({
    mode: 'onChange',
  });
  


  useEffect(() => {
    // if (values.barcode) new Barcode(ref.current, value, props);
  });

//   if (renderer === "svg") {
//     return <svg ref={ref} />;
//   } else if (renderer === "canvas") {
//     return <canvas ref={ref} />;
//   } else if (renderer === "img") {
//     return <img ref={ref} />;
//   }

  const submit = (data) => {
    console.log({ data });
    dispatch(barcodeRequest(data));
    props.history.push({
        pathname: '/download-barcode',
        state: data
    });
    // history.push(`/download-barcode`);
    }

  return (
    <Grid container>
        {isDownloadingPDF ? (
        <PDFDownloadLink
          document={<CreateBarcodePDF invoice={values} />}
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

                <legend>Create a Barcode Sticker</legend>
                <Grid item lg={12} container className={classes.gridItem}>
                  <Box marginRight='10px'>
                    <Controller
                      control={control}
                      as={TextField}
                      id='outlined-basic'
                      label='Date'
                      variant='outlined'
                      width={300}
                      // rules={{ required: true }}
                      className={classes.formControl}
                      name='date'
                      value={values.date}
                      // error={errors.gcnno}
                      // helperText={errors.consignorF && 'GCNNO is required'}
                      // required
                    />
                  </Box>

                  <Controller
                    control={control}
                    as={TextField}
                    id='outlined-basic'
                    label='Company'
                    variant='outlined'
                    width={300}
                    // rules={{ required: true }}
                    className={classes.formControl}
                    name='company'
                    value={values.company}                
                  />
                </Grid>

                <Grid item lg={12} container className={classes.gridItem}>
                  <Box marginRight='10px'>
                    <Controller
                      control={control}
                      as={TextField}
                      id='outlined-basic'
                      label='From Location'
                      variant='outlined'
                      width={300}
                      // rules={{ required: true }}
                      className={classes.formControl}
                      name='fromLocation'
                      value={values.fromLocation}
                      // error={errors.gcnno}
                      // helperText={errors.consignorF && 'GCNNO is required'}
                      // required
                    />
                  </Box>

                  <Controller
                    control={control}
                    as={TextField}
                    id='outlined-basic'
                    label='From Floor'
                    variant='outlined'
                    width={300}
                    // rules={{ required: true }}
                    className={classes.formControl}
                    name='fromFloor'
                    value={values.fromFloor}                
                  />
                </Grid>

                <Grid item lg={12} container className={classes.gridItem}>
                  <Box marginRight='10px'>
                    <Controller
                      control={control}
                      as={TextField}
                      id='outlined-basic'
                      label='From Wing'
                      variant='outlined'
                      width={300}
                      // rules={{ required: true }}
                      className={classes.formControl}
                      name='fromWing'
                      value={values.fromWing}
                      // error={errors.gcnno}
                      // helperText={errors.consignorF && 'GCNNO is required'}
                      // required
                    />
                  </Box>

                  <Controller
                    control={control}
                    as={TextField}
                    id='outlined-basic'
                    label='Department'
                    variant='outlined'
                    width={300}
                    // rules={{ required: true }}
                    className={classes.formControl}
                    name='department'
                    value={values.department}                
                  />
                </Grid>

                <Grid item lg={12} container className={classes.gridItem}>
                  <Box marginRight='10px'>
                    <Controller
                      control={control}
                      as={TextField}
                      id='outlined-basic'
                      label='Emp. Code'
                      variant='outlined'
                      width={300}
                      // rules={{ required: true }}
                      className={classes.formControl}
                      name='empCode'
                      value={values.empCode}
                      // error={errors.gcnno}
                      // helperText={errors.consignorF && 'GCNNO is required'}
                      // required
                    />
                  </Box>

                  <Controller
                    control={control}
                    as={TextField}
                    id='outlined-basic'
                    label='Emp. Name'
                    variant='outlined'
                    width={300}
                    // rules={{ required: true }}
                    className={classes.formControl}
                    name='empName'
                    value={values.empName}                
                  />
                </Grid>

                 <Grid item lg={12} container className={classes.gridItem}>
                  <Box marginRight='10px'>
                    <Controller
                      control={control}
                      as={TextField}
                      id='outlined-basic'
                      label='Box'
                      variant='outlined'
                      width={300}
                      // rules={{ required: true }}
                      className={classes.formControl}
                      name='box'
                      value={values.box}
                      // error={errors.gcnno}
                      // helperText={errors.consignorF && 'GCNNO is required'}
                      // required
                    />
                  </Box>

                  <Controller
                    control={control}
                    as={TextField}
                    id='outlined-basic'
                    label='To Location'
                    variant='outlined'
                    width={300}
                    // rules={{ required: true }}
                    className={classes.formControl}
                    name='toLocation'
                    value={values.toLocation}                
                  />
                </Grid>  

                 <Grid item lg={12} container className={classes.gridItem}>
                  <Box marginRight='10px'>
                    <Controller
                      control={control}
                      as={TextField}
                      id='outlined-basic'
                      label='To Floor'
                      variant='outlined'
                      width={300}
                      // rules={{ required: true }}
                      className={classes.formControl}
                      name='toFloor'
                      value={values.toFloor}
                      // error={errors.gcnno}
                      // helperText={errors.consignorF && 'GCNNO is required'}
                      // required
                    />
                  </Box>

                  <Controller
                    control={control}
                    as={TextField}
                    id='outlined-basic'
                    label='To Wing'
                    variant='outlined'
                    width={300}
                    // rules={{ required: true }}
                    className={classes.formControl}
                    name='toWing'
                    value={values.toWing}                
                  />
                </Grid>  

                 <Grid item lg={12} container className={classes.gridItem}>
                  <Box marginRight='10px'>
                    <Controller
                      control={control}
                      as={TextField}
                      id='outlined-basic'
                      label='Workstation No'
                      variant='outlined'
                      width={300}
                      // rules={{ required: true }}
                      className={classes.formControl}
                      name='workstationNo'
                      value={values.workstationNo}
                      // error={errors.gcnno}
                      // helperText={errors.consignorF && 'GCNNO is required'}
                      // required
                    />
                  </Box>

                  <Controller
                    control={control}
                    as={TextField}
                    id='outlined-basic'
                    label='QR Details'
                    variant='outlined'
                    width={300}
                    // rules={{ required: true }}
                    className={classes.formControl}
                    name='qr'
                    value={values.qr}                
                  />
                </Grid>                  
                <div className={classes.actionCont}>
                  <Button className={classes.actionBtn} fullWidth type='submit'>
                    Download QR Code
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

export default CreateBarcode;