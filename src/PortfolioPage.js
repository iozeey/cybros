import React from "react";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PortfolioItem from "./components/Portfolio/PortfolioItem";
import banner from "./assets/img/orange-banner.png";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#FB9E33",
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: theme.palette.background.paper,
    padding: theme.spacing(8, 0),
  },
  postContent: {
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 8, 8),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
}));

const portfolioItems = [
  { title: "AlPrints", img: "alprint-we-design-you-logo.png", link: "https://alprints.com/" },
  { title: "Cmobiler", img: "cmobiler-logo.png", link: "https://cmobiler.com/" },
  { title: "Fly", img: "fly.png", link: "https://dev.fly.me/" },
  { title: "tripbuddyapp", img: "tripbuddyapp.png", link: "https://www.thetripbuddyapp.com/" },
  { title: "InnovationRoundtable", img: "innovation.png", link: "https://innovationroundtable.com/" },
  { title: "HR-InnovationRoundtable", img: "logo-HR-InnovationRoundtable-h.png", link: "https://innovationroundtable.com/hr/" },
  { title: "logo6", img: "p5.png", link: "" },
  { title: "logo6", img: "p5.png", link: "" },
];
export default function Portfolio(props) {
  const classes = useStyles();
  const { title, description } = props;
  return (
    <div id="portfolio" className={classes.root}>
      <Container fixed>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item md={12}>
            <div className={classes.postContent}>
              <Typography variant="h3" align="center">
                {title}
              </Typography>
              <Typography
                variant="p"
                color="inherit"
                className={classes.my20}
                paragraph
              >
                {description}
              </Typography>
            </div>
          </Grid>
        </Grid>

        <PortfolioItem portfolioItem={portfolioItems} />
      </Container>
    </div>
  );
}

Portfolio.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
