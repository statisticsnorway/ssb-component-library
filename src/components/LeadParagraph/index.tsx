import React, { type ReactNode } from 'react'
import classNames from '../../utils/utils'

interface LeadParagraphProps {
  children?: ReactNode
  className?: string
  negative?: boolean
}

const LeadParagraph: React.FC<LeadParagraphProps> = ({ children, className, negative = false }) => (
  <p className={classNames('ssb-lead-paragraph', negative && 'negative', className)}>{children}</p>
)

export default LeadParagraph
