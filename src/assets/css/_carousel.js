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
      [theme.breakpoints.down("sm")]: {
        display: "none !important",
      },
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
      opacity: 1,
    },
    "& .slick-center": {
      position: "relative",
      zIndex: 1,
    },
    "& img": {
      margin: "0 auto",
      padding: "10px",
      maxWidth: "calc(100% - 20px)",
    },
    "& div.carousel-item": {
      //   margin: theme.spacing(2),
    },
    "& div.carousel-item-inner": {
      maxWidth: "200px",
      height: "80px",
      position: "relative",
      display: "flex !important",
      alignItems: "center",
      opacity: 0.75,
      color: "#333",
      borderRadius: "10px",
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(4, 0),
      margin: theme.spacing(2, "auto"),
      boxShadow: "2px 2px 10px -2px rgba(0,0,0,0.3)",
    },
  },
}));
export default useCarouselStyles;
