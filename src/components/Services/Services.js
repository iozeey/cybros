import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import useServicesStyles from "../../assets/css/_services";

export default function Services(props) {
  const classes = useServicesStyles();
  const { services } = props;
  return (
    <Grid
      container
      spacing={4}
      direction="row"
      justify="space-around"
      alignItems="center"
    >
      {services.map((post) => (
        <Grid item md={4} sm={6} xs={12} className={classes.serviceCard}>
          <CardActionArea component="a" href="#">
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={require("assets/Services/" + post.img)}
                title={post.title}
              />
              <CardActions className={classes.serviceTitle} disableSpacing>
                <Typography className={classes.title} variant="subtitle2">
                  {post.title}
                </Typography>
              </CardActions>
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </Grid>
  );
}

Services.propTypes = {
  portfolioItem: PropTypes.array,
};
