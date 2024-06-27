import React, { useState, forwardRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Search } from 'react-feather'
import { useId } from '../../utils/useId'
import InputError from '../InputError'

const Input = forwardRef(
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
    const [inputValue, setValue] = useState(value)
    const inputId = id || useId()

    useEffect(() => setValue(value), [value])

    const handleInputChange = (e) => {
      setValue(e.target.value)
      handleChange(e.target.value)
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        submitCallback(inputValue)
      }
    }

    return (
      <div
        className={`ssb-input${negative ? ' negative' : ''}${error ? ' error' : ''}${size === 'lg' ? ' input-lg' : ''}${className ? ` ${className}` : ''}`}
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

Input.propTypes = {
  role: PropTypes.string,
  ariaLabelWrapper: PropTypes.string,
  ariaLabel: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  ariaLabelSearchButton: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  handleChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  id: PropTypes.string,
  label: PropTypes.string,
  negative: PropTypes.bool,
  placeholder: PropTypes.string,
  searchField: PropTypes.bool,
  size: PropTypes.string,
  submitCallback: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
}

export default Input
