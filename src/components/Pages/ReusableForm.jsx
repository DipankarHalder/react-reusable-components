import { useState } from 'react';
import Button from '../Elements/Form/Button';
import InputField from '../Elements/Form/InputField';
import { Validators } from '../Elements/Utilities/Validator';

export default function ReusableForm() {
  const [initValue, setInitValue] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const changeHandleInput = (key) => (value) => {
    setInitValue({ ...initValue, [key]: value });
  }

  const changeHandleButton = (event) => {
    event.preventDefault();
    console.log(Math.random());
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
        onChange={changeHandleInput('name')} 
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
        onChange={changeHandleInput('email')} 
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
        onChange={changeHandleInput('phone')} 
      />
      <Button
        value="Click me!"
        onClick={changeHandleButton}
      />
    </div>
  )
}
