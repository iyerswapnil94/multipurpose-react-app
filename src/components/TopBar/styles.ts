import { createStyles } from "@material-ui/core/styles";
import { standardColors } from "src/config/colorConfig";

export const styles = () =>
  createStyles({
    appTopBar: {
      boxShadow: "0px 0px 10px 2px #000000",
      background: "#252545",
      padding: 15,
      textAlign: "center",
    },
    appTitle: {
      color: standardColors.primary,
      fontSize: 20,
      fontWeight: 500,
    },
  });
