import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MainFeaturedPost from "./components/MainBanner";
import Portfolio from "./PortfolioPage";
import About from "./AboutPage";
import Contact from "./ContactPage";
// import Design from "./DesignPage";
import Services from "./ServicesPage";
const useStyles = makeStyles((theme) => ({
  Home: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    // paddingTop: theme.spacing(8),
  },
  postContent: {
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(8),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
}));

export default function Home(props) {
  const classes = useStyles();
  const mainFeaturedPost = {
    title: "Web Development Technologies",
    description: "We offer Multiple Web Development Technologies.",
  };
  return (
    <div className={classes.Home}>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Typography
        variant="subtitle1"
        align="center"
        component="p"
        className={classes.postContent}
      >
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
        venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras
        mattis consectetur purus sit amet fermentum.
      </Typography>

      <Services
        title="Why Choose Cybros. Development"
        description="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum."
      />
      <Portfolio
        title="Cybros. Development Portfolio"
        description="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum."
      />
      <About
        title="About Cybros. Development"
        description="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum."
      />
      <Contact
        title="Contact Us"
        description="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum."
      />
    </div>
  );
}

Home.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
