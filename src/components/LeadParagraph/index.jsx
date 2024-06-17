import React from 'react'
import PropTypes from 'prop-types'

const LeadParagraph = ({ children, className, negative }) => (
  <p className={`ssb-lead-paragraph${negative ? ' negative' : ''}${className ? ` ${className}` : ''}`}>{children}</p>
)

LeadParagraph.defaultProps = {
  className: '',
  negative: false,
}

LeadParagraph.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  negative: PropTypes.bool,
}

export default LeadParagraph
