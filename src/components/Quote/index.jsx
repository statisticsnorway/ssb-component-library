import React from 'react'
import PropTypes from 'prop-types'

const Quote = ({ children, className, negative }) => (
  <span className={`ssb-quote${negative ? ' negative' : ''}${className ? ` ${className}` : ''}`}>{children}</span>
)

Quote.defaultProps = {
  negative: false,
}

Quote.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  negative: PropTypes.bool,
}

export default Quote
