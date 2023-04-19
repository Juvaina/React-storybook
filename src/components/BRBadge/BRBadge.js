import React from "react";
import Badge from "react-bootstrap/Badge";
import PropTypes from "prop-types";

export default function BRBadge(props) {
  const { variant } = props;
  return (
    <div>
      <h1>
        Example heading <Badge bg={variant}>New</Badge>
      </h1>
      <h2>
        Example heading <Badge bg={variant}>New</Badge>
      </h2>
      <h3>
        Example heading <Badge bg={variant}>New</Badge>
      </h3>
      <h4>
        Example heading <Badge bg={variant}>New</Badge>
      </h4>
      <h5>
        Example heading <Badge bg={variant}>New</Badge>
      </h5>
      <h6>
        Example heading <Badge bg={variant}>New</Badge>
      </h6>
    </div>
  );
}

BRBadge.propTypes = {
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
BRBadge.defaultProps = {
  variant: "primary",
};
