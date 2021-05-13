import { Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { standardColors } from "src/config/colorConfig";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: 16,
    },
    rootColor: {
      color: standardColors.primary,
    },
    iconColor: {
      color: standardColors.primary,
    },
    textField: {
      minWidth: 100,
      margin: "8px 0",
      "th>&, td>&": {
        width: "100%",
      },
      '& input[value=""]': {
        textOverflow: "ellipsis",
      },
      "& input::placeholder": {
        opacity: 1,
        color: "#9CA3AA",
      },
    },
    disabled: {
      color: "#fff",
      opacity: 0.5,
    },
    label: {
      fontSize: 16,
      fontWeight: 500,
      minHeight: 28,
      "& .icon": {
        fontSize: 21,
        marginRight: 10,
      },
      display: "flex",
      alignItems: "center",
    },
    labelColor: {
      color: standardColors.primary,
    },
    labelDisabled: {
      color: `${"#fff"} !important`,
      opacity: 0.3,
    },
    focused: {
      color: "#fff !important",
    },
    inputUnderline: {
      "&:hover:not($disabled):not($focused):not($error):before": {
        borderBottom: `1px solid #CCC`,
      },
      "&:before": {
        borderBottom: `1px solid ${standardColors.primary}`,
      },
      "&:after": {
        borderBottom: `1px solid #fff`,
      },
    },
    buttonRoot: {
      background: standardColors.primary,
      fontSize: 15,
      fontWeight: 600,
      textTransform: "none",
      margin: 10,
    },
  })
);
