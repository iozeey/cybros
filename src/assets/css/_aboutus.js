import { makeStyles } from '@material-ui/core/styles';
import getCommonStyles from './_common';

const useAboutUsStyles = makeStyles((theme) => ({
  ...getCommonStyles(theme),
  root: {
    // backgroundImage: "linear-gradient(to left,#4df4bc 0%,#25a8c4 51%)",
    // backgroundImage: "linear-gradient(to left,#091930 10%,#132C40 99%)",
    // backgroundImage: `url(${require("../img/tech.jpeg")})`,
    borderRadius: 0,
    backgroundColor: '#2ac4ea',
    backgroundPosition: 'center',
    ...getCommonStyles(theme).sectionContainer,
  },
}));
export default useAboutUsStyles;
