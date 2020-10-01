import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CustomerInfoForm from '../CustomerInfoForm/CustomerInfoForm';
import InvoiceDetails from '../InvoiceDetails/InvoiceDetails';
import AdditionalDetails from '../AdditionalDetails/AdditionalDetails';

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

const QontoStepIcon = (props) => {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const getSteps = () => {
  return ['Customer Info', 'Invoice Details', 'Other details'];
};

const getStepContent = (stepProps) => {
  const { activeStep } = stepProps;
  switch (activeStep) {
    case 0:
      return <CustomerInfoForm {...stepProps} />;
    case 1:
      return <InvoiceDetails />;
    case 2:
      return <AdditionalDetails />;
    default:
      return 'Unknown step';
  }
};

const MultiStep = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [customerData, setCustomerData] = useState({});
  const [isDisabledNextStep, setIsDisabledNextStep] = useState(true);
  const [isDisabledPreviousStep, setIsDisabledPreviousStep] = useState(true);

  const steps = getSteps();

  // populate stepProps later when binding data in next task
  const stepProps = {
    // currentStep,
    // currentSubStep,
    // addSubStep,
    // goToNextStep,
    // goToSubStep,
    // isLastSubStep,
    isDisabledNextStep,
    setIsDisabledNextStep,
    isDisabledPreviousStep,
    setIsDisabledPreviousStep,

    activeStep,

    customerData,
    setCustomerData,
  };

  useEffect(() => {
    console.log({ stepProps });
  }, [stepProps, isDisabledNextStep]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {getStepContent(stepProps)}
            </div>
            <div
              style={{
                bottom: '50px',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                position: 'absolute',
              }}
            >
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                disabled={isDisabledNextStep}
                variant='contained'
                color='primary'
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStep;
