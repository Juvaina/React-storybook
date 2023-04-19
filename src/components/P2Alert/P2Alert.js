import React from "react";
import Alert from "react-bootstrap/Alert";
import PropTypes from "prop-types";

export default function P2Alert(props) {
  const { variant, icon, link, AdditionalContent } = props;
  if (AdditionalContent) {
    return (
      <Alert variant={variant}>
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>
    );
  } else {
    return (
      <Alert key={variant} variant={variant}>
        {icon ? <i class="bi bi-exclamation-circle"></i> : ""}
        &nbsp; This is a {variant} alert &nbsp;
        {link ? <Alert.Link href="#">with an example link</Alert.Link> : ""}
      </Alert>
    );
  }
}

P2Alert.propTypes = {
  icon: PropTypes.bool,
  link: PropTypes.bool,
  AdditionalContent: PropTypes.bool,
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
P2Alert.defaultProps = {
  variant: "primary",
};
