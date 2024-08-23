import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { ChevronDown, ChevronUp } from 'react-feather'

const NestedAccordion = ({ children, className, header, openByDefault = false, onToggle = () => {} }) => {
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
    <div className={`ssb-nested-accordion${className ? ` ${className}` : ''}`}>
      <button
        className={`nested-accordion-header ${isOpen ? 'open' : 'closed'}`}
        aria-expanded={isOpen ? 'true' : 'false'}
        onClick={() => toggleOpen(!isOpen)}
      >
        <span className='button-grid'>
          {!isOpen && <ChevronDown className='expand-icon' size={16} />}
          {isOpen && <ChevronUp className='expand-icon' size={16} />}
          <span className='header-text'>{header}</span>
        </span>
      </button>
      <div className={`nested-accordion-body ${isOpen ? 'open' : 'closed'}`}>{children}</div>
    </div>
  )
}

NestedAccordion.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  header: PropTypes.string,
  openByDefault: PropTypes.bool,
  onToggle: PropTypes.func,
}

export default NestedAccordion
