import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Appbar: {
    background: 'transparent',
    boxShadow: 'none',
  },
  menuButton: {
    marginLeft: theme.spacing(9),
  },
  title: {
    flexGrow: 1,
    color: '#EE4143',
  },
  toolbar: {
    background: 'white',
  },
  actionBtn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 40,
    padding: '0 20px 0 20px',
  },
  actionBtnIcon: {
    marginLeft: '10px',
  },
}));

const CustomButton = ({ minWidth }) => {
  const classes = useStyles();

  return (
    <Button className={classes.actionBtn} style={{ minWidth: minWidth }}>
      Sign up
    </Button>
  );
};

CustomButton.propTypes = {
  minWidth: PropTypes.string,
};

CustomButton.defaultProps = {
  minWidth: '160px',
};
export default CustomButton;
