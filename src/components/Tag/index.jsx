import React from 'react'
import PropTypes from 'prop-types'

const Tag = ({ children, className, icon, onClick }) => (
  <button className={`ssb-tag${className ? ` ${className}` : ''}`} onClick={onClick}>
    {icon && <div className='st-icon'>{icon}</div>}
    {children}
  </button>
)

Tag.defaultProps = {
  className: '',
  onClick: () => {},
}

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func,
}

export default Tag
