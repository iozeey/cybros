import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import useAboutUsStyles from 'assets/css/_aboutUs';

const About = (props) => {
  const classes = useAboutUsStyles();
  const { description, title } = props;

  return (
    <div id="about" className={classes.root}>
      <Container fixed>
        <Grid item xs={12} sm={12}>
          <Typography variant="h4" align="center" className={classes.sectionTitle}>
            {title}
          </Typography>
          <Typography component="p" align="center" className={classes.sectionDescription}>
            {description}
          </Typography>
        </Grid>
      </Container>
    </div>
  );
};

About.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

export default About;
