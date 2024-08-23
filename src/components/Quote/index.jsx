import React from 'react'
import PropTypes from 'prop-types'

const Quote = ({ children, className, negative = false }) => (
  <span className={`ssb-quote${negative ? ' negative' : ''}${className ? ` ${className}` : ''}`}>{children}</span>
)

Quote.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  negative: PropTypes.bool,
}

export default Quote
