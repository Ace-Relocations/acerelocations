import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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

import {
  Visibility as VisibilityIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';

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

const AllJobsTable = ({ columns, data }) => {
  const classes = useStyles();
  const history = useHistory();

  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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

  // const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

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
  ];

  const createSortHandler = (property) => (event) => {
    console.log({ property, event });
    handleRequestSort(event, property);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='customized table'>
          <TableHead>
            <TableRow>
              {/* <StyledTableCell align='right'>Consignor</StyledTableCell>
              <StyledTableCell align='right'>Consignee</StyledTableCell>
              <StyledTableCell align='right'>Contact</StyledTableCell>
              <StyledTableCell align='right'>Email</StyledTableCell>
              <StyledTableCell align='right'>Status</StyledTableCell>
              <StyledTableCell align='right'>Type</StyledTableCell>
              <StyledTableCell align='right'>Date</StyledTableCell>
              <StyledTableCell align='right'>View</StyledTableCell>
              <StyledTableCell align='right'>Update</StyledTableCell>
              <StyledTableCell align='right'>Delete</StyledTableCell> */}
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
            {data.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align='center'>{row.gcnno}</StyledTableCell>
                <StyledTableCell align='center'>{row.consignor}</StyledTableCell>
                <StyledTableCell align='center'>{row.consignee}</StyledTableCell>
                <StyledTableCell align='center'>{row.contact}</StyledTableCell>
                <StyledTableCell align='center'>{row.email}</StyledTableCell>
                <StyledTableCell align='center'>{row.status}</StyledTableCell>
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
                  <IconButton
                    aria-label='edit'
                    onClick={() => {
                      history.push(`edit-job/${row.gcnno}`);
                    }}
                  >
                    <SvgIcon>
                      <EditIcon />
                    </SvgIcon>
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align='center'>
                  <IconButton
                    aria-label='delete'
                    onClick={() => {
                      alert(`Deleting ${row.gcnno}`);
                    }}
                  >
                    <SvgIcon>
                      <DeleteIcon />
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
    </>
  );
};

export default AllJobsTable;
