import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Link from 'next/link';
import { styles } from './styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {capitalize, takeRareColor} from "../../../src/utils";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";

const arrLvlSeparate = (arr) => arr.join(' / ');

const FigurePresent = (props) => {
  const { figure, classes, races, restFigures } = props;
  const { name, avatar, race, cost, health, damage, as, dps, armor, mr, skill, icon, bar } = props.figure;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container className={classes.grid}>
          <Grid container className={classes.heading}>
            <Grid container className={classes.name}>
              <img src={avatar} className={classes.avatar} alt={'Figure Dota Auto Chess avatar ' + name} />
              <Typography variant='h4'
                          style={{ color: takeRareColor(figure.cost)}}>

                {figure.name}
              </Typography>
            </Grid>
            <Grid className={classes.cost}>
              <Typography variant='h5'
                          style={{ color: takeRareColor(figure.cost)}}>

                Cost: {cost}
              </Typography>
              <img src={icon} className={classes.icon} alt={'Figure Dota Auto Chess icon ' + name} />
            </Grid>
          </Grid>
          <Grid container>
              <Table className={classes.table}>
                <TableBody>
                  <TableRow className={classes.row}>
                    <TableCell className={classes.td} align="right">
                      <Typography variant='body1'>Species</Typography>
                    </TableCell>
                    <TableCell className={classes.td} align="left">
                      <Typography variant='body1'>{arrLvlSeparate(race.map(rName => capitalize(rName)))}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.row}>
                    <TableCell className={classes.td} align="right">
                      <Typography variant='body1'>Class</Typography>
                    </TableCell>
                    <TableCell className={classes.td} align="left">
                      <Typography variant='body1'>{capitalize(props.figure.class)}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.row}>
                    <TableCell className={classes.td} align="right">
                      <Typography variant='body1'>Health</Typography>
                    </TableCell>
                    <TableCell className={classes.td} align="left">
                      <Typography variant='body1'> {arrLvlSeparate(health)}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.row}>
                    <TableCell className={classes.td} align="right">
                      <Typography variant='body1'>Armor</Typography>
                    </TableCell>
                    <TableCell className={classes.td} align="left">
                      <Typography variant='body1'>{arrLvlSeparate(armor)}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.row}>
                    <TableCell className={classes.td} align="right">
                      <Typography variant='body1'>Magical Resistance</Typography>
                    </TableCell>
                    <TableCell className={classes.td} align="left">
                      <Typography variant='body1'>{arrLvlSeparate(mr)}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.row}>
                    <TableCell className={classes.td} align="right">
                      <Typography variant='body1'>Attack Damage</Typography>
                    </TableCell>
                    <TableCell className={classes.td} align="left">
                      <Typography variant='body1'>{arrLvlSeparate(damage)}</Typography>
                    </TableCell>
                  </TableRow>
                  { dps && (
                    <TableRow className={classes.row}>
                      <TableCell className={classes.td} align="right">
                        <Typography variant='body1'>DPS</Typography>
                      </TableCell>
                      <TableCell className={classes.td} align="left">
                        <Typography variant='body1'>{arrLvlSeparate(dps)}</Typography>
                      </TableCell>
                    </TableRow>
                  )}
                  <TableRow className={classes.row}>
                    <TableCell className={classes.td} align="right">
                      <Typography variant='body1'>Base Attack Time</Typography>
                    </TableCell>
                    <TableCell className={classes.td} align="left">
                      <Typography variant='body1'>{as}</Typography>
                    </TableCell>
                  </TableRow>
                  { bar && (
                    <TableRow className={classes.row}>
                      <TableCell className={classes.td} align="right">
                        <Typography variant='body1'>Base Attack Range</Typography>
                      </TableCell>
                      <TableCell className={classes.td} align="left">
                        <Typography variant='body1'>{bar}</Typography>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
          </Grid>
          <Grid item>
            { skill && (
              <Table>
                <TableBody>
                  <TableRow className={classes.row}>
                    <TableCell className={classes.td} align="left">
                      <img src={skill.icon} className={classes.skill} alt={'Dota Auto Chess skill ' + skill.name}/>
                    </TableCell>
                    <TableCell className={classes.td} align="left">
                      <Typography variant='subtitle1'>{skill.name}</Typography>
                      <Typography variant='subtitle2'>{skill.description}</Typography>
                      <Typography variant='body2'>
                        <span dangerouslySetInnerHTML={{ __html: skill.ability.replace(/\./g, '<br/>') }}/>
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            )}
          </Grid>
        </Grid>

        <Grid container className={classes.grid}>
          <Grid container className={classes.moreInformation}>
            {races.map(race => (
              <Table key={race.name} className={classes.racesBlock}>
                <TableBody>
                  <TableRow className={classes.row}>
                    <TableCell className={classes.td} align="left">
                      <Typography variant='subtitle1' className={classes.bold}>{capitalize(race.name) + 's'}</Typography>
                      <Typography variant='subtitle2'>{race.description}</Typography>
                      <br/>
                      <Typography variant='subtitle2'>{race.effect.name}</Typography>
                      <Typography variant='body2'>
                        <span dangerouslySetInnerHTML={{ __html: race.effect.description.replace(/\%/g, '<br/>') }}/>
                      </Typography>
                    </TableCell>
                    <TableCell className={classes.td} align="left">
                      <img src={race.icon} className={classes.skill} alt={'Dota Auto Chess Species image' + race.name}/>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            ))}
            {/*<div>*/}
              {/*{ Object.keys(restFigures).map(raceItem => {*/}
                {/*return (*/}
                {/*<div key={raceItem}>*/}
                  {/*<Typography variant='subtitle1' className={classes.bold}>List of {capitalize(raceItem)+'s'}</Typography>*/}
                  {/*{*/}
                    {/*restFigures[raceItem].map(figure => figure.name !== name && (*/}
                      {/*<Link key={figure.name} as={`/figure/${figure.name}`} href={`/figure?name=${figure.name}`}>*/}
                        {/*<Typography style={{ color: takeRareColor(figure.cost), cursor: 'pointer'}} variant='body2'>*/}
                          {/*{figure.name}*/}
                        {/*</Typography>*/}
                      {/*</Link>*/}
                    {/*))*/}
                  {/*}*/}
                {/*</div>*/}
              {/*)})}*/}
            {/*</div>*/}
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
};

export default withStyles(styles)(FigurePresent);