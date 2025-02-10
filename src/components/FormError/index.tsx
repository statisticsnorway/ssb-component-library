import React from 'react'
import classNames from '../../utils/utils'

interface FormErrorProps {
  className?: string
  errorMessages: string[]
  negative?: boolean
  title?: string
}

const FormError: React.FC<FormErrorProps> = ({ className, errorMessages, negative, title = '' }) => (
  <div className={classNames('ssb-form-error', negative && ' negative', className)}>
    <span className='error-icon' />
    <div>
      <span className='error-title'>{title}</span>
      <ul>
        {errorMessages.map((error, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>{error}</li>
        ))}
      </ul>
    </div>
  </div>
)

export default FormError
