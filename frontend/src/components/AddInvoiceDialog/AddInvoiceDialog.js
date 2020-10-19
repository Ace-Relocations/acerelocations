import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Draggable from 'react-draggable';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid/index';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { getInvoiceRequest } from '../../actions';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const PaperComponent = (props) => {
  return (
    <Draggable handle='#draggable-dialog-title' cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const AddInvoiceDialog = ({
  openInvoice,
  handleAddInvoice,
  handleCancleInvoice,
  isEditing,
  gcnNo,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const invoice = useSelector((state) => state.Invoice);

  const [fields, setFields] = useState([
    {
      expense:
        'Transportation charges inclusive of allied services for your personal effects and car from ORIGIN to DESTINATION',
      amount: null,
      isChecked: false,
    },
    {
      expense:
        'Transportation charges inclusive of allied services for your personal effects from ORIGIN to DESTINATION',
      amount: null,
      isChecked: false,
    },
    {
      expense: 'Transportation charges for your Office effects from ORIGIN to DESTINATION',
      amount: null,
      isChecked: false,
    },
    {
      expense: 'Others',
      amount: null,
      isChecked: false,
    },
  ]);

  // const invoceData = useMemo(() => {
  //   return allJobs.filter(({ id }) => id === gcnNo);
  // }, [gcnNo]);

  const [validateExpenses, updateValidateExpenses] = useState(false);

  const handleChange = (i, event) => {
    const values = [...fields];
    values[i].expense = event.target.value;
    setFields(values);
  };

  const handleChangeAmount = (i, event) => {
    const values = [...fields];
    values[i].amount = event.target.value;
    setFields(values);
  };
  const handleChangeCheckbox = (i, event) => {
    const values = [...fields];
    values[i].isChecked = !values[i].isChecked;
    setFields(values);
  };

  const handleAdd = () => {
    const values = [...fields];
    values.push({ expense: null, amount: null });
    setFields(values);
  };

  const handleRemove = (i) => {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  };

  useEffect(() => {
    const isValid = Object.values(fields).some(({ isChecked, amount }) => {
      if (fields.length < 1) {
        return false;
      }
      return (isChecked == true && amount > 0) || (isChecked === false && amount === 0);
    });
    updateValidateExpenses(isValid);
  }, [fields]);

  // const isValid = fields.length > 0 && validateExpenses;
  const isValid = fields.length;

  return (
    <Dialog
      fullScreen
      open={openInvoice}
      onClose={handleCancleInvoice}
      PaperComponent={PaperComponent}
      aria-labelledby='draggable-dialog-title'
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge='start' color='inherit' onClick={handleCancleInvoice} aria-label='close'>
            <CloseIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Add Invoice
          </Typography>
          <Button
            autoFocus
            color='inherit'
            disabled={!isValid}
            onClick={() => handleAddInvoice(fields)}
          >
            save
          </Button>
        </Toolbar>
      </AppBar>
      <DialogTitle style={{ cursor: 'move' }} id='draggable-dialog-title'>
        Add More
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {fields.map((field, idx) => {
            return (
              <div key={`${field}-${idx}`} style={{ marginBottom: '10px' }}>
                <Grid container lg={12}>
                  <Grid item lg={6} md={6} container className={classes.gridItem}>
                    <Box marginRight='10px' fontSize='10px'>
                      {/* <TextField
                        type='text'
                        placeholder='Enter Expense'
                        label='Expense'
                        // variant='outlined'
                        // rows={2}
                        // multiline
                        name='expense'
                        value={field.expense || ''}
                        onChange={(e) => handleChange(idx, e)}
                        style={{ width: '600px' }}
                        disabled
                      /> */}
                      <TextareaAutosize
                        aria-label='Invoice'
                        rowsMin={3}
                        name='expense'
                        value={field.expense || ''}
                        disabled
                        style={{ width: '400px' }}
                      />
                    </Box>
                  </Grid>
                  <Grid item lg={4} md={4} container>
                    <Box width={150}>
                      <TextField
                        type='number'
                        placeholder='Enter Amount'
                        label='Amount'
                        variant='outlined'
                        name='amount'
                        value={field.amount || ''}
                        onChange={(e) => handleChangeAmount(idx, e)}
                        required
                        style={{ width: '150px !important' }}
                        inputStyle={{ width: '150px !important' }}
                        fullWidth={false}
                        disabled={!fields[idx].isChecked}
                      />
                    </Box>
                  </Grid>
                  <Grid item lg={2} md={2} container className={classes.gridItem}>
                    {/* <Button type='button' onClick={() => handleRemove(idx)}>
                      REMOVE
                    </Button> */}
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={fields[idx]?.isChecked || false}
                            onChange={(event) => handleChangeCheckbox(idx, event)}
                            name='add'
                          />
                        }
                        label='Add'
                      />
                    </FormGroup>
                  </Grid>
                </Grid>
              </div>
            );
          })}

          {/* <Button type='button' onClick={() => handleAdd()} marginBottom='10px'>
            Add More
          </Button> */}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancleInvoice} color='primary'>
          Cancel
        </Button>
        <Button onClick={() => handleAddInvoice(fields)} color='primary' disabled={!isValid}>
          Add Invoice
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddInvoiceDialog;
