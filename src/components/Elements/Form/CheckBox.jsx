import PropTypes from 'prop-types';

export default function CheckBox({
  divClass,
  checkClass,
  selected,
  label,
  onChange
}) {

  const onChangeHandle = (event) => {
    const { selected } = event.target;
    onChange(selected);
  }

  return (
    <div className={divClass}>
      <label className={checkClass}>
        <input 
          type="checkbox"
          value={selected}
          defaultChecked={selected}
          onChange={onChangeHandle}
        />
        <span>{label}</span>
      </label>
    </div>
  )
}

/***********************************
  @usage: Checking Prop Type,
  @packages: prop-types
***********************************/
CheckBox.propTypes = {
  divClass: PropTypes.string,
  checkClass: PropTypes.string,
  selected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

/*************************************
  @usage: added initial props value
*************************************/
CheckBox.defaultProps = {
  divClass: 'app-input-field-check',
  dropClass: 'app-checkbox'
}