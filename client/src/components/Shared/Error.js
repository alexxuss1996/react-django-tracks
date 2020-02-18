import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const Error = ({ classes }) => {
  return <div>Error</div>;
};

const styles = theme => ({
  snackbar: {
		margin: theme.spacing.unit
	}
});

export default withStyles(styles)(Error);
