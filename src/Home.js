import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import MainFeaturedPost from "./components/MainBanner";
import Portfolio from "./PortfolioPage";
import About from "./AboutPage";
import Contact from "./ContactPage";
import Services from "./ServicesPage";
import useHomeStyles from "./assets/css/_home"
import { mainFeaturedPost } from "./components/theme/dataset";

export default function Home(props) {
  const classes = useHomeStyles();
  const { themeTitle } = props;
  
  return (
    <div className={classes.Home}>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Typography align="center" className={classes.postContent} variant="h6">
        Our proven techniques used in the past projects give us confidence in
        the quality and effectiveness of our design, development and deployment
        processes.
      </Typography>

      <Services
        title="Why Choose Cybros. Developers"
        description="CONVERT YOUR CONCEPT TO DIGITAL REALITY IN WEB or MOBILE SOFTWARE DEVELOPMENT, we create efficient and easy to use products that bring your ideas to life, delight your users and help you achieve your goals."
      /> 
      <Portfolio
        title={`${themeTitle} Portfolio`}
        description="Recent Projects We've Completed For Our Clients"
      />
      <About
        title={`About ${themeTitle}`}
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
