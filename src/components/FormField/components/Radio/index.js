import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Radio = ({
  label,
  name,
  value,
  defaultValue,
  register,
  errors,
  disabled,
  disabledMessage,
  required = false, // eslint-disable-line no-unused-vars
  pattern = {},  // eslint-disable-line no-unused-vars
  ...otherProps
}) => {
  return (
    <div className="custom-radio">
      <label htmlFor={name}>
        <input
          type="radio"
          name={name}
          value={value}
          disabled={disabled}
          ref={register}
          {...otherProps}
        />
          <span className={`${disabled ? 'disabled-option' : ''}`}>{label}</span>
          {disabledMessage && disabled && <span className="disabled-message">{disabledMessage}</span> }
      </label>
    </div>
)};

// Radio.defaultProps = {
//   type: "text",
//   placeholder: "",
//   defaultValue: "",
//   required: "",
//   pattern: {value: {}, message: ""},
//   minLength: {value: 0, name: ""},
//   validate: null,
//   errors: null
// };

// Radio.propTypes = {
//   label: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   type: PropTypes.string,
//   register: PropTypes.func.isRequired,
//   defaultValue: PropTypes.string,
//   placeholder: PropTypes.string,
//   required: PropTypes.string,
//   pattern: PropTypes.shape({
//     value: PropTypes.oneOfType([PropTypes.object]),
//     message: PropTypes.string.isRequired
//   }),
//   minLength: PropTypes.shape({
//     value: PropTypes.number.isRequired,
//     message: PropTypes.string.isRequired
//   }),
//   errors: PropTypes.oneOfType([
//     PropTypes.oneOf([null]),
//     PropTypes.object
//   ]),
//   validate: PropTypes.oneOfType([
//     PropTypes.oneOf([null]),
//     PropTypes.object
//   ]),
// };

export default Radio;
