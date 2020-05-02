import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Carousel from "./Slider/Carousel";
import useBannerStyles from "../assets/css/_banner";
import { technologies } from "./theme/dataset";

export default function MainFeaturedPost(props) {
  const classes = useBannerStyles();
  const { post } = props;

  return (
    <Paper id="home" className={classes.mainFeaturedPost}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              variant="h3"
              color="inherit"
              gutterBottom
              className={classes.title}
            >
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Link variant="subtitle1" href="#">
              {post.linkText}
            </Link>
          </div>
          <Carousel title="main-carousel" technologies={technologies} />
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
