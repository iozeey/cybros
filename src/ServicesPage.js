import React from "react";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Services from "components/Services/Services";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:  `url(${require("assets/img/AdobeStock_298681782.jpeg")})`,
    // backgroundImage: "linear-gradient(to left,#60AFFF 10%,#301140 99%)",
    // backgroundImage: "linear-gradient(to left,#598797 10%,#132C40 99%)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: theme.spacing(10, 0),
    color: theme.palette.background.paper,
  },
  postContent: {
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 8, 8),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  title: {
    fontFamily: "vester-medium",
  },
  description:{
    fontFamily: "monospace",
  }
}));

const services = [
  { title: "Web Design & Development", img: "webdesign.jpg" },
  { title: "Security & API Solution", img: "security.jpg" },
  { title: "Automation", img: "fig-testing-process.svg" },
  { title: "Mobile Solution", img: "iPad-Application-meridian-uae.jpg" },
  { title: "Content Maker", img: "write.jpg" },
  { title: "Digital Marketing", img: "responsive-design.jpg" },
];
export default function Development(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <div id="services" className={classes.root}>
      <Container fixed>
        <Grid
          container
          spacing={8}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={12}>
            <div className={classes.postContent}>
              <Typography variant="h4" align="" className={classes.title}>
                {title}
              </Typography>
              <Typography component="p" align="" className={classes.description}>
                {description}
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Services services={services} />
      </Container>
    </div>
  );
}

Development.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
