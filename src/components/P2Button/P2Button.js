import React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

export default function P2Button(props) {
  const { variant, size } = props;
  return (
    <Button key={variant} variant={variant} size={size}>
      Button
    </Button>
  );
}

P2Button.propTypes = {
  size: PropTypes.oneOf(["lg", "sm"]),
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]),
};

P2Button.defaultProps = {
  size: "lg",
  variant: "primary",
};
