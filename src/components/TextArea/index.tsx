import React, { useState, ChangeEvent, FocusEvent } from 'react'
import { useId } from '../../utils/useId'
import InputError from '../InputError'
import classNames from '../../utils/utils'

interface TextAreaProps {
  ariaLabel?: string
  className?: string
  disabled?: boolean
  error?: boolean
  errorMessage?: string
  handleChange?: (value: string) => void
  onFocus?: (e: FocusEvent<HTMLTextAreaElement>) => void
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void
  id?: string
  label?: string
  negative?: boolean
  placeholder?: string
  value?: string
  rows?: number
  cols?: number
}

const TextArea: React.FC<TextAreaProps> = ({
  ariaLabel,
  className,
  disabled = false,
  error = false,
  errorMessage,
  handleChange = () => {},
  id,
  label,
  negative = false,
  placeholder,
  value,
  rows,
  cols,
  onBlur = () => {},
  onFocus = () => {},
}) => {
  const [inputValue, setValue] = useState(value)
  const inputId = id || useId()
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
    handleChange(e.target.value)
  }

  return (
    <div className={classNames('ssb-text-area', negative && 'negative', error && 'error', className)}>
      {label && <label htmlFor={inputId}>{label}</label>}
      <div className='text-area-wrapper'>
        <textarea
          id={inputId}
          disabled={disabled}
          value={inputValue}
          onChange={(e) => handleInputChange(e)}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          aria-label={ariaLabel}
          rows={rows}
          cols={cols}
          aria-describedby={error && errorMessage ? `error_${inputId}` : undefined}
        />
      </div>
      {error && errorMessage && <InputError errorMessage={errorMessage} negative={negative} id={`error_${inputId}`} />}
    </div>
  )
}

export default TextArea
