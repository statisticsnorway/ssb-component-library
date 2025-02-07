import React, { type ReactNode } from 'react'

interface StickyMenuProps {
  children: ReactNode
  className?: string
}

const StickyMenu: React.FC<StickyMenuProps> = ({ children, className }) => (
  <div className={`ssb-sticky-menu${className ? ` ${className}` : ''}`}>
    <div className='menu-content'>{children}</div>
  </div>
)

export default StickyMenu
