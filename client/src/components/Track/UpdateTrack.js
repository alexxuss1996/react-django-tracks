import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const UpdateTrack = ({ classes }) => {
  return <div>UpdateTrack</div>;
};
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  dialog: {
    margin: '0 auto',
    maxWidth: 550
  },
  textField: {
    margin: theme.spacing.unit
  },
  cancel: {
    color: 'red'
  },
  save: {
    color: 'green'
  },
  button: {
    margin: theme.spacing.unit * 2
  },
  icon: {
    marginLeft: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
});

export default withStyles(styles)(UpdateTrack);
