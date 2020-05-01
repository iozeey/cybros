import React from "react";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AboutUsBanner from "assets/img/aboutus.PNG";
import useAboutUsStyles from "./assets/css/_aboutus"

export default function About(props) {
  const classes = useAboutUsStyles();
  const { description, title } = props;

  return (
    <div id="about" className={classes.root}>
      <Container fixed>
        <Grid container spacing={0} direction="row-reverse" justify="space-between" alignItems="center">
          <Grid item xs={12} sm={12} md={6} >
            <Typography variant="h4" align="left" className={classes.title}>
              {title}
            </Typography>
            <Typography component="p" align="left" className={classes.description}>
              {description}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img src={AboutUsBanner} alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

About.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
