import React from 'react'
import classNames from '../../utils/utils'

interface InputErrorProps {
  className?: string
  errorMessage: string
  negative?: boolean
  id?: string
}

const InputError: React.FC<InputErrorProps> = ({ className, errorMessage, negative = false, id }) => (
  <div className={classNames('ssb-input-error', negative && 'negative', className)} id={id}>
    <span aria-live='assertive'>{errorMessage}</span>
  </div>
)

export default InputError
