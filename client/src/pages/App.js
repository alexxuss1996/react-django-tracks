import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const App = ({ classes }) => <div>App</div>;

const styles = theme => ({
  container: {
    maxWidth: 960,
    margin: '0 auto',
    padding: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(App);
