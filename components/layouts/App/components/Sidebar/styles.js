export default theme => ({
  root: {
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '63px',
    flexShrink: 0
  },
  logoLink: {
    fontSize: 0
  },
  logoImage: {
    cursor: 'pointer',
    width: theme.spacing.unit * 6
  },
  logoDivider: {
    marginBottom: theme.spacing.unit * 2
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: '120px',
    height: '120px',
    textAlign: 'center',
    objectFit: 'contain',
    cursor: 'pointer'
  },
  nameText: {
    marginTop: theme.spacing.unit * -1
  },
  bioText: {},
  profileDivider: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2
  },
  listSubheader: {
    color: theme.palette.text.secondary
  },
  listItem: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      borderLeft: `4px solid ${theme.palette.secondary.main}`,
      borderRadius: '4px',
      '& $listItemIcon': {
        color: theme.palette.secondary.main,
        marginLeft: '-4px'
      }
    },
    '& + &': {
      marginTop: theme.spacing.unit
    }
  },
  activeListItem: {
    borderLeft: `4px solid ${theme.palette.secondary.main}`,
    borderRadius: '4px',
    backgroundColor: theme.palette.secondary.light,
    '& $listItemText': {
      color: theme.palette.text.primary
    },
    '& $listItemIcon': {
      color: theme.palette.secondary.main,
      marginLeft: '-4px'
    }
  },
  listItemIcon: {
    marginRight: 0
  },
  listItemText: {
    fontWeight: 500,
    color: theme.palette.text.secondary
  },
  listDivider: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2
  }
});
