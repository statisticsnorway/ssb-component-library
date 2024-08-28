import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ callback = () => {}, children, className, disabled, selected, tabIndex = 0, value }) => (
  <div className={`ssb-checkbox${className ? ` ${className}` : ''}`}>
    <input
      tabIndex={tabIndex}
      disabled={disabled}
      id={value}
      checked={selected}
      onChange={() => callback(value)}
      type='checkbox'
      value={value}
    />
    <label className='checkbox-label' htmlFor={value}>
      {children}
    </label>
  </div>
)

Checkbox.propTypes = {
  callback: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  tabIndex: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default Checkbox
