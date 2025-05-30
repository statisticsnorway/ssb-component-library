import React, { useEffect, useRef, useState, type ReactNode } from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'
import classNames from '../../utils/utils'

interface AccordionProps {
  id?: string
  children?: ReactNode
  className?: string
  header?: string
  openByDefault?: boolean
  subHeader?: string
  tabIndex?: number
  withoutBorders?: boolean
  onToggle?: (isOpen: boolean) => void
}

const Accordion: React.FC<AccordionProps> = ({
  id,
  children,
  className,
  header,
  openByDefault = false,
  subHeader,
  tabIndex = 0,
  withoutBorders,
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
    <div
      id={id}
      className={classNames(
        'ssb-accordion',
        subHeader && 'with-sub-header',
        withoutBorders && 'without-borders',
        className
      )}
    >
      <button
        className={classNames('accordion-header', isOpen ? 'open' : 'closed')}
        aria-expanded={isOpen ? 'true' : 'false'}
        tabIndex={tabIndex}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='button-grid'>
          {subHeader && <span className='sub-header'>{subHeader}</span>}
          <span className='header-text'>{header}</span>
          {!isOpen && <ChevronDown className='expand-icon' size={20} />}
          {isOpen && <ChevronUp className='expand-icon' size={20} />}
        </span>
      </button>
      <div className={`accordion-body ${isOpen ? 'open' : 'closed'}`}>{children}</div>
    </div>
  )
}

export default Accordion
