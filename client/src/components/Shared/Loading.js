import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const Loading = ({ classes }) => {
  return <div>Loading</div>;
};

const styles = theme => ({
  root: {
		width: '100vw',
		textAlign: 'center'
  },
 progress: {
	margin: theme.spacing.unit * 2,
	color: theme.palette.secondary.dark
 }
});

export default withStyles(styles)(Loading);
