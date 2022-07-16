import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./InfoBox.css";
// import { purple } from "@material-ui/core/colors";

function InfoBox({ title, cases, total, active, isPurple, isRed, ...props }) {
  console.log(title, active);
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      } ${isPurple && "infoBox--purple"}`}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <h2 className={`infoBox__cases ${!isRed && !isPurple && "infoBox__cases--green"}  `}>
          {cases}
        </h2>

        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
