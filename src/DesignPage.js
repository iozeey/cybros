import React from "react";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import banner from "assets/img/orange-banner.png"
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: theme.spacing(10, 0),
    color: theme.palette.background.paper,
  },
}));

export default function Design(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <div id="design" className={classes.root}>
      <Container fixed>
        <Grid container spacing={6} direction="row" justify="space-between" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h4" align="">
              {title}
            </Typography>
            <Typography component="p" align="">
              {description}
            </Typography>
          </Grid>
          <Grid item xs={5}>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Design.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
