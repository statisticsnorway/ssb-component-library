import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ children, className }) => (
  <div className={`ssb-header-wrapper${className ? ` ${className}` : ''}`}>{children}</div>
)

Header.defaultProps = {}

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Header
