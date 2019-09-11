import React from "react";
import PropTypes from "prop-types";
import MuiButton from "@material-ui/core/Button";
import useStyles from "./Button.styles";

const Button = ({ children, textAlign, ...props }) => {
  const {
    textAlignLeft,
    textAlignRight,
    textAlignCenter,
    ...classes
  } = useStyles();
  const alignmentClass =
    textAlign === "left"
      ? textAlignLeft
      : textAlign === "right"
      ? textAlignRight
      : textAlignCenter;

  return (
    <MuiButton {...props} classes={classes} className={alignmentClass}>
      {children}
    </MuiButton>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Button;
