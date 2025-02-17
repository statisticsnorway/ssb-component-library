import React, { useEffect, useRef, useState, type ReactNode } from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'
import classNames from '../../utils/utils'

interface NestedAccordionProps {
  children?: ReactNode
  className?: string
  header?: string
  openByDefault?: boolean
  onToggle?: (isOpen: boolean) => void
}

const NestedAccordion: React.FC<NestedAccordionProps> = ({
  children,
  className,
  header,
  openByDefault = false,
  onToggle = () => {},
}) => {
  const [isOpen, setIsOpen] = useState(openByDefault)
  const firstUpdate = useRef(true)
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    onToggle(isOpen)
  }, [isOpen])
  return (
    <div className={classNames('ssb-nested-accordion', className)}>
      <button
        className={`nested-accordion-header ${isOpen ? 'open' : 'closed'}`}
        aria-expanded={isOpen ? 'true' : 'false'}
        onClick={() => setIsOpen(!isOpen)}
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

export default NestedAccordion
