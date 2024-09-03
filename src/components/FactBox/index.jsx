import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Accordion from '../Accordion'

const FactBox = ({ className, header, openByDefault = false, text }) => {
  useEffect(() => {
    console.warn(
      'Warning: FactBox is deprecated and will be removed in a future release. Please use ExpansionBox instead.'
    )
  }, [])

  return (
    <div className={`ssb-fact-box${className ? ` ${className}` : ''}`}>
      <Accordion header={header} openByDefault={openByDefault} withoutBorders>
        {text}
      </Accordion>
    </div>
  )
}

FactBox.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string.isRequired,
  openByDefault: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}

export default FactBox
