import React, { type ReactNode } from 'react'

interface LeadParagraphProps {
  children?: ReactNode
  className?: string
  negative?: boolean
}

const LeadParagraph: React.FC<LeadParagraphProps> = ({ children, className, negative = false }) => (
  <p className={`ssb-lead-paragraph${negative ? ' negative' : ''}${className ? ` ${className}` : ''}`}>{children}</p>
)

export default LeadParagraph
