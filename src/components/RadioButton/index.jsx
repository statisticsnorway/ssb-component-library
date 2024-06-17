import React from 'react'
import PropTypes from 'prop-types'

const RadioButton = ({ callback, children, className, disabled, name, selected, tabIndex, value, id }) => (
  <div className={`ssb-radio${className ? ` ${className}` : ''}`}>
    <input
      tabIndex={tabIndex}
      checked={selected}
      id={id ?? value}
      name={name}
      disabled={disabled}
      onChange={() => callback(value)}
      type='radio'
      value={value}
    />
    <label className='radio-label' htmlFor={id ?? value}>
      {children}
    </label>
  </div>
)

RadioButton.defaultProps = {
  callback: () => {},
  disabled: false,
  tabIndex: 0,
}

RadioButton.propTypes = {
  callback: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  selected: PropTypes.bool,
  tabIndex: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  id: PropTypes.string,
}

export default RadioButton
