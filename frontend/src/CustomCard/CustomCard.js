import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const CustomCard = ({ title, value }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ marginTop: '10px' }} variant='outlined'>
      <CardContent>
        <Typography variant='h5' component='span' className={classes.secondaryText}>
          {title}
        </Typography>
        <Typography variant='h3' component='h2' style={{ marginTop: '20px' }}>
          {value}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions> */}
    </Card>
  );
};

export default CustomCard;
