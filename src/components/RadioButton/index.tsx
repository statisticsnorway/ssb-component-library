import React, { type ReactNode } from 'react'
import classNames from '../../utils/utils'

interface RadioButtonProps {
  callback?: (value: string | number) => void
  children: ReactNode
  className?: string
  disabled?: boolean
  name?: string
  selected?: boolean
  tabIndex?: number
  value: string | number
  id?: string
}

const RadioButton: React.FC<RadioButtonProps> = ({
  callback = () => {},
  children,
  className,
  disabled = false,
  name,
  selected,
  tabIndex = 0,
  value,
  id,
}) => (
  <div className={classNames('ssb-radio', className)}>
    <input
      tabIndex={tabIndex}
      checked={selected}
      id={id ?? value.toString()}
      name={name}
      disabled={disabled}
      onChange={() => callback(value)}
      type='radio'
      value={value}
    />
    <label className='radio-label' htmlFor={id ?? value.toString()}>
      {children}
    </label>
  </div>
)

export default RadioButton
