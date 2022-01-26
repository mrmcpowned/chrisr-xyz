import React from "react";
import { createUseStyles } from "react-jss";
import { useTransition, animated, config } from "react-spring";

const useStyles = createUseStyles({
  sectionStyle: {
    width: "100%",
    minHeight: "100vh",
    background: "whitesmoke",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    color: "cornflowerblue",
  },
  heroText: {
    fontSize: "calc(3vw + 3vh)",
    "@media(max-width:600px)": {
      fontSize: "calc(5vw + 3vh)",
    },
  },
  subText: {
    fontSize: "calc(1.5vw + 1.5vh)",
    "@media(max-width:600px)": {
      fontSize: "calc(3vw + 2vh)",
    },
  },
  content: {
    maxWidth: "80vw",
  },
  portrait: {
    borderRadius: "100%",
    width: "20vw",
    maxWidth: 1000,
    minWidth: 300,
    "@media(max-width:600px)": {
      width: "100%",
      maxWidth: "unset",
    },
  },
});

export const Hero = () => {
  const classes = useStyles();

  const profilePic = "https://github.com/mrmcpowned.png";

  let elements = [
    "",
    <img src={profilePic} className={classes.portrait} alt="Portrait of Chris" />,
    <h1 className={classes.heroText}>
      Hey there, I'm <span className={classes.name}>Chris</span>!
    </h1>,
    <h2 className={classes.subText}>I write software and stuff.</h2>,
  ];

  const heroAnimation = useTransition(elements, {
    config: config.slow,
    keys: elements.map((item, index) => index),
    from: {
      y: 100,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
    },
    trail: 750,
  });

  return (
    <div className={classes.sectionStyle}>
      <div className={classes.content}>
        {heroAnimation((style, item) => (
          <animated.div style={style}>{item}</animated.div>
        ))}
      </div>
    </div>
  );
};
