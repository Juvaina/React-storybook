import React from "react";
import calloutImage from "../../../resources/callout.svg";

export default function P2CalloutCard(props) {
  const {
    title,
    cardcontent,
    cardproperties,
    buttonContent,
    calloutIcon,
    buttonClass,
  } = props;
  return (
    <div className={"card ecard bg-lighter-teal " + cardproperties}>
      <div className="card-body">
        <div className="d-flex">
          {calloutIcon ? (
            <img src={calloutImage} alt="callout image" className="pe-2"></img>
          ) : (
            ""
          )}
          <h5 className="card-title">{title}</h5>
        </div>
        <p className="card-text">{cardcontent}</p>
        <div className="container d-flex justify-content-center">
          <a href="#" className={"w-50 " + buttonClass}>
            {buttonContent}
          </a>
        </div>
      </div>
    </div>
  );
}
