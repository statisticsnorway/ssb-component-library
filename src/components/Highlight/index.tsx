import React, { type ReactNode } from 'react'

interface HighlightProps {
  children: ReactNode
  className?: string
  negative?: boolean
}

const Highlight: React.FC<HighlightProps> = ({ children, className, negative = false }) => (
  <mark className={`ssb-mark${negative ? ' negative' : ''}${className ? ` ${className}` : ''}`}> {children} </mark>
)

export default Highlight
