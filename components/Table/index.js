import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { CLASS } from '../../src/constants';

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
              <CustomTableCell>{cRace.map(figure => figure.class === CLASS.ASSASIN ? <TableIcon figure={figure} /> : null)}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === CLASS.WARRIOR ? <TableIcon figure={figure} /> : null)}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === CLASS.WARLOCK ? <TableIcon figure={figure} /> : null)}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === CLASS.MAGE ? <TableIcon figure={figure} /> : null)}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === CLASS.KNIGHT ? <TableIcon figure={figure} /> : null)}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === CLASS.HUNTER ? <TableIcon figure={figure} /> : null)}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === CLASS.DRUID ? <TableIcon figure={figure} /> : null)}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === CLASS.MECHANISM ? <TableIcon figure={figure} /> : null)}</CustomTableCell>
              <CustomTableCell>{cRace.map(figure => figure.class === CLASS.DEMON_HUNTER ? <TableIcon figure={figure} /> : null)}</CustomTableCell>
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