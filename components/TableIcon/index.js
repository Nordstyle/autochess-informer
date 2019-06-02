import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import { takeRareColor } from '../../src/utils';

import TooltipWrapp from '../Tooltip';
import FigureDetail from '../FigureDetail';

const TableIcon = (props) => {
  const { classes, races, classesFigures } = props;
  const { icon, name, cost } = props.figure;
  return (
    <TooltipWrapp figure={props.figure} races={races} TooltipContent={FigureDetail} classesFigures={classesFigures}>
      <span className={classes.imgWrapper} style={{ backgroundColor: takeRareColor(cost) }}>
        <img src={icon} alt={'Hero Dota AutoChess ' + name} />
      </span>
    </TooltipWrapp>
  );
};

export default withStyles(styles)(TableIcon);