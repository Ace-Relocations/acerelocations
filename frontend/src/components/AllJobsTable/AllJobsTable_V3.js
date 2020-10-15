import React, { useState, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { PDFDownloadLink } from '@react-pdf/renderer';

import AddInvoiceDialog from '../AddInvoiceDialog/AddInvoiceDialog';
import Invoice from '../../Test/Invoice';
import HorizontalLoader from '../HorizontalLoader/HorizontalLoader';
import {
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  CloudDownload as CloudDownloadIcon,
  Money as MoneyIcon,
} from '@material-ui/icons';
import AddExpenseDialog from '../AddExpenseDialog/AddExpenseDialog';
import MaterialTable from 'material-table';
import CustomMaterialTableIcons from '../CustomMaterialTableIcons/CustomMaterialTableIcons';

const headCells = [
  { field: 'gcnno', title: 'GCN No.', type: 'numeric' },
  { field: 'consignor', title: 'Consignor' },
  { field: 'consignee', title: 'Consignee' },
  { field: 'contact', title: 'Contact' },
  { field: 'email', title: 'Email' },
  { field: 'status', title: 'Status' },
  { field: 'type', title: 'Type' },
  { field: 'date', title: 'Date', type: 'date' },
  //   { title: 'view',  title: 'View' },
  //   { title: 'update',  title: 'Update' },
  //   { title: 'delete',  title: 'Delete' },
  //   { title: 'download',  title: 'Download' },
  //   { title: 'addInvoice',  title: 'Add Invoice' },
  //   { title: 'addExpense',  title: 'Add Expense' },
];

const options = ['ongoing', 'completed'];

const ConfirmationDialogRaw = (props) => {
  const { onClose, value: valueProp, open, gcnNo, onUpdateJobStatus, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);
  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onUpdateJobStatus(value.status, gcnNo);
    onClose(value);
  };

  const handleChange = (event) => {
    setValue({ ...value, status: event.target.value });
  };

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth='md'
      onEntering={handleEntering}
      aria-labelledby='confirmation-dialog-title'
      open={open}
      {...other}
    >
      <DialogTitle id='confirmation-dialog-title'>Change Status</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label='ringtone'
          name='ringtone'
          value={value}
          onChange={handleChange}
        >
          {options.map((option) => (
            <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} color='primary'>
          Cancel
        </Button>
        <Button onClick={handleOk} color='primary'>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const AllJobsTableV3 = ({
  data,
  onDeleteJob,
  onUpdateJobStatus,
  onAddInvoiceClick,
  match,
  onEditJobClick,
  isLoading,
  onAddExpenseClick,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedGcnNo, updateSelectedGcnNo] = useState();
  const [selectedToDownloadGcnNo, updateSelectedToDownloadGcnNo] = useState();

  const [open, setOpen] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [openDownload, setOpenDownload] = useState(false);
  const [openInvoice, setOpenInvoice] = useState(false);
  const [openExpense, setOpenExpense] = useState(false);

  const [valueStatus, setValueStatus] = useState();

  const { job, allJobs } = useSelector((state) => state.Job);

  const handleClickListItem = (value, gcnno) => {
    setOpenStatus(true);
    setValueStatus(value);
    updateSelectedGcnNo(gcnno);
  };

  const handleCloseStatus = (newValue) => {
    setOpenStatus(false);

    if (newValue) {
      setValueStatus(newValue);
    }
  };

  const handleClickOpen = (gsnNo) => {
    updateSelectedGcnNo(gsnNo);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseDownload = () => {
    setOpenDownload(false);
  };

  const handleOpenDownload = (gcnNo) => {
    updateSelectedToDownloadGcnNo(gcnNo);
    setOpenDownload(true);
  };

  const handleDeleteClick = () => {
    onDeleteJob(selectedGcnNo);
    setOpen(false);
  };

  const handleOpenInvoice = (gcnno) => {
    updateSelectedGcnNo(gcnno);
    setOpenInvoice(true);
  };

  const handleAddInvoice = (data) => {
    console.log({ data });
    onAddInvoiceClick(data, selectedGcnNo);
    setOpenInvoice(false);
  };

  const handleCancleInvoice = () => {
    setOpenInvoice(false);
  };

  const handleOpenExpenses = (gcnno) => {
    updateSelectedGcnNo(gcnno);
    setOpenExpense(true);
  };

  const handleAddExpenses = (data) => {
    onAddExpenseClick(data, selectedGcnNo);
    setOpenExpense(false);
  };

  const handleCancleExpenses = () => {
    setOpenExpense(false);
  };

  const selectedJob = useMemo(() => {
    return allJobs.find(({ gcnno }) => gcnno === selectedToDownloadGcnNo);
  }, [updateSelectedToDownloadGcnNo, handleOpenDownload]);

  const getIconColor = (added) => (added ? 'green' : 'red');

  return (
    <>
      <MaterialTable
        title='List of all Jobs'
        icons={CustomMaterialTableIcons}
        columns={headCells}
        data={data}
        actions={[
          {
            icon: VisibilityIcon,
            tooltip: 'View Job',
            onClick: (event, rowData) => history.push(`view-job/${rowData.gcnno}`),
          },
          {
            icon: EditIcon,
            tooltip: 'Edit Job',
            onClick: (event, rowData) => onEditJobClick(rowData.gcnno),
          },
          {
            icon: DeleteIcon,
            tooltip: 'Delete Job',
            onClick: (event, rowData) => handleClickOpen(rowData.gcnno),
          },
          {
            icon: CloudDownloadIcon,
            tooltip: 'Download Job',
            onClick: (event, rowData) => handleOpenDownload(rowData.gcnno),
          },
          {
            // icon: <MoneyIcon style={{ color: getIconColor(isInvoiceAdded) }} />,
            icon: MoneyIcon,
            tooltip: 'Create Invoice',
            onClick: (event, rowData) => handleOpenInvoice(rowData.gcnno),
          },
          {
            icon: MoneyIcon,
            tooltip: 'Create Expenses',
            onClick: (event, rowData) => handleOpenExpenses(rowData.gcnno),
          },
        ]}
        options={{
          actionsColumnIndex: -1,
        }}
      />

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>
          {'Are you sure, you want to detete this job?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>This will delete job permanently</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleDeleteClick} color='primary'>
            yes
          </Button>
          <Button onClick={handleClose} color='primary' autoFocus>
            cancle
          </Button>
        </DialogActions>
      </Dialog>

      <ConfirmationDialogRaw
        classes={{
          paper: classes.paper,
        }}
        id='ringtone-menu'
        keepMounted
        open={openStatus}
        onClose={handleCloseStatus}
        value={valueStatus}
        gcnNo={selectedGcnNo}
        onUpdateJobStatus={onUpdateJobStatus}
      />

      <Dialog
        fullScreen={fullScreen}
        open={openDownload}
        onClose={handleCloseDownload}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>{'Converting to PDF'}</DialogTitle>
        <DialogContent>
          <PDFDownloadLink document={<Invoice invoice={selectedJob} />} fileName='invoice.pdf'>
            {({ blob, url, loading, error }) =>
              loading ? <HorizontalLoader /> : <Button>Download Now</Button>
            }
          </PDFDownloadLink>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDownload} color='primary' autoFocus>
            cancle
          </Button>
        </DialogActions>
      </Dialog>

      {openInvoice && (
        <AddInvoiceDialog
          openInvoice={openInvoice}
          handleAddInvoice={handleAddInvoice}
          handleCancleInvoice={handleCancleInvoice}
        />
      )}

      {openExpense && (
        <AddExpenseDialog
          openExpense={openExpense}
          handleAddExpenses={handleAddExpenses}
          handleCancleExpenses={handleCancleExpenses}
        />
      )}
    </>
  );
};

export default AllJobsTableV3;
