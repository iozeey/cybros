import { makeStyles } from "@material-ui/core/styles";
import getCommonStyles from "./_common";

const useWhyChooseUs = makeStyles((theme) => ({
  ...getCommonStyles(theme),
  root: {
    backgroundImage: "linear-gradient(to left,#4df4bc 0%,#25a8c4 51%)",    
    backgroundPosition: "center",
    ...getCommonStyles(theme).sectionContainer,
  },
}));
export default useWhyChooseUs;
