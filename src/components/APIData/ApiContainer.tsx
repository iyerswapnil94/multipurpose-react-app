import { Card, CardContent, Typography } from "@material-ui/core";
import { Button } from "components/Common/Button";
import { TextBox } from "components/Common/TextBox";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useStyles } from "./styles";

interface IProps {}

const ApiContainerComponent: React.FC<IProps> = () => {
  const classes = useStyles();
  const [urlValue, setUrl] = useState("");
  const [resultContent, setResultContent] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const sendRequest = useCallback(async () => {
    if (isFetching) return;
    setResultContent(null);
    setIsFetching(true);

    let error = false;
    const response = await fetch(urlValue).catch(err => {
      setIsFetching(false);
      error = true;
      return err && err.toString();
    });
    const data = error ? response : await response.json();

    setResultContent(data);
    setIsFetching(false);
  }, [isFetching, urlValue]);

  return (
    <>
      <Typography className={classes.apiPrimaryText}>
        Enter full url of the API in the text box below and then click on <i>Fetch Data</i> button
        to get the API response in JSON format.
      </Typography>
      <Card className={classes.apiActionContainer} variant="outlined">
        <CardContent>
          <TextBox
            value={urlValue ? urlValue.trim() : ""}
            label="Enter API Url"
            className={classes.apiInputText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
          />
          <Button buttonText="Fetch Data" onClick={sendRequest} />
        </CardContent>
      </Card>
      <Typography className={classes.apiSecondaryText}>
        <b>Note: </b>This will only give data for GET Api calls.
        <br />
        Please add respective ids/tokens/parameters that are needed for successful API
        authentication and querying.
      </Typography>
      {resultContent && (
        <div className={classes.apiOutput}>
          <b>Output: </b>
          <br />
          <pre>{JSON.stringify(resultContent, undefined, 4)}</pre>
        </div>
      )}
    </>
  );
};

export const ApiContainer = ApiContainerComponent;
