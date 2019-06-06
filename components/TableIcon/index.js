import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { styles } from './styles';
import { takeRareColor } from '../../src/utils';
import TooltipWrapp from '../Tooltip';

const TableIcon = (props) => {
  const { classes, races, classesfigures } = props;
  const { icon, name, cost } = props.figure;
  return (
    <Link as={`/figure/${name}`} href={`/figure?name=${name}`}>
      <TooltipWrapp figure={props.figure} races={races} classesfigures={classesfigures}>
      <span className={classes.imgWrapper} style={{ backgroundColor: takeRareColor(cost) }}>
        <img src={icon} alt={'Hero Dota Auto Chess ' + name} />
      </span>
      </TooltipWrapp>
    </Link>
  );
};

export default withStyles(styles)(TableIcon);