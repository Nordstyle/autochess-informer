import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

export const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    color: theme.palette.common.white,
    border: '1px solid #DFE3E8',
    textAlign: 'center',
    fontSize: 16,
    '&:first-child': {
      textAlign: 'left',
      color: theme.palette.primary.main
    }
  },
  body: {
    fontSize: 14,
    textAlign: 'center',
    border: '1px solid #DFE3E8',
    '&:first-child': {
      textAlign: 'left',
      backgroundColor: 'rgba(0,0,0,0.6)',
      color: theme.palette.common.white
    }
  }
}))(TableCell);

export const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 5,
    overflowX: 'auto',
    backgroundColor: 'rgba(255,255,255,0.4)'
  },
  alignRight: {
    textAlign: 'right'
  },
  alignLeft: {
    textAlign: 'left'
  }
});