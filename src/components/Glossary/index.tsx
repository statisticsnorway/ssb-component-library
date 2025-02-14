import React, { useEffect, useState, useRef, useCallback, type ReactNode } from 'react'
import { BookOpen, XCircle } from 'react-feather'
import classNames from '../../utils/utils'

interface GlossaryProps {
  children?: ReactNode
  className?: string
  closeText?: string
  explanation: string
  ariaLabel?: string
}

const Glossary: React.FC<GlossaryProps> = ({ explanation, children, className, closeText = 'Lukk', ariaLabel }) => {
  const node = useRef<HTMLSpanElement>(null)
  const [open, setOpen] = useState(false)

  const handleClickOutside = (e: MouseEvent) => {
    if (node.current?.contains(e.target as Node)) {
      return
    }
    setOpen(false)
  }

  const handleCloseButton = () => {
    setOpen(false)
    node.current?.focus()
  }

  const handleKeyDownClose = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setOpen(false)
      node.current?.focus()
    }
  }

  const escKeyListener = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(false)
      node.current?.focus()
    }
  }, [])

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', escKeyListener, false)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', escKeyListener, false)
    }
  }, [open])

  return (
    <span className={classNames('ssb-glossary', className)}>
      <button
        onClick={() => setOpen(!open)}
        className='glossary-button'
        aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
        aria-expanded={open ? 'true' : 'false'}
      >
        <span className='glossary-text-wrap'>{children}</span>
        <BookOpen size={12} className='glossary-logo' aria-hidden='true' />
      </button>
      <span className={classNames('glossary-popup', open && 'open')} ref={node}>
        <span className='content-box'>
          <span className='info-text'>{explanation}</span>
          <span className='glossary-closing'>
            <button
              onClick={() => {
                handleCloseButton()
              }}
              onKeyDown={(e) => handleKeyDownClose(e)}
            >
              <XCircle size={16} className='icon' aria-hidden='true' />
              <span>{closeText}</span>
            </button>
          </span>
        </span>
      </span>
    </span>
  )
}

export default Glossary
