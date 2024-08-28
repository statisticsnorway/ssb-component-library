import React from 'react'
import PropTypes from 'prop-types'

const LeadParagraph = ({ children, className, negative = false }) => (
  <p className={`ssb-lead-paragraph${negative ? ' negative' : ''}${className ? ` ${className}` : ''}`}>{children}</p>
)

LeadParagraph.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  negative: PropTypes.bool,
}

export default LeadParagraph
