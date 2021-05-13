import { Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { standardColors } from "src/config/colorConfig";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    "@global": {
      body: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      },
    },
    baseContainer: {
      display: "flex",
      height: "100vh",
      color: standardColors.primary,
    },
    sideBarContainer: {
      flex: 1,
      overflowX: "hidden",
      background: "#151530",
      padding: "20px 0",
      textAlign: "center",
    },
    pageContainer: {
      flex: 5,
      boxShadow: "0px 0px 10px 2px #000000",
      background: "#202034",
    },
    pageContent: {
      height: "100%",
      overflow: "auto",
      padding: 15,
    },
  })
);
