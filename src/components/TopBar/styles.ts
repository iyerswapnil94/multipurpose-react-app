import { Theme } from "@material-ui/core";
import { createStyles } from "@material-ui/core/styles";

export const styles = (theme: Theme) =>
  createStyles({
    appTopBar: {
      boxShadow: "0px 0px 10px 2px #000000",
      background: "#252545",
      padding: 15,
      color: "#cbcefc",
      fontSize: 18,
      fontWeight: 500,
    },
  });
