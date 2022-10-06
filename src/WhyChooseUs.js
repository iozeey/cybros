import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import WebComputerScreen from 'assets/img/web-development.png';

import PropTypes from 'prop-types';
import React from 'react';
import useWhyChooseUs from './assets/css/_whyChooseUs';
import { technologies } from './components/theme/dataset';
import Carousel from './components/Slider/Carousel';

const WhyChooseUs = (props) => {
  const classes = useWhyChooseUs();

  return (
    <div id="about" className={classes.root}>
      <Container fixed>
        <Grid container spacing={0} direction="row" justify="space-around" alignItems="center" id="services">
          <Grid item xs={12}>
            <Typography variant="h4" align="center" className={classes.sectionTitle}>
              Why Choose Cybros Dev
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography align="center" className={classes.sectionDescription} variant="h6">
              Our proven techniques used in the past projects give us confidence in the quality and effectiveness of our
              design, development and deployment processes.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img src={WebComputerScreen} alt="" />
          </Grid>
        </Grid>

        <Carousel title="main-carousel" technologies={technologies} />
      </Container>
    </div>
  );
};

WhyChooseUs.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

export default WhyChooseUs;
