import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { styles } from './styles';

const FigureDetail = (props) => {
  const { classes } = props;
  const { name, avatar } = props.figure;
  console.log(props) 
  return ( 
    <Grid item>
      <Grid item >
        <Grid item>
          <img src={avatar} className={classes.avatar}/>
          <Grid item direction='row' justify='space-between'>
            <img src='/static/images/race/human.png' className={classes.supImages}/>
            <img src='/static/images/class/demon-hunter.png' className={classes.supImages}/>
          </Grid>
        </Grid>
        <Typography variant='subtitle2'>{name}</Typography>
      </Grid>
    </Grid>
  )
};

export default withStyles(styles)(FigureDetail);