import PropTypes from 'prop-types';

export default function DropDown({ 
  value, 
  data, 
  divClass, 
  dropClass, 
  initPlaceholder, 
  onChange 
}) {

  const onChangeHandle = (event) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <div className={divClass}>
      <select 
        value={value}
        className={dropClass}
        onChange={onChangeHandle}>
        <option value="">{initPlaceholder}</option>
        {data.map((item, key) => (
          <option 
            key={key} 
            value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  )
}

/***********************************
  @usage: Checking Prop Type,
  @packages: prop-types
***********************************/
DropDown.propTypes = {
  value: PropTypes.string,
  dropClass: PropTypes.string,
  initPlaceholder: PropTypes.string,
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

/*************************************
  @usage: added initial props value
*************************************/
DropDown.defaultProps = {
  value: '',
  initPlaceholder: 'Please select',
  divClass: 'app-input-field-select',
  dropClass: 'app-drop-down'
}