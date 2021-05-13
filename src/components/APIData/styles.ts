import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    apiInputText: {
      marginTop: 16,
      width: 500
    },
    apiPrimaryText: {
      padding: 10
    },
    apiSecondaryText: {
      padding: 10
    },
    apiActionContainer: {
      padding: 20,
      margin: 20,
      width: "fit-content",
      backgroundColor: "#43324c"
    },
    apiOutput: {
      padding: 8,
      marginTop: 20,
      border: "1px solid"
    }
  })
);
