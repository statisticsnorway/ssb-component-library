import React, { type ReactNode } from 'react'
import classNames from '../../utils/utils'

interface BlockContentProps {
  children: ReactNode
  className?: string
  sectionNumber?: number | string
}

const BlockContent: React.FC<BlockContentProps> = ({ children, className, sectionNumber }) => (
  <div className={classNames('ssb-block-content', className)}>
    {sectionNumber && (
      <div className='section-number'>
        {(typeof sectionNumber === 'string' && sectionNumber.length === 1) ||
        (typeof sectionNumber === 'number' && sectionNumber < 10)
          ? '0'
          : ''}
        {sectionNumber}
      </div>
    )}
    {children}
  </div>
)

export default BlockContent
