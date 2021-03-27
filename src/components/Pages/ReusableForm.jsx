import { useState } from 'react';
import InputField from '../Elements/Form/InputField';
import { Validators } from '../Elements/Utilities/Validator';

export default function ReusableForm() {
  const [initValue, setInitValue] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const changeHandle = (key) => (value) => {
    setInitValue({ ...initValue, [key]: value });
  }

  const {name, email, phone} = initValue;
  return (
    <div className="app-form">
      <em>{JSON.stringify(initValue)}</em>
      <InputField 
        type="text"
        value={name} 
        placeholder="Please enter full name"
        label="Full name"
        validators={[{
          check: Validators.required, 
          message: 'Full name is required'
        }]}
        onChange={changeHandle('name')} 
      />
      <InputField 
        type="email"
        value={email} 
        placeholder="Please enter email address"
        label="Email address"
        validators={[{
          check: Validators.email, 
          message: 'Please enter valid email address'
        }]}
        onChange={changeHandle('email')} 
      />
      <InputField 
        type="text"
        value={phone} 
        placeholder="Please enter phone number"
        label="Phone Number"
        validators={[{
          check: Validators.number, 
          message: 'Please enter valid phone number'
        }]}
        onChange={changeHandle('phone')} 
      />
    </div>
  )
}
