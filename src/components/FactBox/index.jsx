import React from 'react'
import PropTypes from 'prop-types'
import Accordion from '../Accordion'

console.warn('Warning: FactBox is deprecated and will be removed in a future release. Please use ExpansionBox instead.')

const FactBox = ({ className, header, openByDefault = false, text }) => (
  <div className={`ssb-fact-box${className ? ` ${className}` : ''}`}>
    <Accordion header={header} openByDefault={openByDefault} withoutBorders>
      {text}
    </Accordion>
  </div>
)

FactBox.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string.isRequired,
  openByDefault: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}

export default FactBox
