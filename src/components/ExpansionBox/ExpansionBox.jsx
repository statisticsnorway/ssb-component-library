import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { ChevronDown, ChevronUp } from 'react-feather'

const ExpansionBox = ({ className = '', header = '', onToggle = () => {}, openByDefault = false, text = '' }) => {
  const [isOpen, toggleOpen] = useState(openByDefault)
  const firstUpdate = useRef(true)
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    onToggle(isOpen)
  }, [isOpen])
  return (
    <div className={`ssb-expansion-box${className ? ` ${className}` : ''}`}>
      <button
        className={`header-content ${isOpen ? 'open' : 'closed'}`}
        aria-expanded={isOpen ? 'true' : 'false'}
        onClick={() => toggleOpen(!isOpen)}
      >
        <span className='button-grid'>
          <span className='header-text'>{header}</span>
          <div className='icon-wrapper'>
            {!isOpen && <ChevronDown className='expand-icon' size={24} />}
            {isOpen && <ChevronUp className='expand-icon' size={24} />}
          </div>
        </span>
      </button>
      <div className={`body-content ${isOpen ? 'open' : 'closed'}`}>{text}</div>
    </div>
  )
}

ExpansionBox.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string.isRequired,
  onToggle: PropTypes.func,
  openByDefault: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}

export default ExpansionBox
