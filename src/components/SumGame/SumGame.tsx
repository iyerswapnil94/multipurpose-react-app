import { Typography, withStyles, WithStyles } from "@material-ui/core";
import { Button } from "components/Common/Button";
import * as React from "react";
import { useCallback, useMemo, useState, useEffect } from "react";
import { RandomNumber } from "./RandomNumber";
import classNames from "classnames";
import { styles } from "./styles";
import { useHistory } from "react-router-dom";

interface IProps extends WithStyles<typeof styles> {}

enum GameCompletionStatus {
  Success,
  Fail,
  InProgress,
}

const getNewIndex = (existingIndices: number[]): number => {
  const randomNumber = Math.floor(Math.random() * 9);
  return existingIndices.includes(randomNumber) ? getNewIndex(existingIndices) : randomNumber;
};

const SumGameComponent: React.FC<IProps> = ({ classes }) => {
  const [timeLeft, setTimeLeft] = useState(15);
  const [selectedNumbersIndices, setSelectedNumbersIndices] = useState([] as number[]);
  const [gameCompletionStatus, setGameCompletionStatus] = useState(GameCompletionStatus.InProgress);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    if (timeLeft <= 0 || gameCompletionStatus !== GameCompletionStatus.InProgress) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const randomNumbers = useMemo(() => Array.from({ length: 9 }, () => 1 + Math.floor(Math.random() * 10)), []);

  const indices = useMemo(() => {
    const index1 = getNewIndex([]);
    const index2 = getNewIndex([index1]);
    const index3 = getNewIndex([index1, index2]);
    const index4 = getNewIndex([index1, index2, index3]);
    return [index1, index2, index3, index4];
  }, []);

  const validSelections = useMemo(
    () => [randomNumbers[indices[0]], randomNumbers[indices[1]], randomNumbers[indices[2]], randomNumbers[indices[3]]],
    [randomNumbers, indices]
  );

  const total = useMemo(() => validSelections.reduce((acc, curr) => acc + curr), [validSelections]);

  const setNumberSelection = useCallback(
    (index: number) => {
      const updatedSelection = selectedNumbersIndices.includes(index)
        ? selectedNumbersIndices.filter((s) => s !== index)
        : [...selectedNumbersIndices, index];
      setSelectedNumbersIndices(updatedSelection);
    },
    [selectedNumbersIndices]
  );

  const handleReset = useCallback(() => {
    setSelectedNumbersIndices([]);
  }, [setSelectedNumbersIndices]);

  const handlePlayAgain = useCallback(() => {
    window.location.reload();
  }, []);

  useEffect(() => {
    if (selectedNumbersIndices.length >= 4) {
      const result = selectedNumbersIndices.reduce((acc, el) => acc + randomNumbers[el], 0);
      const status = result === total ? GameCompletionStatus.Success : GameCompletionStatus.Fail;
      setGameCompletionStatus(status);
    }
    return () => {
      setGameCompletionStatus(GameCompletionStatus.InProgress);
    };
  }, [selectedNumbersIndices, randomNumbers]);

  return (
    <div className={classes.sumGameContainer}>
      <Typography className={classes.gameMessage}>
        Select 4 numbers such that their sum is equal to the below mentioned number.
        <br />
        <i>Note:</i> You have 15 seconds to do so.
      </Typography>
      <div
        className={classNames(
          classes.total,
          gameCompletionStatus === GameCompletionStatus.Success && classes.success,
          (gameCompletionStatus === GameCompletionStatus.Fail || timeLeft <= 0) && classes.failure
        )}
      >
        {total}
      </div>
      <div className={classes.randomNumberGrid}>
        {randomNumbers.map((number, index) => {
          const isDisabled =
            timeLeft <= 0 || selectedNumbersIndices.length >= 4 || selectedNumbersIndices.includes(index);
          return (
            <RandomNumber
              key={index}
              inputNumber={number}
              index={index}
              handleNumberClick={setNumberSelection}
              disabled={isDisabled}
            />
          );
        })}
      </div>
      <div className={classes.resetContainer}>
        <Button
          disabled={gameCompletionStatus !== GameCompletionStatus.InProgress}
          className={classes.reset}
          buttonText="RESET"
          onClick={handleReset}
        />
        <div className={classes.timer}>{timeLeft}</div>
        <Button className={classes.reset} buttonText="PLAY AGAIN" onClick={handlePlayAgain} />
      </div>
    </div>
  );
};

export const SumGame = withStyles(styles)(SumGameComponent);
