import React, { useState, forwardRef, useEffect } from 'react'
import { Search } from 'react-feather'
import { useId } from '../../utils/useId'
import InputError from '../InputError'
import classNames from '../../utils/utils'

interface InputProps {
  role?: string
  ariaLabelWrapper?: string
  ariaLabel?: string
  ariaLabelledBy?: string
  ariaLabelSearchButton?: string
  name?: string
  className?: string
  disabled?: boolean
  error?: boolean
  errorMessage?: string
  handleChange?: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
  id?: string
  label?: string
  negative?: boolean
  placeholder?: string
  searchField?: boolean
  size?: string
  submitCallback?: (value: string) => void
  type?: string
  value?: string
}

const Input = forwardRef<HTMLDivElement, InputProps>(
  (
    {
      role,
      ariaLabelWrapper,
      ariaLabel,
      ariaLabelledBy,
      ariaLabelSearchButton = 'search',
      name,
      className = '',
      disabled = false,
      error = false,
      errorMessage,
      handleChange = () => {},
      id,
      label,
      negative = false,
      placeholder,
      searchField = false,
      submitCallback = () => {},
      type = 'text',
      value = '',
      onFocus = () => {},
      onBlur = () => {},
      size,
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState(value)
    const inputId = id || useId()

    useEffect(() => setInputValue(value), [value])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
      handleChange(e.target.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        submitCallback(inputValue)
      }
    }

    return (
      <div
        className={classNames(
          'ssb-input',
          negative && 'negative',
          error && 'error',
          size === 'lg' && 'input-lg',
          className
        )}
      >
        {label && (
          <label aria-hidden={ariaLabel ? true : undefined} htmlFor={inputId}>
            {label}
          </label>
        )}
        <div ref={ref} className='input-wrapper' role={searchField ? 'search' : role} aria-label={ariaLabelWrapper}>
          <input
            id={inputId}
            name={name}
            disabled={disabled}
            type={type}
            value={inputValue}
            onChange={(e) => handleInputChange(e)}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder={placeholder}
            aria-label={ariaLabel}
            className={searchField || error ? ' with-icon' : ''}
            onKeyDown={searchField ? (e) => handleKeyDown(e) : undefined}
            aria-describedby={error && errorMessage ? `error_${inputId}` : undefined}
            aria-labelledby={ariaLabelledBy}
          />
          {searchField && (
            <button
              aria-label={ariaLabelSearchButton}
              className='icon-wrapper search-icon'
              onClick={() => submitCallback(inputValue)}
            >
              <Search size={size === 'lg' ? '72' : '18'} />
            </button>
          )}
        </div>
        {error && errorMessage && (
          <InputError negative={negative} errorMessage={errorMessage} id={`error_${inputId}`} />
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
