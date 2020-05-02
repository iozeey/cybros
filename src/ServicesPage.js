import React from "react";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Services from "components/Services/Services";
import useServicesStyles from "./assets/css/_services";
import { services } from "./components/theme/dataset";

export default function Development(props) {
  const classes = useServicesStyles();
  const { description, title } = props;

  return (
    <div id="services" className={classes.root}>
      <Container fixed>
        <Grid
          container
          spacing={0}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={12}>
            <div className={classes.postContent}>
              <Typography variant="h4" align="center" className={classes.mainTitle}>
                {title}
              </Typography>
              <Typography
                component="p"
                align=""
                className={classes.description}
              >
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
