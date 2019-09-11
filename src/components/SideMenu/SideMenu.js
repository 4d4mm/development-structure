import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
  theme => ({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "stretch",
      width: 320,
      borderRight: `2px solid ${theme.palette.divider}`
    }
  }),
  {
    name: "SideMenu"
  }
);

const SideMenu = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

SideMenu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default SideMenu;
