import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles(
  theme => ({
    root: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      height: "100%"
    }
  }),
  { name: "HorizontalSplitLayout" }
);

const HorizontalSplitLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      {children}
    </div>
  );
};

HorizontalSplitLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default HorizontalSplitLayout;
