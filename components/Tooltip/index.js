import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

import { styles } from './styles';

const TooltipWrapp = (props) => {
  const [arrowRef, handleArrowRef] = useState(null);
  const { classes, TooltipContent, figure } = props;
  return (
    <Tooltip title={
      <>
        <TooltipContent figure={figure}/>
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
    open={() => true}
    disableFocusListener
    disableHoverListener
    disableTouchListener
    >
      <div className={classes.tooltipWrap}> 
        {props.children} 
      </div>
    </Tooltip>
  );
};

export default withStyles(styles)(TooltipWrapp);