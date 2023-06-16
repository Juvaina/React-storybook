import React from "react";
import PropTypes from "prop-types";
import Lock from "../../resources/Icon_Custom_lock.svg";

export default function P2Accordion(props) {
  const displaylist = props.displayList;
  const flush = props.flush;
  const forSingpass = props.forSingpass;
  return (
    <>
      <div
        className={flush ? "accordion accordion-flush" : "accordion"}
        id="accordionExample"
      >
        {displaylist?.map((display, index) => (
          <div
            className={flush ? "accordion-item" : "accordion-item shadow mb-2"}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button bg-white collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#" + String(index)}
                aria-expanded="false"
                aria-controls={String(index)}
              >
                {display.heading}
              </button>
              {forSingpass ? (
                <div
                  className="px-3 mb-2 text-secondary d-flex"
                  style={{ fontSize: "11px" }}
                >
                  <img src={Lock} alt="Lock Icon"></img>
                  <span>Requires Singpass login</span>
                </div>
              ) : (
                ""
              )}
            </h2>
            <div
              id={String(index)}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">{display.content}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

P2Accordion.propTypes = {
  displayList: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
