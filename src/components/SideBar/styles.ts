import { createStyles } from "@material-ui/core/styles";

export const styles = () =>
  createStyles({
    sideBarList: {
      marginTop: 20,
    },
    divider: {
      backgroundColor: "#252545",
    },
    listItem: {
      padding: 15,
      "&:hover": {
        background: "#252545",
        opacity: 0.6,
      },
    },
    selectedListItem: {
      background: "#252545",
    },
    rotatingLogo: {
      animation: `$rotation 7s infinite linear`,
      cursor: "pointer",
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
