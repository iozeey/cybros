import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Services from 'components/Services/Services';
import PropTypes from 'prop-types';
import React from 'react';
import useServicesStyles from './assets/css/_services';
import { services } from './components/theme/dataset';

export default function Development(props) {
  const classes = useServicesStyles();
  const { description, title } = props;

  return (
    <div className={classes.root} id="services">
      <Container fixed>
        <Grid container spacing={0} direction="row" justify="space-between" alignItems="center">
          <Grid item xs={12}>
            <div className={classes.serviceContent}>
              <Typography variant="h4" align="center" className={classes.sectionTitle}>
                {title}
              </Typography>
              <Typography component="p" align="" className={classes.sectionDescription}>
                {description}
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Services services={services} />
      </Container>
    </div>
  );
}

Development.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
