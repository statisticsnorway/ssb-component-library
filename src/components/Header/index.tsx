import React, { type ReactNode } from 'react'

interface HeaderProps {
  children?: ReactNode
  className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => (
  <div className={`ssb-header-wrapper${className ? ` ${className}` : ''}`}>{children}</div>
)

export default Header
