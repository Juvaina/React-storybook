import React from "react";

export default function P2ButtonGroup() {
  let elements = document.getElementsByTagName("html");
  let maxFontSize = 18;
  let minFontSize = 14;

  const increateFontSize = () => {
    for (var i = 0; i < elements.length; i++) {
      let currentFontSize = parseInt(
        window.getComputedStyle(elements[i]).fontSize
      );
      if (currentFontSize < maxFontSize) {
        elements[i].style.fontSize = `${currentFontSize + 1}px`;
      }
    }
  };
  const decreaseFontSize = () => {
    for (var i = 0; i < elements.length; i++) {
      let currentFontSize = parseInt(
        window.getComputedStyle(elements[i]).fontSize
      );
      if (currentFontSize > minFontSize) {
        elements[i].style.fontSize = `${currentFontSize - 1}px`;
      }
    }
  };

  return (
    <div className="btn-group" role="group" aria-label="Font Resizer">
      <button
        type="button"
        onClick={decreaseFontSize}
        className="btn btn-primary-1 font-resize-small"
      >
        A
      </button>
      <button
        type="button"
        onClick={increateFontSize}
        className="btn btn-primary-1 font-resize-big"
      >
        A
      </button>
    </div>
  );
}
