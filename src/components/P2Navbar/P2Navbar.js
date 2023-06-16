import React from "react";
import PropTypes from "prop-types";

export default function P2Navbar(props) {
  const navbarContent = props.navbarContent;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <div
            className="collapse navbar-collapse justify-content-center"
            style={{ backgroundColor: "rgb(112, 112, 112)" }}
          >
            <div className="navbar-nav">
              {navbarContent?.map((content) => (
                <a
                  className="nav-link px-4 "
                  href={content.url}
                  style={{
                    color: "white",
                  }}
                >
                  {content.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div className="divider"></div>
    </>
  );
}

P2Navbar.propTypes = {
  navbarContent: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
