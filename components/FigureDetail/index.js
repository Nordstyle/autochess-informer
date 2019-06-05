import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { takeRareColor, capitalize, matchRaces } from '../../src/utils';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import { styles } from './styles';

const arrLvlSeparate = (arr) => arr.join(' / ');

const FigureDetail = (props) => {
  const { classes, races, classesFigures } = props;
  const { name, avatar, race, cost, health, damage, as, dps, armor, mr, skill } = props.figure;
  const matchedRaces = matchRaces(race, races);
  const classFigure = classesFigures.find(cFigure => cFigure.name === props.figure.class);
  return (
    <Grid item xs={12} className={classes.figureBlock}>
      <Grid item className={classes.figureBlock}>
        <Grid item className={classes.imagesWrapper}>
          <img src={avatar} className={classes.avatar}/>
          <Grid item className={classes.imagesBlock}>
            {matchedRaces && matchedRaces.map(race => (
              <Tooltip key={race.id} disableFocusListener disableTouchListener title={
                <>
                  <Typography variant='body1' style={{color: 'white'}}>{capitalize(race.name) + 's'}</Typography>
                  <Typography variant='body2' style={{color: 'white'}}>{race.description}</Typography>
                  <br/>
                  <Typography variant='body1' style={{color: 'white'}}>{race.effect.name}</Typography>
                  <Typography variant='body2' style={{color: 'white'}}>
                    <span dangerouslySetInnerHTML={{ __html: race.effect.description.replace(/\%/g, '<br/>') }}/>
                  </Typography>
                </>
              }>
                <img src={race.icon} className={classes.supImages} alt={'Dota AutoChess Species ' + race.name}/>
              </Tooltip>
            ))}
            {classFigure && (
              <Tooltip disableFocusListener disableTouchListener title={
                <>
                  <Typography variant='body1' style={{color: 'white'}}>{capitalize(classFigure.name) + 's'}</Typography>
                  <Typography variant='body2' style={{color: 'white'}}>{classFigure.description}</Typography>
                  <br/>
                  <Typography variant='body1' style={{color: 'white'}}>{classFigure.effect.name}</Typography>
                  <Typography variant='body2' style={{color: 'white'}}>
                    <span dangerouslySetInnerHTML={{ __html: classFigure.effect.description.replace(/\%/g, '<br/>') }}/>
                  </Typography>
                </>
              }>
                <img src={classFigure.icon} className={classes.supImages} alt={'Dota AutoChess Classes ' + classFigure.name}/>
              </Tooltip>
            )}
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
                <img src={skill.icon} className={classes.skill} alt={'Dota AutoChess skill ' + classes.skill.name}/>
              </Tooltip>
            )}
          </Grid>
          <Typography variant='body2' style={{color: 'white'}}>Species: {arrLvlSeparate(race.map(rName => capitalize(rName)))} </Typography>
          <Typography variant='body2' style={{color: 'white'}}>Class: {capitalize(props.figure.class)} </Typography>
          <Typography variant='body2' style={{color: 'white'}}>Health: {arrLvlSeparate(health)} </Typography>
          <Typography variant='body2' style={{color: 'white'}}>Armor: {arrLvlSeparate(armor)} </Typography>
          <Typography variant='body2' style={{color: 'white'}}>Magical Resistance: {arrLvlSeparate(mr)} </Typography>
          <Typography variant='body2' style={{color: 'white'}}>Attack Damage: {arrLvlSeparate(damage)} </Typography>
          { dps && (
            <Typography variant='body2' style={{color: 'white'}}>DPS: {arrLvlSeparate(dps)} </Typography>
          )}
          <Typography variant='body2' style={{color: 'white'}}>Base Attack Time: {as} </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
};

export default withStyles(styles)(FigureDetail);