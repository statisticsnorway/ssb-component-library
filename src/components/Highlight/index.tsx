import React, { type ReactNode } from 'react'
import classNames from '../../utils/utils'

interface HighlightProps {
  children: ReactNode
  className?: string
  negative?: boolean
}

const Highlight: React.FC<HighlightProps> = ({ children, className, negative = false }) => (
  <mark className={classNames('ssb-mark', negative && 'negative', className)}> {children} </mark>
)

export default Highlight
