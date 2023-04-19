import React from "react";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

export default function BRButton(props) {
  const { variant, size } = props;
  return (
    <Button key={variant} variant={variant} size={size}>
      Button
    </Button>
  );
}

BRButton.propTypes = {
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

BRButton.defaultProps = {
  size: "lg",
  variant: "primary",
};
