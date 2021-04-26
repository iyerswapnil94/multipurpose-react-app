import { Theme } from "@material-ui/core";
import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    sideBarList: {},
    divider: {
      backgroundColor: "#cbcefc",
    },
    selectedListItem: {},
    rotatingLogo: {
      animation: `$rotation 7s infinite linear`,
    },
    "@keyframes rotation": {
      from: {
        transform: "rotate(0deg)",
      },
      to: {
        transform: "rotate(360deg)",
      },
    },
  });
