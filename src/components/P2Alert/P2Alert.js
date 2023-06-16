import React from "react";
import PropTypes from "prop-types";

export default function P2Alert(props) {
  const variant = props.variant;
  const cta = props.cta;
  return (
    <div className={"alert alert-" + variant} role="alert">
      {cta ? (
        <>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              {getIcon(variant)}
              <h4 className={"alert-heading fs-md-5 py-2 text-" + variant}>
                {props.Heading}
              </h4>
            </div>
            <a className="mt-2" href="#">
              Action
              <i className="bi bi-chevron-right"></i>
            </a>
          </div>
          <div className="ms-4">{props.children}</div>
        </>
      ) : (
        <>
          {getIcon(variant)}
          {props.children}
        </>
      )}
    </div>
  );
}

const getIcon = (variant) => {
  switch (variant) {
    case "success":
      return <i className="bi bi-check-circle pe-2 mt-1 fs-4 text-success"></i>;
    case "danger":
      return (
        <i className="bi bi-exclamation-triangle pe-2 mt-1 fs-4 text-danger"></i>
      );
    case "warning":
      return (
        <i className="bi bi-exclamation-circle pe-2 mt-1 fs-4 text-warning"></i>
      );
  }
};

P2Alert.propTypes = {
  variant: PropTypes.oneOf(["success", "danger", "warning"]),
};
