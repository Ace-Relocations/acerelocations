import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Draggable from 'react-draggable';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const PaperComponent = (props) => {
  return (
    <Draggable handle='#draggable-dialog-title' cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
};

const AddInvoiceDialog = ({ openInvoice, handleAddInvoice, handleCancleInvoice }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  //   const [openInvoice, setOpenInvoice] = useState(false);

  //   const handleAddInvoice = () => {
  //     setOpenInvoice(true);
  //   };

  //   const handleCancleInvoice = () => {
  //     setOpenInvoice(false);
  //   };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={openInvoice}
      onClose={handleCancleInvoice}
      PaperComponent={PaperComponent}
      aria-labelledby='draggable-dialog-title'
    >
      <DialogTitle style={{ cursor: 'move' }} id='draggable-dialog-title'>
        Subscribe
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We will send updates
          occasionally.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancleInvoice} color='primary'>
          Cancel
        </Button>
        <Button onClick={handleAddInvoice} color='primary'>
          Subscribe
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddInvoiceDialog;
