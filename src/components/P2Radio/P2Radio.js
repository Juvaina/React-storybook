import React from "react";
import PropTypes from "prop-types";

export default function P2Radio(props) {
  const { radioItem } = props;
  return (
    <>
      {radioItem.map((menu) => (
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            checked={menu.checked}
            disabled={menu.disabled}
          />
          <label class="form-check-label" for="flexRadioDefault1">
            {menu.label}
          </label>
        </div>
      ))}
    </>
  );
}

P2Radio.propTypes = {
  radioItem: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      checked: PropTypes.bool,
    })
  ).isRequired,
};
