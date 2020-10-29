import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Select = ({
  label,
  name,
  options,
  children,
  register,
  required = false, // eslint-disable-line no-unused-vars
  pattern = {},  // eslint-disable-line no-unused-vars
  errors,
  ...otherProps
}) => (
  <div className="select">
    <label htmlFor={name}>{label}</label>
    <select
      name={name}
      ref={register}
      {...otherProps}
    >
      <option hidden disabled selected value></option>
      {children}
    </select>
    {errors[name] ? <span className="error">{errors[name].message}</span> : null}
  </div>
);

Select.defaultProps = {
  required: true,
  pattern: { value: {}, message: '' },
  errors: null,
  onChange: () => {},
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  required: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  pattern: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.object]),
    message: PropTypes.string.isRequired,
  }),
  errors: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.object]),
  onChange: PropTypes.func,
};
export default Select;
