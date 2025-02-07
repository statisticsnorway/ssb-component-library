import React from 'react'
import { ArrowRight } from 'react-feather'

interface TableLinkProps {
  className?: string
  description: string
  href: string
  isExternal?: boolean
  tabIndex?: number
  text: string
  title?: string
}

const TableLink: React.FC<TableLinkProps> = ({
  className,
  description,
  href,
  isExternal = true,
  tabIndex,
  text,
  title,
}) => (
  <a
    className={`ssb-table-link${className ? ` ${className}` : ''}`}
    href={href}
    tabIndex={tabIndex}
    target={isExternal ? '_blank' : undefined}
    rel={isExternal ? 'noopener noreferrer' : undefined}
    title={title}
  >
    <div className='tl-icon'>
      <ArrowRight size={22} />
    </div>
    <div className='tl-info'>
      <span className='tl-text'>{text}</span>
      <span className='tl-description'>{description}</span>
    </div>
  </a>
)

export default TableLink
