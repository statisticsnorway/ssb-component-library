import React, { type ReactNode } from 'react'
import classNames from '../../utils/utils'

interface StickyMenuProps {
  children: ReactNode
  className?: string
}

const StickyMenu: React.FC<StickyMenuProps> = ({ children, className }) => (
  <div className={classNames('ssb-sticky-menu', className)}>
    <div className='menu-content'>{children}</div>
  </div>
)

export default StickyMenu
