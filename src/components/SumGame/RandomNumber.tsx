import { Button } from "components/Common/Button";
import * as React from "react";

interface IProps {
  inputNumber: number;
  index: number;
  disabled: boolean;
  handleNumberClick: (index: number) => void;
}

export const RandomNumber: React.FC<IProps> = ({ inputNumber, index, disabled, handleNumberClick }) => {
  return (
    <Button
      buttonText={inputNumber.toString()}
      onClick={() => handleNumberClick(index)}
      disabled={disabled}
    />
  );
};
