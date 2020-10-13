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

const AllJobsTableV3 = ({}) => {
  return (
    <MaterialTable
      title='Multiple Actions Preview'
      icons={CustomMaterialTableIcons}
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
      ]}
      data={[
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
      ]}
      actions={[
        {
          icon: EditIcon,
          tooltip: 'Save User',
          onClick: (event, rowData) => alert('You saved ' + rowData.name),
        },
        {
          icon: 'delete',
          tooltip: 'Delete User',
          onClick: (event, rowData) => alert('You want to delete ' + rowData.name),
        },
      ]}
    />
  );
};

export default AllJobsTableV3;
