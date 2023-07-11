import React from "react";
import PropTypes from "prop-types";

export default function B2Input(props) {
  const placeholder = props.placeholder;
  const type = props.type;
  const label = props.label;
  const id = props.id;
  const size = props.size;
  const mode = props.mode;
  const addonRightLabel = props.addonRightLabel;
  const addonLeftLabel = props.addonLeftLabel;
  const prefixLabel = props.prefixLabel;
  const suffixLabel = props.suffixLabel;
  let normal = true;

  if (prefixLabel || suffixLabel || addonLeftLabel || addonRightLabel) {
    normal = false;
  }

  const GroupInput = (props) => {
    const mode = props.mode;
    const addonRightLabel = props.addonRightLabel;
    const addonLeftLabel = props.addonLeftLabel;
    const type = props.type;
    const placeholder = props.placeholder;
    const id = props.id;

    return (
      <>
        <div class="input-group mb-3">
          {addonLeftLabel ? (
            <span class="input-group-text" id={"addon-" + mode}>
              {addonLeftLabel}
            </span>
          ) : (
            <></>
          )}

          <input
            type={type}
            class="form-control"
            placeholder={placeholder}
            id={id}
          />

          {addonRightLabel ? (
            <span class="input-group-text" id={"addon-" + mode}>
              {addonRightLabel}
            </span>
          ) : (
            <></>
          )}
        </div>
      </>
    );
  };

  const PrefixSuffixInput = (props) => {
    const { prefixLabel, suffixLabel } = props;
    return (
      <>
        <div className="mb-3 prefix-suffix-input">
          {/* <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label> */}

          <span className="position-relative">
            {prefixLabel ? (
              <i className="bi bi-person prefix-position"></i>
            ) : (
              <></>
            )}
            {suffixLabel ? (
              <i className="bi bi-x-circle-fill text-secondary suffix-position"></i>
            ) : (
              <></>
            )}
            <input
              type={type}
              placeholder={placeholder}
              id={id}
              className={
                prefixLabel ? "form-control prefix-placeholder" : "form-control"
              }
            />
          </span>
        </div>
      </>
    );
  };

  const GroupInputp = (props) => {
    const mode = props.mode;
    const addonRightLabel = props.addonRightLabel;
    const addonLeftLabel = props.addonLeftLabel;
    const type = props.type;
    const placeholder = props.placeholder;
    const id = props.id;

    // if (prefixLabel || suffixLabel) {
    //   classes = "";
    // }

    return (
      <>
        <div class="input-group mb-3 prefix-suffix-input">
          {addonRightLabel ? (
            <span class="input-group-text" id={"addon-" + mode}>
              {addonRightLabel}
            </span>
          ) : (
            <></>
          )}

          <span className="position-relative">
            {prefixLabel ? (
              <i className="bi bi-person prefix-position"></i>
            ) : (
              <></>
            )}
            {suffixLabel ? (
              <i className="bi bi-x-circle-fill text-secondary suffix-position"></i>
            ) : (
              <></>
            )}
            <input
              type={type}
              placeholder={placeholder}
              id={id}
              className={
                prefixLabel ? "form-control prefix-placeholder" : "form-control"
              }
            />
          </span>

          {addonLeftLabel ? (
            <span class="input-group-text" id={"addon-" + mode}>
              {addonLeftLabel}
            </span>
          ) : (
            <></>
          )}
        </div>
      </>
    );
  };
  return (
    <>
      {normal ? (
        <div class="mb-3">
          {label ? (
            <label for={id} class="form-label">
              {label}
            </label>
          ) : (
            <></>
          )}
          <input
            type={type}
            class="form-control"
            id={id}
            placeholder={placeholder}
          />
        </div>
      ) : (
        <></>
      )}

      {addonRightLabel || addonLeftLabel ? (
        <GroupInput
          type={type}
          placeholder={placeholder}
          id={id}
          mode={mode}
          addonLeftLabel={addonLeftLabel}
          addonRightLabel={addonRightLabel}
        />
      ) : (
        <></>
      )}
      {prefixLabel || suffixLabel ? (
        <PrefixSuffixInput
          type={type}
          placeholder={placeholder}
          id={id}
          prefixLabel={prefixLabel}
          suffixLabel={suffixLabel}
        />
      ) : (
        <></>
      )}

      <GroupInputp
        type={type}
        placeholder={placeholder}
        id={id}
        mode={mode}
        addonLeftLabel={addonLeftLabel}
        addonRightLabel={addonRightLabel}
        prefixLabel={prefixLabel}
        suffixLabel={suffixLabel}
      />
    </>
  );
}

B2Input.propTypes = {
  prefixLabel: PropTypes.bool,
  max: PropTypes.bool,
};
