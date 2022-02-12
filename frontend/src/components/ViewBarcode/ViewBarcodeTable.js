import React, { useState, useMemo, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
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
import SearchInput from '../SearchInput/SearchInput';

import HorizontalLoader from '../HorizontalLoader/HorizontalLoader';
import {
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  CloudDownload as CloudDownloadIcon,
  Money as MoneyIcon,
} from '@material-ui/icons';

import CreateBarcodePDF from '../CreateBarcode/CreateBarcodePDF';

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
    '&:nth-of-fromLocation(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(empName, consignee, toLocation, box, status, fromLocation, date) {
  return { empName, consignee, toLocation, box, status, fromLocation, date };
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const ConfirmationDialogRaw = (props) => {
  const { onClose, value: valueProp, open, empCode, onUpdateBarcodeStatus, ...other } = props;
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
    onUpdateBarcodeStatus(value.status, empCode);
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

const AllBarcodesTable = ({
  data,
  onDeleteBarcode,
  onUpdateBarcodeStatus,
  onAddInvoiceClick,
  match,
  onEditBarcodeClick,
  isLoading,
  onAddExpenseClick,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [selectedEmpCode, updateSelectedEmpCode] = useState();
  const [selectedToDownloadEmpCode, updateSelectedToDownloadEmpCode] = useState();
  const [selectedInoiceDownloadEmpCode, updateSelectedInoiceDownloadEmpCode] = useState();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [openStatus, setOpenStatus] = useState(false);
  const [openDownload, setOpenDownload] = useState(false);
  const [openDownloadInvoice, setOpenDownloadInvoice] = useState(false);
  const [openInvoice, setOpenInvoice] = useState(false);
  const [openExpense, setOpenExpense] = useState(false);
  const [selectedInvoiceStatus, updateSelectedInvoiceStatus] = useState();
  const [selectedExpenseStatus, updateSelectedExpenseStatus] = useState();
  const [isSearching, updateIsSearching] = useState(false);
  const [searchedTableData, updateSearchedTableData] = useState([]);


  const [valueStatus, setValueStatus] = useState();

  const { barcode, allBarcodes } = useSelector((state) => state.Barcode);

  const handleClickListItem = (value, empCode) => {
    setOpenStatus(true);
    setValueStatus(value);
    updateSelectedEmpCode(empCode);
  };

  const handleCloseStatus = (newValue) => {
    setOpenStatus(false);

    if (newValue) {
      setValueStatus(newValue);
    }
  };

  const handleClickOpen = (gsnNo) => {
    updateSelectedEmpCode(gsnNo);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseDownload = () => {
    setOpenDownload(false);
  };

  const handleOpenDownload = (empCode) => {
    updateSelectedToDownloadEmpCode(empCode);
    setOpenDownload(true);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'desc';
    setOrder(isAsc ? 'asc' : 'desc');
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
    onDeleteBarcode(selectedEmpCode);
    setOpen(false);
  };

  const debug = (val) => {
    console.log(val);
  };

  const selectedBarcode = useMemo(() => {
    return allBarcodes.find(({ empCode }) => empCode === selectedToDownloadEmpCode);
  }, [allBarcodes, selectedToDownloadEmpCode]);

  const headCells = [
    { id: 'empCode', numeric: false, label: 'Emp Code.' },
    { id: 'empName', numeric: false, label: 'Emp Name' },
    { id: 'view', numeric: false, label: 'View' },
    { id: 'update', numeric: false, label: 'Update' },
    { id: 'delete', numeric: false, label: 'Delete' },
    { id: 'download', numeric: false, label: 'Download' },
    { id: 'date', numeric: false, label: 'Date' },
    { id: 'fromLocation', numeric: false, label: 'From' },
    { id: 'toLocation', numeric: false, label: 'Location' },
    { id: 'box', numeric: false, label: 'Box' },
  ];

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {

    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {

    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(b[0], a[0]);
      if (order !== 0) return order;
      return b[1] - a[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  const getIconColor = (added) => (added ? 'green' : 'red');

  const handleSearchRequest = (value) => {
    updateIsSearching(true)
    const newJObs = allBarcodes.filter(barcode => {
      const regex = new RegExp(value, 'gi');
      return Object.values(barcode).some((barcodeItem) => {
        if(barcodeItem) {
        return barcodeItem.toString().match(regex);
        } else {
          return false;
        }
      })
    });
    updateSearchedTableData(newJObs);
  }

  const getTableData = useMemo(() => {
    if (isSearching) {
      return searchedTableData;
    } else {
      return data;
    }
  }, [handleSearchRequest])

  return (
    <>
      <div style={{ marginBottom: '10px' }}>
        <SearchInput
          onSearching={(value) => handleSearchRequest(value)}
        />
      </div>

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
                    direction={orderBy === headCell.id ? order : 'desc'}
                    onClick={createSortHandler(headCell.id)}
                    style={{ color: 'white' }}
                  >
                    {headCell.label}
                    {orderBy === headCell.id ? (
                      <span className={classes.visuallyHidden} style={{ color: 'black' }}>
                        {order === 'asc' ? 'd' : 'a'}
                      </span>
                    ) : null}
                  </TableSortLabel>
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(getTableData, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell align='center' width='200px'>
                    {row.empCode}
                  </StyledTableCell>
                  <StyledTableCell align='center'>{row.empName}</StyledTableCell>
                  <StyledTableCell align='center'>
                    <IconButton
                      aria-label='view'
                      onClick={() => {
                        history.push(`view-barcode/${row.empCode}`);
                      }}
                    >
                      <SvgIcon>
                        <VisibilityIcon />
                      </SvgIcon>
                    </IconButton>
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <IconButton aria-label='edit' onClick={() => onEditBarcodeClick(row.empCode)}>
                      <SvgIcon>
                        <EditIcon />
                      </SvgIcon>
                    </IconButton>
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <IconButton aria-label='delete' onClick={() => handleClickOpen(row.empCode)}>
                      <SvgIcon>
                        <DeleteIcon />
                      </SvgIcon>
                    </IconButton>
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <IconButton aria-label='download' onClick={() => handleOpenDownload(row.empCode)}>
                      <SvgIcon>
                        <CloudDownloadIcon />
                      </SvgIcon>
                    </IconButton>
                  </StyledTableCell>
                  <StyledTableCell align='center'>{row.date}</StyledTableCell>
                  <StyledTableCell align='center'>{row.fromLocation}</StyledTableCell>
                  <StyledTableCell align='center'>{row.toLocation}</StyledTableCell>
                  <StyledTableCell align='center'>{row.box}</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
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
          {'Are you sure, you want to detete this barcode?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>This will delete barcode permanently</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleDeleteClick} color='primary'>
            yes
          </Button>
          <Button onClick={handleClose} color='primary' autoFocus>
            cancel
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
        empCode={selectedEmpCode}
        onUpdateBarcodeStatus={onUpdateBarcodeStatus}
      />

      <Dialog
        fullScreen={fullScreen}
        open={openDownload}
        onClose={handleCloseDownload}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>{'Converting to PDF'}</DialogTitle>
        <DialogContent>
          {/* <Invoice barcode={selectedBarcode} /> */}
          { selectedBarcode ?.empCode ?
          <PDFDownloadLink
            document={<CreateBarcodePDF barcode={selectedBarcode} />}
            fileName={`${selectedBarcode ?.empCode}_$${selectedBarcode ?.empName}_barcodeDocs.pdf`}
          >
            {({ blob, url, loading, error }) =>
              loading ? <HorizontalLoader /> : <Button>Download Now</Button>
            }
          </PDFDownloadLink> : 
          selectedBarcode ?.empCode ?
           <PDFDownloadLink
             document={<CreateBarcodePDF barcode={selectedBarcode} />}
             fileName={`${selectedBarcode ?.empCode}_$${selectedBarcode ?.empName}_barcodeDocs.pdf`}
           >
           {({ blob, url, loading, error }) =>
             loading ? <HorizontalLoader /> : <Button>Download Now</Button>
           }
         </PDFDownloadLink> :
         <PDFDownloadLink
          document={<CreateBarcodePDF barcode={selectedBarcode} />}
          fileName={`${selectedBarcode ?.empCode}_$${selectedBarcode ?.empName}_barcodeDocs.pdf`}
         >
         {({ blob, url, loading, error }) =>
           loading ? <HorizontalLoader /> : <Button>Download Now</Button>
         }
       </PDFDownloadLink>
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDownload} color='primary' autoFocus>
            cancle
          </Button>
        </DialogActions>
      </Dialog>

    </>
  );
};

export default AllBarcodesTable;
