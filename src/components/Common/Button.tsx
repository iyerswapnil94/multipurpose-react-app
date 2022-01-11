import { Button as MIUIButton } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import { useStyles } from "./styles";

interface IProps {
  buttonText: string;
  onClick: (e: React.MouseEvent) => void;
  className?: string;
  disabled?: boolean;
}

const ButtonComponent: React.FC<IProps> = ({
  buttonText,
  onClick,
  className,
  disabled = false,
}) => {
  const classes = useStyles();
  return (
    <MIUIButton
      variant="contained"
      onClick={onClick}
      disabled={disabled}
      className={classNames(classes.buttonRoot, className)}
    >
      {buttonText}
    </MIUIButton>
  );
};

export const Button = ButtonComponent;
