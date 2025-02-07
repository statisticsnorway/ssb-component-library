import React, { forwardRef, type ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  className?: string
  disabled?: boolean
  icon?: ReactNode
  negative?: boolean
  onClick?: () => void
  primary?: boolean
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
  onKeyDown?: () => void
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled = false,
      icon,
      negative = false,
      onClick = () => {},
      primary = false,
      type = 'button',
      ariaLabel,
      onKeyDown = () => {},
    },
    ref
  ) => (
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

export default Button
