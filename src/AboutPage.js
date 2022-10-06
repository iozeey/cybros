import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import AboutUsBanner from "assets/img/aboutus.PNG";
import useAboutUsStyles from './assets/css/_aboutUs';

const About = (props) => {
  const classes = useAboutUsStyles();
  const { description, title } = props;

  return (
    <div id="about" className={classes.root}>
      <Container fixed>
        {/* <Grid container spacing={0} direction="row-reverse" justify="space-between" alignItems="center"> */}
        <Grid item xs={12} sm={12}>
          <Typography variant="h4" align="center" className={classes.sectionTitle}>
            {title}
          </Typography>
          <Typography component="p" align="center" className={classes.sectionDescription}>
            {description}
          </Typography>
        </Grid>
        {/* <Grid item xs={12} sm={12} md={6}>
            <img src={AboutUsBanner} alt="About Cybros Dev" />
          </Grid> */}
        {/* </Grid> */}
      </Container>
    </div>
  );
};

About.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

export default About;
