import React, { useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid/index';
import Typography from '@material-ui/core/Typography';

import ViewBarcodeTable from './ViewBarcodeTable';

import {
  allBarcodeRequest,
  deleteBarcodeRequest,
  getBarcodeRequest,
} from '../../actions';

const useStyles = makeStyles((theme) => ({
  introBox: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '130px',
    marginTop: '60px',
    fontFamily: 'Roboto Mono, monospace',
  },
  primaryText: {
    fontSize: '35px',
    fontWeight: 'bold',
  },
  secondaryText: {
    position: 'relative',
    top: '-10px',
    opacity: '.78',
  },
  formBox: {
    dispaly: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(5),
  },
}));

const ViewBarcode = ({ match }) => {
  const classes = useStyles();
  const history = useHistory();

  const [isChanged, updateIsChanged] = useState(true);
  const dispatch = useDispatch();
  const { allBarcodes, barcode } = useSelector((state) => state.Barcode);
  console.log("All Barcodes:", allBarcodes);

  const loading = useSelector((state) => state.Loader);

  const barcodeIds = allBarcodes.map(({ id }) => id).join(',');

  const onDeleteBarcode = useCallback((selectedEmpCode) => {
    updateIsChanged(true);
    dispatch(deleteBarcodeRequest(selectedEmpCode));
  });
  

  useEffect(() => {
    if (!isChanged) {
      dispatch(allBarcodeRequest());
    }
    updateIsChanged(false);
  }, [dispatch, isChanged]);

  const data = React.useMemo(() => {
    return allBarcodes;
  }, [allBarcodes]);

  const onEditBarcodeClick = useCallback((empCode) => {
    updateIsChanged(true);
    dispatch(getBarcodeRequest(empCode));
    history.push(`${match.path}/edit/${empCode}`);
  });


  return (
    <Grid container>
      <Grid item lg={12} container className={classes.gridItem}>
        <Box className={classes.introBox}>
          <div>
            <Typography variant='h3' component='h1' className={classes.primaryText}>
              All Barcodes
              <Typography variant='h3' className={classes.primaryText}></Typography>
              <Typography variant='h6' component='span' className={classes.secondaryText}>
                List of all Barcodes
              </Typography>
            </Typography>
          </div>
        </Box>
      </Grid>
      <Grid item lg={12} container className={classes.gridItem}>
        <Box component='div' style={{ minWidth: '700px' }}>
          <CssBaseline />

          <ViewBarcodeTable
            data={data}
            onDeleteBarcode={(gcnNo) => onDeleteBarcode(gcnNo)}
            match={match}
            onEditBarcodeClick={onEditBarcodeClick}
            isLoading={loading}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ViewBarcode;
