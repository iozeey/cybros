import { makeStyles } from '@material-ui/core/styles';
import getCommonStyles from './_common';

const useAboutUsStyles = makeStyles((theme) => ({
  ...getCommonStyles(theme),
  root: {
    ...getCommonStyles(theme).sectionContainer,
    // backgroundImage: `url(${require("../img/mission.png")})`,
    backgroundColor: 'white',
    backgroundPosition: 'center',
    position: 'relative',
    borderRadius: '25px',
    width: '80%',
    left: '10%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
}));
export default useAboutUsStyles;
