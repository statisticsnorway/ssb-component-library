import React, { type ReactNode } from 'react'

interface ParagraphProps {
  children?: ReactNode
  className?: string
  negative?: boolean
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className, negative }) => (
  <p className={`ssb-paragraph${negative ? ' negative' : ''}${className ? ` ${className}` : ''}`}>{children}</p>
)

export default Paragraph
