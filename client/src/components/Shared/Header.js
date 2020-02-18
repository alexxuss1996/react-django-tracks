import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const Header = ({ classes }) => {
  return <div>Header</div>;
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 0,
    padding: 0
  },
  grow: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    textDecoration: 'none'
  },
  logo: {
    marginRight: theme.spacing.unit,
    fontSize: 45
  },
  faceIcon: {
    marginRight: theme.spacing.unit,
    fontSize: 30,
    color: 'white'
  },
  username: {
    color: 'white',
    fontSize: 30
  }
});

export default withStyles(styles)(Header);
