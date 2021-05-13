import { TextField } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import { useStyles } from "./styles";

interface IProps {
  value: string;
  label: string;
  className?: string;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const TextBoxComponent: React.FC<IProps> = ({
  value,
  label,
  className,
  type,
  onChange,
}) => {
  const classes = useStyles();
  return (
    <TextField
      onChange={onChange}
      id="basic-text-box"
      label={label || "Label"}
      variant="standard"
      value={value || ""}
      InputProps={{
        classes: {
          disabled: classes.disabled,
          input: classNames(classes.rootColor),
          underline: classes.inputUnderline,
        },
      }}
      InputLabelProps={{
        className: classNames(classes.label, classes.labelColor),
        shrink: true,
        classes: {
          focused: classes.focused,
          disabled: classes.labelDisabled,
        },
      }}
      FormHelperTextProps={{
        classes: { root: classes.root },
      }}
      className={classNames(className, classes.textField)}
      type={type || "text"}
    />
  );
};

export const TextBox = TextBoxComponent;
