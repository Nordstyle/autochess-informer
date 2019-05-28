import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { styles } from './styles'

const Wrapper = ({ classes, children }) => (
  <Grid container className={classes.root}>
    <Grid item xs={11} sm={10}>
      { children }
    </Grid>
  </Grid>
);

export default withStyles(styles)(Wrapper);