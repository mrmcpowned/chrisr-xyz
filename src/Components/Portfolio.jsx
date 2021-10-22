import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  sectionStyle: {
    width: "100%",
    height: "100vh",
    background: "red",
    display: "flex",
  },
  name: {
    color: "cornflowerblue",
  },
});

export const Portfolio = () => {
  const classes = useStyles();
  return (
    <div className={classes.sectionStyle}>
      <h1>
        Hey there, I'm <span className={classes.name}>Chris</span>!
      </h1>
    </div>
  );
};
