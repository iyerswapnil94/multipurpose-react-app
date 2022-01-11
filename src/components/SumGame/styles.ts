import { createStyles } from "@material-ui/core/styles";
import { standardColors } from "src/config/colorConfig";

export const styles = () =>
  createStyles({
    sumGameContainer: {
      marginTop: 20,
      padding: 60,
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
    },
    total: {
      backgroundColor: "#252545",
      textAlign: "center",
      padding: 20,
      margin: 10,
      fontSize: 26,
      border: `1px solid ${standardColors.white}`,
    },
    randomNumberGrid: {
      display: "grid",
      gridTemplateColumns: "auto auto auto",
    },
    resetContainer: {
      display: "flex",
      justifyContent: "center",
    },
    reset: {
      margin: 50,
      backgroundColor: "#252545",
      color: standardColors.white,
      border: `1px solid ${standardColors.white}`,
      flex: 1,
    },
    gameMessage: {
      textAlign: "center",
    },
    success: {
      backgroundColor: "green",
    },
    failure: {
      backgroundColor: "red",
    },
    timer: {
      margin: 20,
      fontSize: 20,
    }
  });
