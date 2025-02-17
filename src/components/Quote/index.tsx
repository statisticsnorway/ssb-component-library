import React, { type ReactNode } from 'react'
import classNames from '../../utils/utils'

interface QuoteProps {
  children: ReactNode
  className?: string
  negative?: boolean
}

const Quote: React.FC<QuoteProps> = ({ children, className, negative = false }) => (
  <span className={classNames('ssb-quote', negative && 'negative', className)}>{children}</span>
)

export default Quote
