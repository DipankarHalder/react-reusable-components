import PropTypes from 'prop-types';
import { useState } from 'react';
import { validateInput } from "../Utilities/Validator";

export default function InputField({
  value,
  type,
  label,
  inputClass,
  divClass,
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
    <div className={divClass}>
      {label && (
        <label>{label}</label>
      )}

      {type === 'textarea' ? (
        <textarea 
          className={inputClass}
          value={value}
          // defaultValue={value}
          placeholder={placeholder}
          onChange={onChangeHandle}
        />
      ) : (
        <input
          type={type}
          value={value}
          className={inputClass}
          placeholder={placeholder}
          onChange={onChangeHandle}
        />
      )}
      
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
  divClass: 'app-input-field',
  inputClass: 'app-input-field-item',
  placeholder: '',
  validators: []
}