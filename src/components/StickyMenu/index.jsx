import React from 'react'
import PropTypes from 'prop-types'

const StickyMenu = ({ children, className }) => (
  <div className={`ssb-sticky-menu${className ? ` ${className}` : ''}`}>
    <div className='menu-content'>{children}</div>
  </div>
)

StickyMenu.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default StickyMenu
