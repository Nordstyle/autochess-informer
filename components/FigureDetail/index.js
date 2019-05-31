import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { takeRareColor, capitalize } from '../../src/utils';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { styles } from './styles';

const arrLvlSeparate = (arr) => arr.join(' / ')

const FigureDetail = (props) => {
  const { classes } = props;
  const { name, avatar, race, cost, health, damage, as, dps, armor, mr } = props.figure;
  console.log(props) 
  console.log(race.join(' / '))
  return ( 
    <Grid item xs={12} className={classes.figureBlock}>
      <Grid item className={classes.figureBlock}>
        <Grid item className={classes.imagesWrapper}>
          <img src={avatar} className={classes.avatar}/>
          <Grid item className={classes.flexBox}>
            <img src='/static/images/race/human.png' className={classes.supImages}/>
            <img src='/static/images/class/demon-hunter.png' className={classes.supImages}/>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant='subtitle1' style={{color: takeRareColor(cost)}}>{name}</Typography>
          <Typography variant='body2' style={{color: 'white'}}>Species: {arrLvlSeparate(race.map(rName => capitalize(rName)))} </Typography>
          <Typography variant='body2' style={{color: 'white'}}>Class: {capitalize(props.figure.class)} </Typography>
          <Typography variant='body2' style={{color: 'white'}}>Healh: {arrLvlSeparate(health)} </Typography>
          <Typography variant='body2' style={{color: 'white'}}>Armor: {arrLvlSeparate(armor)} </Typography>
          <Typography variant='body2' style={{color: 'white'}}>Magical Resistance: {arrLvlSeparate(mr)} </Typography>
          <Typography variant='body2' style={{color: 'white'}}>Base Attack Time: {as} </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
};

export default withStyles(styles)(FigureDetail);