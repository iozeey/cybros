import { makeStyles } from '@material-ui/core/styles';
import getCommonStyles from './_common';

const useTestimonial = makeStyles((theme) => ({
  ...getCommonStyles(theme),
  root: {
    backgroundImage: 'linear-gradient(to bottom,#5cbbf3 10%,#59cce2 56%)',
    ...getCommonStyles(theme).sectionContainer,
    backgroundPosition: 'center',
  },
}));

export default useTestimonial;
