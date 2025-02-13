import React, { type ReactNode } from 'react'
import classNames from '../../utils/utils'

interface NumberProps {
  children?: ReactNode
  className?: string
  size?: 'small' | 'medium' | 'large'
}

const Number: React.FC<NumberProps> = ({ children, className, size = 'small' }) => (
  <div className={classNames('ssb-number', size, className)}>{children}</div>
)

export default Number
