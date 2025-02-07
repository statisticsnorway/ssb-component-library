import React, { type ReactNode } from 'react'

interface FooterProps {
  children?: ReactNode
  className?: string
}

const Footer: React.FC<FooterProps> = ({ children, className }) => (
  <div className={`ssb-footer-wrapper${className ? ` ${className}` : ''}`}>{children}</div>
)

export default Footer
