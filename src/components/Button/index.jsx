import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Button = forwardRef(
  ({ children, className, disabled, icon, negative, onClick, primary, type, ariaLabel, onKeyDown }, ref) => (
    <button
      type={type}
      ref={ref}
      className={`ssb-btn${negative ? ' negative' : ''} ${primary ? 'primary-btn' : 'secondary-btn'}${className ? ` ${className}` : ''}`}
      onClick={onClick}
      onKeyDown={onKeyDown}
      disabled={disabled}
      aria-label={ariaLabel || undefined}
    >
      {icon && <div className='sb-icon'>{icon}</div>}
      {children}
    </button>
  )
)

Button.displayName = 'Button'

Button.defaultProps = {
  className: '',
  disabled: false,
  negative: false,
  onClick: () => {},
  onKeyDown: () => {},
  primary: false,
  type: 'button',
  ariaLabel: '',
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  negative: PropTypes.bool,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  type: PropTypes.string,
  ariaLabel: PropTypes.string,
  onKeyDown: PropTypes.func,
}

export default Button
