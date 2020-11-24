import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Select = ({
  label,
  name,
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
      defaultValue= 'Selecione'
      ref={register}
      {...otherProps}
    >
      <option value='Selecione' selected className="teste">Selecione</option>
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
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  pattern: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.object]),
    message: PropTypes.string.isRequired,
  }),
  errors: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.object]),
  onChange: PropTypes.func,
};
export default Select;
