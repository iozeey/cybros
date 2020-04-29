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
  },
  postContent: {
    backgroundImage: "linear-gradient(to left,#60AFFF 10%,#4EF4BD 99%)",
    fontFamily: "monospace",
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
    title: "To Bring your ideas into Reality",
    description: "We offer Dynamic solutions in various Technologies.",
  };
  return (
    <div className={classes.Home}>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Typography
        variant="subtitle1"
        align="center"
        className={classes.postContent}
        variant="h6"
      >
        Our proven techniques used in the past projects give us confidence in
        the quality and effectiveness of our design, development and deployment
        processes.
      </Typography>

      <Services
        title="Why Choose Cybros. Developers"
        description="CONVERT YOUR CONCEPT TO DIGITAL REALITY IN WEB or MOBILE SOFTWARE DEVELOPMENT, we create efficient and easy to use products that bring your ideas to life, delight your users and help you achieve your goals."
      />
      <Portfolio
        title="Cybros. Development Portfolio"
        description="Recent Projects We've Completed For Our Clients"
      />
      <About
        title="About Cybros. Development"
        description="Cybros's mission is to convert thoughts into computer world and make them automate. Cybros developer specializes in the research and development of innovative Business Intelligence solutions."
      />
      <Contact
        title="Contact Us"
        description="Fill out the form and our team will be in touch with you promptly. Thank you for your interest!
        at Cybros Developers Dynamic solution provider
        Email: contact@cybros.dev"
      />
    </div>
  );
}

Home.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
