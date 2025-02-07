import React, { type ReactNode } from 'react'

interface QuoteProps {
  children: ReactNode
  className?: string
  negative?: boolean
}

const Quote: React.FC<QuoteProps> = ({ children, className, negative = false }) => (
  <span className={`ssb-quote${negative ? ' negative' : ''}${className ? ` ${className}` : ''}`}>{children}</span>
)

export default Quote
