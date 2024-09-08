import { makeStyles } from '@material-ui/core/styles';
import getCommonStyles from './_common';

const useAboutUsStyles = makeStyles((theme) => ({
  ...getCommonStyles(theme),
  root: {
    ...getCommonStyles(theme).sectionContainer,
    backgroundColor: 'white',
    backgroundPosition: 'center',
    position: 'relative',
    borderRadius: '25px',
    width: '80%',
    left: '10%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  },
}));
export default useAboutUsStyles;
