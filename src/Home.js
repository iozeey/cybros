import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MainFeaturedPost from "./components/MainBanner";
import Portfolio from "./PortfolioPage";
const useStyles = makeStyles((theme) => ({
  Home: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    paddingTop: theme.spacing(8),
  },
  my20: {
    margin: theme.spacing(3),
  },
}));

export default function Home(props) {
  const classes = useStyles();
  const mainFeaturedPost = {
    title: "Title of a longer featured blog post",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: "https://source.unsplash.com/random",
    imgText: "main image description",
    linkText: "Continue reading…",
  };
  return (
    <div className={classes.Home}>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Typography
        variant="subtitle1"
        align="center"
        component="p"
        className={classes.my20}
      >
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
        venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras
        mattis consectetur purus sit amet fermentum.
      </Typography>
      <Portfolio
        title="Cybros. Development Portfolio"
        description="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum."
      />
    </div>
  );
}

Home.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
