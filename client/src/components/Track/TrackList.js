import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const TrackList = ({ classes }) => {
  return <div>TrackList</div>;
};
const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	details: {
		alignItems: 'center'
	},
	link: {
		color: '#424242',
		textDecoration: 'none',
		'&:hover': {
			color: 'black'
		}
	}
});

export default withStyles(styles)(TrackList);
