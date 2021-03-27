import PropTypes from 'prop-types';

export default function Button({ divClass, value, btnClass, onClick, type }) {
  return (
    <div className={divClass}>
      <button 
        type={type}
        className={`app-btn ${btnClass}`}
        onClick={(event) => onClick(event)}>
        {value}
      </button>
    </div>
  )
}

/***********************************
  @usage: Checking Prop Type,
  @packages: prop-types
***********************************/
Button.propTypes = {
  btnClass: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

/*************************************
  @usage: added initial props value
*************************************/
Button.defaultProps = {
  type: 'button', // button / submit / reset
  divClass: 'app-input-field',
  btnClass: 'btn-prmry'
}