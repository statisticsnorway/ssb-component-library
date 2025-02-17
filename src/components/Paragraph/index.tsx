import React, { type ReactNode } from 'react'
import classNames from '../../utils/utils'

interface ParagraphProps {
  children?: ReactNode
  className?: string
  negative?: boolean
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className, negative }) => (
  <p className={classNames('ssb-paragraph', negative && 'negative', className)}>{children}</p>
)

export default Paragraph
