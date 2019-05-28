import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { CustomTableCell, styles } from './styles';
import TableIcon from '../TableIcon';

function CustomizedTable(props) {
  const { classes, figures } = props;
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
              <CustomTableCell>{cRace.map(figure => figure.class === 'assasin' ? <TableIcon icon={figure.icon} name={figure.name} cost={figure.cost} /> : null)}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === 'warrior' ? <TableIcon icon={figure.icon} name={figure.name} cost={figure.cost} /> : null)}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === 'warlock' ? <TableIcon icon={figure.icon} name={figure.name} cost={figure.cost} /> : null)}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === 'mage' ? <TableIcon icon={figure.icon} name={figure.name} cost={figure.cost} /> : null)}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === 'knight' ? <TableIcon icon={figure.icon} name={figure.name} cost={figure.cost} /> : null)}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === 'hunter' ? <TableIcon icon={figure.icon} name={figure.name} cost={figure.cost} /> : null)}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === 'druid' ? <TableIcon icon={figure.icon} name={figure.name} cost={figure.cost} /> : null)}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === 'mechanism' ? <TableIcon icon={figure.icon} name={figure.name} cost={figure.cost} /> : null)}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === 'demon hunter' ? <TableIcon icon={figure.icon} name={figure.name} cost={figure.cost} /> : null)}</CustomTableCell>
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