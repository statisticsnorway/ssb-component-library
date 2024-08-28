import React from 'react'
import PropTypes from 'prop-types'

const Highlight = ({ children, className, negative = false }) => (
  <mark className={`ssb-mark${negative ? ' negative' : ''}${className ? ` ${className}` : ''}`}> {children} </mark>
)

Highlight.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  negative: PropTypes.bool,
}

export default Highlight
