import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright(props) {
  const { title, classes } = props;
  return (
    <Typography variant="body2" color="textSecondary" align="center" className={classes.text}>
      {'Copyright © '}
      <Link color="inherit" href="https://cybros.dev/"className={classes.text}>
        {title}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6, 0),
    backgroundImage: 'linear-gradient(to left,#091930 10%,#132C40 99%)',
  },
  text: {
    color: 'rgb(200 187 187 / 54%)',
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, themeTitle } = props;

  return (
    <footer className={classes.root}>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p" className={classes.text}>
        {description}
      </Typography>
      <Copyright title={themeTitle} classes={classes} />
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  themeTitle: PropTypes.string,
};
