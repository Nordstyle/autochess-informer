import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { CustomTableCell, styles } from './styles';

function CustomizedTable(props) {
  const { classes, figures } = props;
  console.log(figures, 'props table');
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>
              <div className={classes.alignRight}>Class</div>
              <div className={classes.alignLeft}>Race</div>
            </CustomTableCell>
            <CustomTableCell>Assassins</CustomTableCell>
            <CustomTableCell>Warriors</CustomTableCell>
            <CustomTableCell>Warlocks</CustomTableCell>
            <CustomTableCell>Mages</CustomTableCell>
            <CustomTableCell>Knights</CustomTableCell>
            <CustomTableCell>Hunters</CustomTableCell>
            <CustomTableCell>Druids</CustomTableCell>
            <CustomTableCell>Mechanisms</CustomTableCell>
            <CustomTableCell>Demon <br/> Hunters</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { figures && Object.keys(figures).map((race, idx) => {
            const cRace = figures[Object.keys(figures)[idx]];
            return (
            <TableRow key={race}>
              <CustomTableCell>{race.charAt(0).toUpperCase() + race.slice(1) + 's'}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === 'assasin' ? <div>{figure.name}</div> : null)}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === 'warrior' ? <div>{figure.name}</div> : null)}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === 'warlock' ? <div>{figure.name}</div> : null)}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === 'mage' ? <div>{figure.name}</div> : null)}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === 'knight' ? <div>{figure.name}</div> : null)}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === 'hunter' ? <div>{figure.name}</div> : null)}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === 'druid' ? <div>{figure.name}</div> : null)}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === 'mechanism' ? <div>{figure.name}</div> : null)}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === 'demon hunter' ? <div>{figure.name}</div> : null)}</CustomTableCell>
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);