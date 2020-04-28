import React from "react";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  mainCarousel: {
    backgroundColor: "rgba(0,0,0,.3)",
    padding: theme.spacing(6, 0),
    "& .slick-prev": {
      left: "35px",
    },
    "& .slick-next": {
      right: "35px",
    },
    "& .slick-arrow": {
      backgroundColor: theme.palette.background.paper,
      zIndex: 1,
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      boxShadow: "0 0 4px 1px #333",
    },
    "& .slick-prev:before, .slick-next:before": {
      color: "#333",
      lineHeight: 3,
    },
    "& .slick-current": {
      transform: "scale(1.15)",
    },
    "& .slick-current div.carousel-item-inner": {
      boxShadow: "0 0 4px 0 #000",
    },
    "& img": {
      margin: "0 auto",
    },
    "& div.carousel-item": {
      //   margin: theme.spacing(2),
    },
    "& div.carousel-item-inner": {
      width: "200px",
      height: "80px",
      padding: theme.spacing(4, 2),
      margin: theme.spacing(2, "auto"),
      color: "#333",
      borderRadius: "4px",
      backgroundColor: theme.palette.background.paper,
    },
  },
}));

export default function Carousel(props) {
  const classes = useStyles();
  const { title, technologies } = props;
  var settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    nextArrow: <SampleNextArrow className="btn-next" />,
    prevArrow: <SamplePrevArrow className="btn-prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container className={classes.mainCarousel} maxWidth="xl">
      <Slider title={title} {...settings}>
        {technologies.map((tech) => (
          <div className="carousel-item">
            <div className="carousel-item-inner">
              <img src={require("assets/Technologies/" + tech.img)} alt={tech.title} />
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
}

Carousel.propTypes = {
  title: PropTypes.string,
};
