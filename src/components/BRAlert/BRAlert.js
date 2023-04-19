import React from "react";
import Alert from "react-bootstrap/Alert";
import PropTypes from "prop-types";

export default function BRAlert(props) {
  const { variant } = props;
  return (
    <Alert key={variant} variant={variant}>
      This is a {variant} alert—check it out!
    </Alert>
  );
}

BRAlert.propTypes = {
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
BRAlert.defaultProps = {
  variant: "primary",
};
