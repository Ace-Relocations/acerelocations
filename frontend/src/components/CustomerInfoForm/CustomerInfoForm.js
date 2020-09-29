import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Button, FormControl, Paper, Typography, TextField } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';

import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { PDFDownloadLink } from '@react-pdf/renderer';

import './CustomerInfoForm.css';
import Invoice from '../../Test/Invoice';

const CustomerInfoForm = () => {
  const [loginErrorMsg, updateLoginErrorMsg] = useState('');
  const [isFormValid, updateIsFormValid] = useState(false);

  const formRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    // updateCustomerDetails({ ...customerDetails, [name]: value });
    setCustomerData({ customerData: { ...customerData, [name]: value } });
    updateLoginErrorMsg('');
  };

  const onSubmit = useCallback((data) => {
    // setCustomerData(customerDetails);
    console.log(data);
    // setCustomerData({ ...customerData, ...data });
    updateIsFormValid(true);
  });

  useEffect(() => {
    if (isFormValid) {
      setIsDisabledNextStep(false);
    }
  }, [isFormValid, customerData, setCustomerData]);

  return (
    <>
      <div variant='outlined'>
        <Typography
          component='h1'
          variant='h5'
          style={{ textAlign: 'center', marginBottom: '20px', marginTop: '20px' }}
        >
          Customer Info
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextField
              id='outlined-email-input-required'
              label='First Name'
              onChange={handleChange}
              type='text'
              name='firstName'
              value={customerData.firstName}
              validators={['required']}
              variant='outlined'
              error={!!errors.firstName}
            />
            <p>{errors.firstName && 'firstName is required.'}</p>
          </div>

          <div>
            <TextField
              id='outlined-email-input-required'
              label='Last Name'
              onChange={handleChange}
              type='text'
              name='lastName'
              value={customerData.lastName}
              validators={['required']}
              variant='outlined'
              error={!!errors.lastName}
            />
            <p>{errors.lastName && 'lastName is required.'}</p>
          </div>

          {/* <div>
            <Controller
              rules={{ required: true }}
              control={control}
              label='Email'
              type='email'
              name='email'
              error={!!errors.email}
              render={({ onChange, value }) => (
                <TextField
                  id='outlined-email-input-required'
                  autoComplete='email'
                  value={customerData.email}
                  variant='outlined'
                  inputRef={register({
                    pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
              )}
            />

            <p>{errors.email && 'invalid email.'}</p>
          </div> */}

          <div>
            <TextField
              id='outlined-email-input-required'
              label='Address 1'
              onChange={handleChange}
              type='text'
              name='addressLine1'
              value={customerData.addressLine1}
              validators={['required']}
              variant='outlined'
              error={!!errors.addressLine1}
            />
            <p>{errors.addressLine1 && 'addres is required.'}</p>
          </div>

          <div>
            <TextField
              id='outlined-email-input-required'
              label='Address Line 2'
              onChange={handleChange}
              type='text'
              name='addressLine2'
              value={customerData.addressLine2}
              variant='outlined'
            />
          </div>

          <div style={{ margin: '15px auto' }}>
            <TextField
              id='outlined-email-input-required'
              label='Address Line 3'
              onChange={handleChange}
              type='text'
              name='addressLine3'
              value={customerData.addressLine3}
              variant='outlined'
            />
          </div>

          <div>
            <Button type='submit' size='large' variant='contained'>
              Next
            </Button>
          </div>
        </form>

        {/* <ValidatorForm
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
          </FormControl> */}
        {/* <span className='error-msg'>{loginErrorMsg}</span> */}
        <br />
        <br />
        {/* <Button variant={'contained'} type='submit' className='form-button'>
          submit
        </Button> */}
        {/* </ValidatorForm> */}
      </div>
      {/* {isFormValid && (
        <PDFDownloadLink document={<Invoice invoice={customerDetails} />} fileName='invoice.pdf'>
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>
      )} */}
    </>
  );
};

export default CustomerInfoForm;
