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
        placeholder="Please enter full name"
        label="Full name"
        validators={[{
          check: Validators.required, 
          message: 'Full name is required'
        }]}
        onChange={changeHandle} 
      />
      {/* <InputField 
        type="email"
        value={initValue.email} 
        placeholder="Please enter email address"
        label="Email address"
        validators={[{
          check: Validators.required, 
          message: 'Email address is required'
        }]}
        onChange={changeHandle} 
      /> */}
    </div>
  )
}
