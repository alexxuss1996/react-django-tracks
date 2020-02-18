import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const SearchTracks = ({ classes }) => {
  return <div>SearchTracks</div>;
};
const styles = theme => ({
  root: {
    display: 'flex',
		alignItems: 'center',
		margin: theme.spacing.unit,
		padding: '2px 4px'
  }
});

export default withStyles(styles)(SearchTracks);
