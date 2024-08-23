import React from 'react'
import PropTypes from 'prop-types'

const Number = ({ children, className, size = 'small' }) => (
  <div className={`ssb-number ${size}${className ? ` ${className}` : ''}`}>{children}</div>
)

Number.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

export default Number
