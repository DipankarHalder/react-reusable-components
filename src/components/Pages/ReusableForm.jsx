import { useState } from 'react';
import InputField from '../Elements/Form/InputField';
import { Validators } from '../Elements/Utilities/Validator';

export default function ReusableForm() {

  const [value, setValue] = useState('');
  const changeHandle = (value) => {
    console.log(value);
    setValue(value);
  }

  return (
    <div className="app-form">
      <InputField 
        type="text"
        value={value} 
        placeholder="Hello text"
        label="name"
        validators={[
          {check: Validators.required, message: 'This field is required'}
        ]}
        onChange={changeHandle} 
      />
    </div>
  )
}
