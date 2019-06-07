export const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%'
  },
  tableRoot: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    backgroundColor: 'rgba(255,255,255,0.4)',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  name: {
    marginBottom: '4px'
  },
  icon: {
    maxWidth: '100px',
    objectFit: 'contain'
  },
  cellDescription: {
    maxWidth: '350px'
  },
  tableCell: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.14);'
  }
});