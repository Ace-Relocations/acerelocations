import React, { useState, useRef, useCallback } from 'react';
import { Button, FormControl, Paper, Typography } from '@material-ui/core';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { PDFDownloadLink } from '@react-pdf/renderer';

import './CustomerInfoForm.css';
import Invoice from '../../Test/Invoice';

const CustomerInfoForm = () => {
  const [loginErrorMsg, updateLoginErrorMsg] = useState('');
  const [isFormValid, updateIsFormValid] = useState(false);
  const [customerDetails, updateCustomerDetails] = useState({
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
  });

  const formRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    updateCustomerDetails({ ...customerDetails, [name]: value });
    updateLoginErrorMsg('');
  };

  const submit = useCallback(() => {
    console.log({ customerDetails });
    updateIsFormValid(true);
  });

  return (
    <>
      <Paper className='paper-login'>
        <Typography component='h1' variant='h5'>
          Customer Info
        </Typography>
        <ValidatorForm
          ref={formRef}
          onSubmit={() => submit()}
          onError={(errors) => console.log(errors)}
        >
          <FormControl margin='normal' required fullWidth>
            <TextValidator
              label='First Name'
              onChange={handleChange}
              name='firstName'
              value={customerDetails.firstName}
              validators={['required']}
              errorMessages={['firstName is required.']}
            />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <TextValidator
              label='Last Name'
              onChange={handleChange}
              name='lastName'
              value={customerDetails.lastName}
              validators={['required']}
              errorMessages={['lastName is required.']}
            />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <TextValidator
              label='Address Line 1'
              onChange={handleChange}
              name='addressLine1'
              value={customerDetails.addressLine1}
              validators={['required']}
              errorMessages={['Addres is required.']}
            />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <TextValidator
              label='Address Line 2'
              onChange={handleChange}
              name='addressLine2'
              value={customerDetails.addressLine2}
            />
          </FormControl>
          <FormControl margin='normal' required fullWidth>
            <TextValidator
              label='Address Line 3'
              onChange={handleChange}
              name='addressLine2'
              value={customerDetails.addressLine3}
            />
          </FormControl>
          <span className='error-msg'>{loginErrorMsg}</span>
          <br />
          <br />
          <Button variant={'contained'} type='submit' className='form-button'>
            submit
          </Button>
        </ValidatorForm>
      </Paper>
      {/* {isFormValid && (
        <PDFDownloadLink document={<Invoice invoice={customerDetails} />} fileName='invoice.pdf'>
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      )} */}
    </>
  );
};

export default CustomerInfoForm;
