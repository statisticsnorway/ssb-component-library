import React, { useEffect, useRef, useState, ReactNode } from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'
import SparklesIcon from '../../media/icons/sparkles.svg'

export interface ExpansionBoxProps {
  aiIcon?: boolean
  className?: string
  header: string
  openByDefault?: boolean
  sneakPeek?: boolean
  text: string | ReactNode
}
const ExpansionBox: React.FC<ExpansionBoxProps> = ({
  aiIcon = false,
  className = '',
  header = '',
  openByDefault = false,
  sneakPeek,
  text = '',
}) => {
  const [isOpen, toggleOpen] = useState(openByDefault)
  const [maxHeight, setMaxHeight] = useState('')
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight
      const maxHeightValue = contentHeight <= 1000 ? contentHeight + 10 : 1000
      setMaxHeight(isOpen ? `${maxHeightValue}px` : '')
    }
  }, [isOpen])

  return (
    <div
      className={`ssb-expansion-box${className ? ` ${className}` : ''}${isOpen ? ' open' : ''}${sneakPeek ? ` sneak-peek` : ''}`}
    >
      <button className='header' aria-expanded={isOpen ? 'true' : 'false'} onClick={() => toggleOpen(!isOpen)}>
        {aiIcon && (
          <div className='icon'>
            <SparklesIcon />
          </div>
        )}
        <span className='header-text'>{header}</span>
        <div className='icon-wrapper'>
          {!isOpen && <ChevronDown className='expand-icon' size={24} />}
          {isOpen && <ChevronUp className='expand-icon' size={24} />}
        </div>
      </button>
      <div className={`content ${!isOpen ? 'closed' : ''}`} ref={contentRef} style={{ maxHeight }}>
        {text}
      </div>
    </div>
  )
}

export default ExpansionBox
