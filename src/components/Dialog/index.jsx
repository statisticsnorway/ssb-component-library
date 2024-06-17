import React from 'react'
import PropTypes from 'prop-types'
import { AlertTriangle, Info } from 'react-feather'

const Dialog = ({ children, className, title, type }) => (
  <div className={`ssb-dialog ${type}${className ? ` ${className}` : ''}`}>
    <div className='icon-panel'>
      {type === 'warning' && <AlertTriangle size={45} className='icon' />}
      {type === 'info' && <Info size={45} className='icon' />}
    </div>
    <div className='dialog-content'>
      <span className='dialog-title'>{title}</span>
      <div className='content'>{children}</div>
    </div>
  </div>
)

Dialog.defaultProps = {
  className: '',
  type: 'info',
}

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'warning']),
}

export default Dialog
