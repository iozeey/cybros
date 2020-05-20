import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import MainFeaturedPost from "./components/MainBanner";
import Portfolio from "./PortfolioPage";
import About from "./AboutPage";
import Contact from "./ContactPage";
import Services from "./ServicesPage";
import useHomeStyles from "./assets/css/_home";
import { mainFeaturedPost } from "./components/theme/dataset";
import Grid from "@material-ui/core/Grid";
import AboutUsBanner from "assets/img/web-development.png";
import { Container } from "@material-ui/core";

export default function Home(props) {
  const classes = useHomeStyles();
  const { themeTitle } = props;

  return (
    <div className={classes.Home}>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Container fixed>
      <Grid
        container
        spacing={0}
        direction="row"
        justify="space-around"
        alignItems="center"
        className={classes.postContainer}
      >
        <Grid item xs={12} sm={12} md={6}>
          <Typography
            align="center"
            className={classes.postContent}
            variant="h6"
          >
            Our proven techniques used in the past projects give us confidence
            in the quality and effectiveness of our design, development and
            deployment processes.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <img src={AboutUsBanner} alt="" />
        </Grid>
        <Grid item xs={12}>
          <Services
            title="Why Choose Cybros. Developers"
            description="CONVERT YOUR CONCEPT TO DIGITAL REALITY IN WEB or MOBILE SOFTWARE DEVELOPMENT, we create efficient and easy to use products that bring your ideas to life, delight your users and help you achieve your goals."
          />
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
      </Grid>
      </Container>

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
