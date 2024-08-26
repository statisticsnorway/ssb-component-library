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
  className,
  header = '',
  openByDefault = false,
  sneakPeek,
  text = '',
}) => {
  const [isOpen, setIsOpen] = useState(openByDefault)
  const [maxHeight, setMaxHeight] = useState('')
  const contentRef = useRef<HTMLDivElement>(null)
  const classNameList: string[] = [
    'ssb-expansion-box',
    className ?? '',
    isOpen ? 'open' : '',
    sneakPeek ? 'sneak-peek' : '',
  ].filter(Boolean)

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight
      const maxHeightValue = contentHeight <= 1000 ? contentHeight + 10 : 1000
      setMaxHeight(isOpen ? `${maxHeightValue}px` : '')
      const focusableElements = contentRef.current.querySelectorAll('button, a')

      if (!isOpen && sneakPeek) {
        focusableElements.forEach((el) => {
          el.setAttribute('tabindex', '-1')
        })
      } else {
        focusableElements.forEach((el) => {
          el.removeAttribute('tabindex')
        })
      }
    }
  }, [isOpen])

  return (
    <div className={classNameList.join(' ')}>
      <button className='header' aria-expanded={isOpen ? 'true' : 'false'} onClick={() => setIsOpen(!isOpen)}>
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
