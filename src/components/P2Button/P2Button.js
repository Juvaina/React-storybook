import React from "react";
import PropTypes from "prop-types";

export default function P2Button(props) {
  const { variant, disabled, startIcon, endIcon, ...others } = props;
  return (
    <button
      type="button"
      className={`${disabled ? getClass(variant) : "btn btn-" + variant} `}
      disabled={disabled}
      {...others}
    >
      {startIcon}
      {props.label}
      {endIcon}
    </button>
  );
}

const getClass = (variant) => {
  switch (variant) {
    case "primary-1":
      return "btn btn-secondary";
    case "primary-2":
      return "btn btn-secondary";
    case "outline-primary":
      return "btn btn-outline-secondary";
    case "link text-decoration-none":
      return "btn btn-link text-decoration-none";
  }
};

P2Button.propTypes = { disabled: PropTypes.bool };
