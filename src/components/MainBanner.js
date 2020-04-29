import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Carousel from "./Slider/Carousel";
const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    // marginBottom: theme.spacing(6),
    paddingTop: theme.spacing(10),
    backgroundImage: `url(${require("assets/img/bnr1.jpg")})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    fontFamily: "vester-light",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(12),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  title:{
    fontFamily: "vester-poster",
  }
}));

const technologies = [
  { title: "React-JS", img: "react.svg" },
  { title: "Node-JS", img: "nodejs.png" },
  { title: "Rails", img: "rails.png" },
  { title: "VUE", img: "vue.jpg" },
  { title: "WordPress", img: "WordPress.svg" },
  { title: "Material-UI", img: "material.svg" },
  { title: "Bootstrap", img: "bootstrap-logo.png" },
  { title: "Storybook", img: "storybook.png" },
  { title: "Laravel", img: "laravel.min.svg" },
  { title: "PHP", img: "php-logo.png" },
  { title: "Automation", img: "testcafe.png" },
  { title: "GIT", img: "git.png" },
  { title: "SEO", img: "SEO.svg" },
  { title: "HTML5", img: "HTML5_oval_logo.png" },
];
export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper id="home" className={classes.mainFeaturedPost}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
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
