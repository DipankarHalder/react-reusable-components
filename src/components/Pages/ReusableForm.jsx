import { useState } from 'react';
import Button from '../Elements/Form/Button';
// import CheckBox from '../Elements/Form/CheckBox';
import DropDown from '../Elements/Form/DropDown';
import InputField from '../Elements/Form/InputField';
import { Validators } from '../Elements/Utilities/Validator';

export default function ReusableForm() {
  const [initValue, setInitValue] = useState({ name: '', email: '', phone: '', msg: '' });
  const [language, setLanguage] = useState('');
  // const [acceptance, setAcceptance] = useState(false);

  // for DropDown initial value
  const _dropData = [
    { value: "hi", label: "IN"},
    { value: "bn", label: "BD"},
    { value: "ar", label: "SA"},
    { value: "en", label: "US"},
    { value: "ab", label: "SK"},
  ]
  
  // for input onChnage
  const _changeHandleInput = (key) => (value) => {
    setInitValue({ ...initValue, [key]: value });
  }

  // for button onClick
  const _clickHandleButton = (event) => {
    event.preventDefault();
    console.log(Math.random());
  }

  // for dropdown onChnage
  const _changeHandleDropDown = (langs) => {
    setLanguage(langs);
  }

  // for checkbox onChange
  // const _changeHandleCheckbox = (acceptance) => {
  //   console.log("inside change", acceptance);
  //   setAcceptance(!acceptance);
  //   // const selectedID = event.target.value;
  // }

  const {name, email, phone, msg} = initValue;
  return (
    <div className="app-page-wrapper">
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
          onChange={_changeHandleInput('name')} 
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
          onChange={_changeHandleInput('email')} 
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
          onChange={_changeHandleInput('phone')} 
        />
        <DropDown 
          data={_dropData}
          value={language}
          initPlaceholder="Select Language"
          onChange={_changeHandleDropDown}
        />
        <p>
          {new Date()
            .toLocaleTimeString(language === '' ? "en" : language)
          }
        </p>
        <InputField 
          type="textarea"
          value={msg} 
          placeholder="Please enter message"
          label="Message"
          validators={[{
            check: Validators.required, 
            message: 'Please enter valid message'
          }]}
          onChange={_changeHandleInput('msg')} 
        />
        {/* <CheckBox 
          label='I Accept'
          selected={acceptance}
          onChange={_changeHandleCheckbox(acceptance)}
        /> */}
        <Button
          value="Click me!"
          onClick={_clickHandleButton}
        />
      </div>
    </div>
  )
}
