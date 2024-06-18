import React from 'react'
import PropTypes from 'prop-types'

const Text = ({ children, className, negative, small }) => (
  <span
    className={`ssb-text-wrapper${small ? ' small-text' : ''}${negative ? ' negative' : ''}${className ? ` ${className}` : ''}`}
  >
    {children}
  </span>
)

Text.defaultProps = {
  negative: false,
  small: false,
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  negative: PropTypes.bool,
  small: PropTypes.bool,
}

export default Text
