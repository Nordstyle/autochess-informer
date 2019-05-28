import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    flexGrow: 1,
    background: 'url(/static/images/index/gamepad.png), url(/static/images/index/techies.png)',
    backgroundSize: 'contain, contain',
    backgroundPosition: 'left center, right center',
    backgroundRepeat: 'no-repeat, no-repeat',
    justifyContent: 'center',
    height: '100%'
  },
});

const Wrapper = ({ classes }) => (
  <Grid container className={classes.root}>
    <Grid item>
      Hello
    </Grid>
  </Grid>
);

export default withStyles(styles)(Wrapper);