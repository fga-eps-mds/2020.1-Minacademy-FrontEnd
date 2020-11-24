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

Radio.defaultProps = {
  required: false,
  defaultValue: null,
  pattern: { value: {}, message: '' },
  errors: null,
  disabled: false,
  disabledMessage: ""
};

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  errors: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.object
  ]),
  pattern: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.object]),
    message: PropTypes.string.isRequired,
  }),
  value: PropTypes.oneOfType([PropTypes.string,  PropTypes.number]).isRequired,
  disabled: PropTypes.bool,
  disabledMessage: PropTypes.string,
  required: PropTypes.bool,
};

export default Radio;
