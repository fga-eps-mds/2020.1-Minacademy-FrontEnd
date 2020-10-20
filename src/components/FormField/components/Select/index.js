import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Select = ({
  label,
  name,
  options,
  onChange,
  required,
  register,
  pattern,
  errors,
}) => (
  <div>
    <label>{label}</label>
    <select
      name={name}
      required={required}
      ref={register({ pattern })}
      onChange={onChange}
      errors={errors}
    >
      <option>Selecione</option>
      {options.map((option) => (
        <option value={option.value}>{option.name}</option>
      ))}
    </select>
    {(errors?.name && (
      <span className="field__input--danger">{errors?.name.message}</span>
    )) || <br />}
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
