import React from "react";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useCarouselStyles from "../../assets/css/_carousel"
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


export default function Carousel(props) {
  const classes = useCarouselStyles();
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
