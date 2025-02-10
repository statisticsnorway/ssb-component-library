import React, { type ReactNode } from 'react'
import classNames from '../../utils/utils'

interface HeaderProps {
  children?: ReactNode
  className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => (
  <div className={classNames('ssb-header-wrapper', className)}>{children}</div>
)

export default Header
