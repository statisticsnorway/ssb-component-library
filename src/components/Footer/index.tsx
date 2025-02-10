import React, { type ReactNode } from 'react'
import classNames from '../../utils/utils'

interface FooterProps {
  children?: ReactNode
  className?: string
}

const Footer: React.FC<FooterProps> = ({ children, className }) => (
  <div className={classNames('ssb-footer-wrapper', className)}>{children}</div>
)

export default Footer
