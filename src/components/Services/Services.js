import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0),
  },
  media: {
    height: 0,
    // backgroundSize: "contain",
    paddingTop: "56.25%", // 16:9
  },
  titlebg: {
    backgroundImage: "linear-gradient(to left,#175370 10%,#091930 99%);",
    color: theme.palette.background.paper,
  },
  title: {
    flex: 1,
    fontFamily: "vester-medium",
  },
}));

export default function Services(props) {
  const classes = useStyles();
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
        <Grid item md={4} sm={6} xs={6}>
          <CardActionArea component="a" href="#">
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={require("assets/Services/" + post.img)}
                title={post.title}
              />
              <CardActions className={classes.titlebg} disableSpacing>
                <Typography className={classes.title} variant="h6">
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
