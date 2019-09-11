import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const MenuButton = ({ children }) => {
  return <Button textAlign="left">{children}</Button>;
};

MenuButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default MenuButton;
