import React from "react";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AboutUsBanner from "assets/img/aboutus.PNG";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "linear-gradient(to left,#60AFFF 10%,#4EF4BD 99%)",
    padding: theme.spacing(8, 0),
  },
}));

export default function About(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <div id="about" className={classes.root}>
      <Container fixed>
        <Grid container spacing={6} direction="row-reverse" justify="space-between" alignItems="center">
          <Grid item xs={5}>
            <Typography variant="h4" align="left">
              {title}
            </Typography>
            <Typography component="p" align="left">
              {description}
            </Typography>
          </Grid>
          <Grid item xs={5}>
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
