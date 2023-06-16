import React from "react";
import PropTypes from "prop-types";

export default function P2Carousel(props) {
  const displaylist = props.displayList;
  const { cardproperties, buttonContent, buttonClass } = props;
  return (
    <div className={"card ecard bg-lighter-teal " + cardproperties}>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {displaylist.map((display, index) => {
            return (
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current="true"
                aria-label={`Slide ${index + 1}`}
              ></button>
            );
          })}
        </div>
        <div className="carousel-inner">
          {displaylist.map((display, index) => (
            <div
              className={
                index === 0 ? "carousel-item active" : "carousel-item "
              }
            >
              <div className="card-body px-5">
                <h5 className="card-title">{display.title}</h5>
                <p className="card-text">{display.cardcontent}</p>
                <div className="container d-flex justify-content-center">
                  <a href="#" className={"w-50 " + buttonClass}>
                    {buttonContent}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

P2Carousel.propTypes = {
  displayList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      cardcontent: PropTypes.string.isRequired,
    })
  ).isRequired,
};
