import { makeStyles } from "@material-ui/core/styles";

const useCarouselStyles = makeStyles((theme) => ({
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
      height: "100%",
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
export default useCarouselStyles;
