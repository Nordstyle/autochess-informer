import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

import { styles } from './styles';

const FigureTooltip = (props) => {
  console.log(props, 'props');
  const { classes } = props;
  const [arrowRef, handleArrowRef] = useState(null);
  return (
    <Tooltip title={
      <>
        HELLO
        <span className={classes.arrow} ref={handleArrowRef}/>
      </>
    }
    classes={{
      tooltip: classes.Tooltip,
      popper: classes.Popper,
      tooltipPlacementLeft: classes.PlacementLeft,
      tooltipPlacementRight: classes.PlacementRight,
      tooltipPlacementTop: classes.PlacementTop,
      tooltipPlacementBottom: classes.PlacementBottom,
    }}
    PopperProps={{
      popperOptions: {
        modifiers: {
          arrow: {
            enabled: Boolean(arrowRef),
            element: arrowRef,
          }
        }
      }
    }}
    interactive
    >
      <div className={classes.tooltipWrap}> {props.children} </div>
    </Tooltip>
  );
};

export default withStyles(styles)(FigureTooltip);