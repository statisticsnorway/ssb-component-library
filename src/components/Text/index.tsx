import React, { type ReactNode } from 'react'

interface TextProps {
  children: ReactNode
  className?: string
  negative?: boolean
  small?: boolean
}

const Text: React.FC<TextProps> = ({ children, className, negative = false, small = false }) => (
  <span
    className={`ssb-text-wrapper${small ? ' small-text' : ''}${negative ? ' negative' : ''}${className ? ` ${className}` : ''}`}
  >
    {children}
  </span>
)

export default Text
