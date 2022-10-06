import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import useBannerStyles from '../assets/css/_banner';
import Typed from 'react-typed';
// import Particle from 'react-particles-js';
import particlesConfig from './particlesConfig';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const TypingEffect = ({ title, descriptionTitle, descriptionsServices, linkText }) => {
  const classes = useBannerStyles();

  return (
    <div>
      <Typography variant="h2" color="inherit" gutterBottom className={classes.title}>
        {title}
      </Typography>
      <Typography variant="h3" color="inherit" paragraph className={classes.subTitle}>
        {descriptionTitle}
      </Typography>
      <Typography variant="h4" color="inherit" paragraph className={classes.reason}>
        <Typed strings={descriptionsServices} typeSpeed={70} loop />
      </Typography>
      <Link variant="subtitle1" href="#">
        {linkText}
      </Link>
    </div>
  );
};

export default function MainFeaturedPost(props) {
  const classes = useBannerStyles();
  const { post } = props;

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Paper id="home" className={classes.mainBanner}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className={classes.textContainer}>
            <TypingEffect {...post} />
            <Particles
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: '0',
                left: '0',
              }}
              id="tsparticles"
              init={particlesInit}
              options={particlesConfig}
            />
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
