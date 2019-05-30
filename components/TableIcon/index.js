import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

const takeColor = (cost) => {
  switch(cost) {
    case 1: return '#999999';
    case 2: return '#00ccff';
    case 3: return '#000080';
    case 4: return '#800080';
    case 5: return '#ff6600';
    default: return 'transparent';
  }
};

const TableIcon = (props) => {
  const { classes } = props;
  const { icon, name, cost } = props.figure;
  return (
    <span className={classes.imgWrapper} style={{ backgroundColor: takeColor(cost) }}>
      <img src={icon} alt={'Фигура Dota AutoChess | ' + name} />
    </span>
  );
};

export default withStyles(styles)(TableIcon);