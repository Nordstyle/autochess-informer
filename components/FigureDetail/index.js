import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { takeRareColor, capitalize } from '../../src/utils';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import { styles } from './styles';

const arrLvlSeparate = (arr) => arr.join(' / ');

const FigureDetail = (props) => {
  const { classes } = props;
  const { name, avatar, race, cost, health, damage, as, dps, armor, mr, skill } = props.figure;
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
          <Grid item className={classes.flexBox}>
            <Typography variant='subtitle1' style={{color: takeRareColor(cost)}}>{name} | Cost: {cost}</Typography>
            { skill && (
              <Tooltip disableFocusListener disableTouchListener title={
                <>
                  <Typography variant='body2' style={{color: 'white'}}>{skill.description}</Typography>
                  <Typography variant='body2' style={{color: 'white'}}>
                    <span dangerouslySetInnerHTML={{ __html: skill.ability.replace(/\./g, '<br/>') }}/>
                  </Typography>
                </>
              }>
                <img src={skill.icon} className={classes.skill}/>
              </Tooltip>
            )}
          </Grid>
          <Typography variant='body2' style={{color: 'white'}}>Species: {arrLvlSeparate(race.map(rName => capitalize(rName)))} </Typography>
          <Typography variant='body2' style={{color: 'white'}}>Class: {capitalize(props.figure.class)} </Typography>
          <Typography variant='body2' style={{color: 'white'}}>Healh: {arrLvlSeparate(health)} </Typography>
          <Typography variant='body2' style={{color: 'white'}}>Armor: {arrLvlSeparate(armor)} </Typography>
          <Typography variant='body2' style={{color: 'white'}}>Magical Resistance: {arrLvlSeparate(mr)} </Typography>
          <Typography variant='body2' style={{color: 'white'}}>Attack Damage: {arrLvlSeparate(damage)} </Typography>
          { dps && (
            <Typography variant='body2' style={{color: 'white'}}>DPS: {arrLvlSeparate(damage)} </Typography>
          )}
          <Typography variant='body2' style={{color: 'white'}}>Base Attack Time: {as} </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
};

export default withStyles(styles)(FigureDetail);