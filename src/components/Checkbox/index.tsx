import React, { type ReactNode } from 'react'
import classNames from '../../utils/utils'

interface CheckboxProps {
  callback?: (value: string | number) => void
  children?: ReactNode
  className?: string
  disabled?: boolean
  selected?: boolean
  tabIndex?: number
  value: string | number
}

const Checkbox: React.FC<CheckboxProps> = ({
  callback = () => {},
  children,
  className,
  disabled,
  selected,
  tabIndex = 0,
  value,
}) => (
  <div className={classNames('ssb-checkbox', className)}>
    <input
      tabIndex={tabIndex}
      disabled={disabled}
      id={value.toString()}
      checked={selected}
      onChange={() => callback(value)}
      type='checkbox'
      value={value}
    />
    <label className='checkbox-label' htmlFor={value.toString()}>
      {children}
    </label>
  </div>
)

export default Checkbox
