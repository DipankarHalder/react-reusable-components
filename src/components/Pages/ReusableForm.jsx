import { useState } from 'react';
import Button from '../Elements/Form/Button';
import DropDown from '../Elements/Form/DropDown';
import InputField from '../Elements/Form/InputField';
import { Validators } from '../Elements/Utilities/Validator';

export default function ReusableForm() {
  const [initValue, setInitValue] = useState({ name: '', email: '', phone: '' });
  const [language, setLanguage] = useState('');

  // for DropDown initial value
  const dropData = [
    { value: "hi", label: "IN"},
    { value: "bn", label: "BD"},
    { value: "ar", label: "SA"},
    { value: "en", label: "US"},
    { value: "ab", label: "SK"},
  ]
  
  // for input onChnage
  const changeHandleInput = (key) => (value) => {
    setInitValue({ ...initValue, [key]: value });
  }

  // for button onClick
  const clickHandleButton = (event) => {
    event.preventDefault();
    console.log(Math.random());
  }

  // for dropdown onChnage
  const changeHandleDropDown = (langs) => {
    setLanguage(langs);
  }

  const {name, email, phone} = initValue;
  return (
    <div className="app-form">
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
      <DropDown 
        data={dropData}
        value={language}
        initPlaceholder="Select Language"
        onChange={changeHandleDropDown}
      />
      <p>{new Date().toLocaleTimeString(language === '' ? "en" : language)}</p>
      <Button
        value="Click me!"
        onClick={clickHandleButton}
      />
    </div>
  )
}
