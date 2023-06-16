import React from "react";
import contentImage from "../../resources/content_icon.svg";

export default function P2Card(props) {
  const {
    title,
    eserviceIcon,
    cardcontent,
    cardproperties,
    buttonContent,
    contentIcon,
    buttonClass,
  } = props;
  return (
    <div className={"card ecard " + cardproperties}>
      <div
        className="container w-25 bg-light-teal"
        style={{
          height: "5px",
        }}
      ></div>
      {eserviceIcon != ("" || undefined) && (
        <div className="card-body p-1">
          <h5 className="card-title text-center">{title}</h5>
          <div className="container d-flex justify-content-center pt-2">
            {eserviceIcon}
          </div>
        </div>
      )}
      {cardcontent != ("" || undefined) && (
        <div className="card-body">
          <div className="d-flex">
            <h5 className="card-title">{title}</h5>
            {contentIcon ? <img src={contentImage} className="h-25"></img> : ""}
          </div>
          <p className="card-text">{cardcontent}</p>
          <a href="#" className={buttonClass}>
            {buttonContent}
          </a>
        </div>
      )}
    </div>
  );
}
