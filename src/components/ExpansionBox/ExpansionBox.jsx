import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ChevronDown, ChevronUp } from 'react-feather'

const ExpansionBox = ({ className = '', header = '', icon, openByDefault = false, sneakPeek, text = '' }) => {
  const [isOpen, toggleOpen] = useState(openByDefault)

  return (
    <div
      className={`ssb-expansion-box${className ? ` ${className}` : ''}${isOpen ? ' open' : ''}${sneakPeek ? ` sneak-peek` : ''}`}
    >
      <button className='header' aria-expanded={isOpen ? 'true' : 'false'} onClick={() => toggleOpen(!isOpen)}>
        <span className='button-grid'>
          {icon && <div className='icon'>{icon}</div>}
          <span className='header-text'>{header}</span>
          <div className='icon-wrapper'>
            {!isOpen && <ChevronDown className='expand-icon' size={24} />}
            {isOpen && <ChevronUp className='expand-icon' size={24} />}
          </div>
        </span>
      </button>
      <div className={`content ${!isOpen ? 'closed' : ''}`}>{text}</div>
    </div>
  )
}

ExpansionBox.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string.isRequired,
  icon: PropTypes.node,
  openByDefault: PropTypes.bool,
  sneakPeek: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}

export default ExpansionBox
