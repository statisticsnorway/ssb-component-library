import React from 'react'

interface InputErrorProps {
  className?: string
  errorMessage: string
  negative?: boolean
  id?: string
}

const InputError: React.FC<InputErrorProps> = ({ className, errorMessage, negative = false, id }) => (
  <div className={`ssb-input-error${negative ? ' negative' : ''}${className ? ` ${className}` : ''}`} id={id}>
    <span aria-live='assertive'>{errorMessage}</span>
  </div>
)

export default InputError
