import { Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    "@global": {
      body: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        width: "100%",
        height: "100%",
      },
    },
    baseContainer: {
      display: "flex",
      height: "100vh",
    },
    sideBarContainer: {
      flex: 1,
      backgroundColor: "blue",
      cursor: "pointer",
      overflowX: "hidden",
    },
    pageContainer: {
      flex: 4,
      background: "#576266",
      display: "flex",
      overflowX: "auto",
    },
    pageContent: {
      height: "100%",
      display: "flex",
      overflow: "auto",
      marginTop: -30,
      paddingTop: 30,
    },
  })
);
