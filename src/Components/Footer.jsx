import { config, useTransition } from "@react-spring/core";
import { animated } from "@react-spring/web";
import React, { useState } from "react";
import InView from "react-intersection-observer";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  sectionStyle: {
    width: "100%",
    height: "100vh",
    background: "#ce0909",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& ul": {
      listStyle: "none",
      paddingInline: "unset",
    },
    "& ul li": {
      marginBottom: "calc(.5vw + .5vh)",
    },
  },
  link: {
    "&:hover": {
      textDecoration: "underline",
    },
    "&:visited": {
      color: "black",
    },
    textDecoration: "none",
    color: "whitesmoke",
    fontSize: "calc(1.5vw + 1.5vh)",
    "@media(max-width:600px)": {
      fontSize: "calc(3vw + 2vh)",
    },
    fontWeight: "bold",
  },
});

export const Footer = () => {
  const classes = useStyles();

  const [visible, setVisible] = useState(false);

  const links = [
    {
      text: "LinkedIn",
      link: "https://linkedin.com/in/chrisrxyz",
    },
    {
      text: "GitHub",
      link: "https://github.com/mrmcpowned",
    },
    {
      text: "Instagram",
      link: "https://instagram.com/chrisr.xyz",
    },
    {
      text: "GamePad Viewer",
      link: "https://gamepadviewer.com",
    },
  ];

  const items = visible ? links : [];

  const transitions = useTransition(items, {
    keys: items.map((i) => i.text),
    from: {
      opacity: 0,
      y: 100,
    },
    enter: {
      y: 0,
      opacity: 1,
    },
    trail: 400,
    config: config.gentle,
  });

  return (
    <div className={classes.sectionStyle}>
      <InView
        onChange={(inview) => {
          setVisible(inview);
          console.log(inview);
        }}
      >
        <ul>
          {transitions((style, item) => (
            <animated.li style={style}>
              <a
                href={item.link}
                className={classes.link}
                target="_blank"
                rel="noreferrer"
              >
                {item.text}
              </a>
            </animated.li>
          ))}
        </ul>
      </InView>
    </div>
  );
};
