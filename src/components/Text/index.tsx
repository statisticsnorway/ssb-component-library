import React, { type ReactNode } from 'react'
import classNames from '../../utils/utils'

interface TextProps {
  children: ReactNode
  className?: string
  negative?: boolean
  small?: boolean
}

const Text: React.FC<TextProps> = ({ children, className, negative = false, small = false }) => (
  <span className={classNames('ssb-text-wrapper', small && 'small-text', negative && 'negative', className)}>
    {children}
  </span>
)

export default Text
