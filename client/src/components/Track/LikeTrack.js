import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const LikeTrack = ({ classes }) => {
  return <div>LikeTrack</div>;
};
const styles = theme => ({
  icon: {
    marginLeft: theme.spacing.unit / 2
  },
  iconButton: {
    color: 'deeppink'
  }
});

export default withStyles(styles)(LikeTrack);
