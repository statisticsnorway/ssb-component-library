import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { ChevronDown, ChevronUp } from 'react-feather'

const ExpansionBox = ({
  className = '',
  header = '',
  icon,
  onToggle = () => {},
  openByDefault = false,
  sneakPeek,
  text = '',
}) => {
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
    <div className={`ssb-expansion-box${className ? ` ${className}` : ''}${sneakPeek ? ` sneak-peek` : ''}`}>
      <button
        className={`header ${isOpen ? 'open' : 'closed'}`}
        aria-expanded={isOpen ? 'true' : 'false'}
        onClick={() => toggleOpen(!isOpen)}
      >
        <span className='button-grid'>
          {icon && <div className='icon'>{icon}</div>}
          <span className='header-text'>{header}</span>
          <div className='icon-wrapper'>
            {!isOpen && <ChevronDown className='expand-icon' size={24} />}
            {isOpen && <ChevronUp className='expand-icon' size={24} />}
          </div>
        </span>
      </button>
      <div className={`content ${isOpen ? 'open' : 'closed'}`}>{text}</div>
    </div>
  )
}

ExpansionBox.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string.isRequired,
  icon: PropTypes.node,
  onToggle: PropTypes.func,
  openByDefault: PropTypes.bool,
  sneakPeek: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}

export default ExpansionBox
