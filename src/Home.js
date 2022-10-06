import PropTypes from 'prop-types';
import React from 'react';
import About from './AboutPage';
import useHomeStyles from './assets/css/_home';
import MainBanner from './components/MainBanner';
import ScrollTop from './components/ScrollUp';
import SocialLinks from './components/SocialLinks';
import Testimonial from './components/Testimonials';
import { mainBanner } from './components/theme/dataset';
import Contact from './ContactPage';
import Portfolio from './PortfolioPage';
import Services from './ServicesPage';
import WhyChooseUs from './WhyChooseUs';

export default function Home(props) {
  const classes = useHomeStyles();
  const { themeTitle } = props;

  return (
    <div className={classes.Home}>
      <MainBanner post={mainBanner} />
      <About
        title={`About ${themeTitle}`}
        description="Cybros's mission is to convert thoughts into computer world and make them automate. Cybros. Dev specializes in the research and development of innovative Business Intelligence solutions."
      />
      <Services
        title="Services We Provide"
        description="CONVERT YOUR CONCEPT TO DIGITAL REALITY IN WEB or MOBILE SOFTWARE DEVELOPMENT, we create efficient and easy to use products that bring your ideas to life, delight your users and help you achieve your goals."
      />

      <Portfolio title={`${themeTitle} Portfolio`} description="Recent Projects We've Completed For Our Clients" />
    
      <WhyChooseUs />
    
  


      <Testimonial />

      <Contact
        title="Contact Us"
        description="Fill out the form and our team will be in touch with you promptly."
        email="Or Email us at info@cybros.dev"
        thanks="Thank you for your interest!"
      />

      <SocialLinks />

      <ScrollTop />
    </div>
  );
}

Home.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
