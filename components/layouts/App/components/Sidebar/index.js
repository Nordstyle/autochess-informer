import React from 'react';
import Router, { withRouter } from 'next/router';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Link from 'next/link';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography
} from '@material-ui/core';
import {
  DashboardOutlined as DashboardIcon,
  PeopleOutlined as PeopleIcon,
  InfoOutlined as InfoIcon,
  SettingsOutlined as SettingsIcon,
  PersonPinSharp,
  PetsOutlined,
  LiveHelpRounded,
  CardGiftcard as GiftIcon
} from '@material-ui/icons';
import styles from './styles';

const Sidebar = withRouter((props) => {
  const {classes, className, router} = props;
  const rootClassName = classNames(classes.root, className);
  return (
    <nav className={rootClassName}>
      <div className={classes.logoWrapper}>
        <Link prefetch
              href="/"
        >
          <img
            alt="AutoChess logo"
            className={classes.logoImage}
            src="/static/images/logo.png"
          />
        </Link>
      </div>
      <Divider className={classes.logoDivider} />
      <div className={classes.profile}>
        <Link href="/">
          <img
            alt="Dota Auto Chess Informer battlefury"
            className={classes.avatar}
            src="/static/images/index/Legendary.png"
          />
        </Link>
        <Typography
          className={classes.nameText}
          variant="h6"
        >
          Dota Auto Chess
        </Typography>
        <Typography
          className={classes.bioText}
          variant="caption"
        >
          Informer
        </Typography>
      </div>
      <Divider className={classes.profileDivider} />

      <List
        component="div"
        disablePadding
      >
        <ListItem
          className={classes.listItem}
          component='a'
          selected={router.pathname === '/'}
          onClick={() => Router.push('/')}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Table of Figures"
          />
        </ListItem>
        <ListItem
          className={classes.listItem}
          component='a'
          selected={router.pathname === '/all-figures'}
          onClick={() => Router.push('/all-figures')}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="All Figures"
          />
        </ListItem>
        <ListItem
          className={classes.listItem}
          component='a'
          selected={router.pathname === '/species'}
          onClick={() => Router.push('/species')}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <PetsOutlined />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Species"
          />
        </ListItem>
        <ListItem
          className={classes.listItem}
          component='a'
          selected={router.pathname === '/classes'}
          onClick={() => Router.push('/classes')}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <PersonPinSharp />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Classes"
          />
        </ListItem>
        <ListItem
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component='a'
          selected={router.pathname === '/strategies'}
          onClick={() => Router.push('/strategies')}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <LiveHelpRounded />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Strategies"
          />
        </ListItem>
        <ListItem
          className={classes.listItem}
          component='a'
          selected={router.pathname === '/items'}
          onClick={() => Router.push('/items')}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <GiftIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Items"
          />
        </ListItem>
        <ListItem
          className={classes.listItem}
          component='a'
          selected={router.pathname === '/basics'}
          onClick={() => Router.push('/basics')}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Basics"
          />
        </ListItem>
      </List>
      <Divider className={classes.listDivider} />
      <List
        component="div"
        disablePadding
        subheader={
          <ListSubheader className={classes.listSubheader}>
            Support
          </ListSubheader>
        }
      >
        <ListItem
          className={classes.listItem}
          component="a"
          selected={router.pathname === '/information'}
          onClick={() => Router.push('/information')}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Information"
          />
        </ListItem>
      </List>
    </nav>
  )
});

Sidebar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
