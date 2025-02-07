import React, { useState, type ReactNode } from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'

interface ButtonTertiaryProps {
  id?: string
  children?: ReactNode
  className?: string
  header?: string
  openByDefault?: boolean
  tabIndex?: number
  accordion?: boolean
  disabled?: boolean
  negative?: boolean
  onClick?: () => void
}

const ButtonTertiary: React.FC<ButtonTertiaryProps> = ({
  id,
  children,
  className,
  header,
  openByDefault = false,
  tabIndex = 0,
  accordion = true,
  disabled = false,
  negative = false,
  onClick = () => {},
}) => {
  const [isOpen, toggleOpen] = useState(openByDefault)
  const classNames = `ssb-btn-tertiary${negative ? ' negative' : ''}${className ? ` ${className}` : ''}`

  return (
    <div id={id} className={classNames.replace(/\s\s+/g, ' ').trim()}>
      <button
        className={`button-header ${isOpen ? 'open' : 'closed'} ${accordion ? 'icon' : 'no-icon'}`}
        aria-expanded={isOpen ? 'true' : 'false'}
        tabIndex={tabIndex}
        onClick={accordion ? () => toggleOpen(!isOpen) : onClick}
        disabled={disabled}
        id={`accordion-button-${id}`}
        aria-controls={accordion ? 'accordion-section' : undefined}
        aria-disabled={disabled ? 'true' : undefined}
      >
        <span className='button-grid'>
          <span className='header-text'>{header}</span>
          {accordion && !isOpen && <ChevronDown className='expand-icon' size={22} />}
          {accordion && isOpen && <ChevronUp className='expand-icon' size={22} />}
        </span>
      </button>
      {accordion && (
        <div
          id='accordion-section'
          className={`accordion-body ${isOpen ? 'open' : 'closed'}`}
          role='region'
          aria-labelledby={`accordion-button-${id}`}
        >
          {children}
        </div>
      )}
    </div>
  )
}

export default ButtonTertiary
