import React from 'react'
import PropTypes from 'prop-types'
import Accordion from '../Accordion'

const FactBox = ({ className, header, openByDefault, text }) => (
  <div className={`ssb-fact-box${className ? ` ${className}` : ''}`}>
    <Accordion header={header} openByDefault={openByDefault} withoutBorders>
      {text}
    </Accordion>
  </div>
)

FactBox.defaultProps = {
  className: '',
  openByDefault: false,
}

FactBox.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string.isRequired,
  openByDefault: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}

export default FactBox
