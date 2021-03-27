import PropTypes from 'prop-types';
import { useState } from 'react';
import { validateInput } from "../Utilities/Validator";

function InputField({
  value,
  type,
  label,
  customClass,
  placeholder,
  validators,
  onChange,
}) {

  const [error, setError] = useState(false);
  const onChangeHandle = (event) => {
    const { value } = event.target;
    setError(validateInput(validators, value));
    onChange(value);
  };

  return (
    <div className="app-input-field">
      {label && (
        <label>{label}</label>
      )}
      <input
        type={type}
        value={value}
        className={customClass}
        placeholder={placeholder}
        onChange={onChangeHandle}
      />
      {error && (
        <span>{error.message}</span>
      )}
    </div>
  );
}

/***********************************
  @usage: Checking Prop Type,
  @packages: prop-types
***********************************/
InputField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  validators: PropTypes.array,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

/*************************************
  @usage: added initial props value
*************************************/
InputField.defaultProps = {
  value: '',
  type: 'text',
  label: '',
  customClass: 'app-input-field-item',
  placeholder: '',
  validators: []
}

export default InputField;