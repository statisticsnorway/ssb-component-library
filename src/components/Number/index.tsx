import React, { type ReactNode } from 'react'

interface NumberProps {
  children?: ReactNode
  className?: string
  size?: 'small' | 'medium' | 'large'
}

const Number: React.FC<NumberProps> = ({ children, className, size = 'small' }) => (
  <div className={`ssb-number ${size}${className ? ` ${className}` : ''}`}>{children}</div>
)

export default Number
