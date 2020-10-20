import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Input = ({
  label,
  name,
  type,
  placeholder,
  register,
  pattern,
  minLength,
  required,
  validate,
  errors,
}) => (
  <div className="field">
    <label htmlFor={label}>{label}</label>
    <input
      className="field__input"
      type={type}
      name={name}
      placeholder={placeholder}
      ref={register({ required, pattern, minLength, validate })}
      errors={errors}
    />
    {(errors?.name && (
      <span className="field__input--danger">{errors?.name.message}</span>
    )) || <br />}
  </div>
);

Input.defaultProps = {
  type: "text",
  placeholder: "",
  required: "",
  pattern: {value: {}, message: ""},
  minLength: {value: 0, name: ""},
  validate: null,
  errors: null
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  register: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.string,
  pattern: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.object]),
    message: PropTypes.string.isRequired
  }),
  minLength: PropTypes.shape({
    value: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired
  }),
  errors: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.object
  ]),
  validate: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.object
  ]),
};  
export default Input;
