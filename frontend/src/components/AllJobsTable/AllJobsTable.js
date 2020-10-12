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

const options = ['ongoing', 'completed'];

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(consignor, consignee, contact, email, status, type, date) {
  return { consignor, consignee, contact, email, status, type, date };
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

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

const AllJobsTable = ({
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

  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedGcnNo, updateSelectedGcnNo] = useState();
  const [selectedToDownloadGcnNo, updateSelectedToDownloadGcnNo] = useState();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

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

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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

  const headCells = [
    { id: 'gcnno', numeric: false, label: 'GCN No.' },
    { id: 'consignor', numeric: false, label: 'Consignor' },
    { id: 'consignee', numeric: false, label: 'Consignee' },
    { id: 'contact', numeric: false, label: 'Contact' },
    { id: 'email', numeric: false, label: 'Email' },
    { id: 'status', numeric: false, label: 'Status' },
    { id: 'type', numeric: false, label: 'Type' },
    { id: 'date', numeric: false, label: 'Date' },
    { id: 'view', numeric: false, label: 'View' },
    { id: 'update', numeric: false, label: 'Update' },
    { id: 'delete', numeric: false, label: 'Delete' },
    { id: 'download', numeric: false, label: 'Download' },
    { id: 'addInvoice', numeric: false, label: 'Add Invoice' },
    { id: 'addExpense', numeric: false, label: 'Add Expense' },
  ];

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  const getIconColor = (added) => (added ? 'green' : 'red');
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='customized table'>
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <StyledTableCell
                  key={headCell.id}
                  align={headCell.numeric ? 'right' : 'left'}
                  padding={headCell.disablePadding ? 'none' : 'default'}
                  sortDirection={orderBy === headCell.id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={createSortHandler(headCell.id)}
                  >
                    {headCell.label}
                    {orderBy === headCell.id ? (
                      <span className={classes.visuallyHidden}>
                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                      </span>
                    ) : null}
                  </TableSortLabel>
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align='center' width='200px'>
                  {row.gcnno}
                </StyledTableCell>
                <StyledTableCell align='center'>{row.consignorF}</StyledTableCell>
                <StyledTableCell align='center'>{row.consigneeF}</StyledTableCell>
                <StyledTableCell align='center'>{row.contact}</StyledTableCell>
                <StyledTableCell align='center'>{row.email}</StyledTableCell>
                <StyledTableCell
                  align='center'
                  onClick={() => handleClickListItem(row.status, row.gcnno)}
                  style={{ cursor: 'pointer' }}
                >
                  {row.status}
                </StyledTableCell>
                <StyledTableCell align='center'>{row.type}</StyledTableCell>
                <StyledTableCell align='center'>{row.date}</StyledTableCell>
                <StyledTableCell align='center'>
                  <IconButton
                    aria-label='view'
                    onClick={() => {
                      history.push(`view-job/${row.gcnno}`);
                    }}
                  >
                    <SvgIcon>
                      <VisibilityIcon />
                    </SvgIcon>
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <IconButton aria-label='edit' onClick={() => onEditJobClick(row.gcnno)}>
                    <SvgIcon>
                      <EditIcon />
                    </SvgIcon>
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <IconButton aria-label='delete' onClick={() => handleClickOpen(row.gcnno)}>
                    <SvgIcon>
                      <DeleteIcon />
                    </SvgIcon>
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <IconButton aria-label='download' onClick={() => handleOpenDownload(row.gcnno)}>
                    <SvgIcon>
                      <CloudDownloadIcon />
                    </SvgIcon>
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <IconButton
                    aria-label='invoice'
                    onClick={() => handleOpenInvoice(row.gcnno)}
                    style={{ color: getIconColor(row.isInvoiceAdded) }}
                    disabled={row.isInvoiceAdded}
                  >
                    <SvgIcon>
                      <MoneyIcon />
                    </SvgIcon>
                  </IconButton>
                </StyledTableCell>

                <StyledTableCell align='center'>
                  <IconButton
                    aria-label='invoice'
                    onClick={() => handleOpenExpenses(row.gcnno)}
                    style={{ color: getIconColor(row.isExpenseAdded) }}
                    disabled={row.isExpenseAdded}
                  >
                    <SvgIcon>
                      <MoneyIcon />
                    </SvgIcon>
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
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

export default AllJobsTable;
