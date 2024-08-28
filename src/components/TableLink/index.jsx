import React from 'react'
import PropTypes from 'prop-types'
import { ArrowRight } from 'react-feather'

const TableLink = ({ className, description, href, isExternal = true, tabIndex, text, title }) => (
  // eslint-disable-next-line react/jsx-no-target-blank
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

TableLink.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
  tabIndex: PropTypes.number,
  text: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export default TableLink
