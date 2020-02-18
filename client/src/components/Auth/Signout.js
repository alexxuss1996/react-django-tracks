import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const Signout = ({ classes }) => {
  return <div>Signout</div>;
};

const styles = {
  root: {
    display: 'flex',
    cursor: 'pointer'
  },
  buttonIcon: {
    marginLeft: '5px'
  }
};

export default withStyles(styles)(Signout);
