import React, { type ReactNode } from 'react'
import { ArrowDown, ArrowUp, Minus } from 'react-feather'
import Number from '../Number'
import Glossary from '../Glossary'

interface Changes {
  changeDirection?: 'up' | 'down' | 'same'
  changeText?: string
  changePeriod?: string
  srChangeText?: string
}
interface KeyFiguresProps {
  changes: Changes
  className?: string
  icon: ReactNode
  number: string | number
  numberDescription?: string
  noNumberText?: string
  size: 'small' | 'medium' | 'large'
  title?: string
  time: string | number
  glossary?: string
  greenBox?: boolean
}

const KeyFigures: React.FC<KeyFiguresProps> = ({
  changes = {},
  className,
  icon,
  number,
  numberDescription,
  noNumberText = 'Tall ikke tilgjengelig',
  size,
  title,
  time,
  glossary,
  greenBox,
}) => {
  const { changeDirection, changeText, changePeriod, srChangeText } = changes
  return (
    <div className={`ssb-key-figures ${size}${greenBox ? ' green-box' : ''}${className ? ` ${className}` : ''}`}>
      {icon && <div className={`kf-icon ${size}`}>{icon}</div>}
      <div>
        {glossary && title ? (
          <Glossary explanation={glossary} ariaLabel={title}>
            <span className='kf-title'>{title}</span>
          </Glossary>
        ) : (
          <span className='kf-title'>{title}</span>
        )}
        <div className='kf-time'>{time}</div>
        {number ? (
          <div className='number-section'>
            <Number size={size}>{number}</Number>
            <span className='kf-title subtitle'>{numberDescription}</span>
          </div>
        ) : (
          <span className='no-number'>{noNumberText}</span>
        )}
        {changes && (
          <div className='kf-changes'>
            {changeDirection === 'up' && <ArrowUp className='changes-icon' size={20} aria-hidden='true' />}
            {changeDirection === 'down' && <ArrowDown className='changes-icon' size={20} aria-hidden='true' />}
            {changeDirection === 'same' && <Minus className='changes-icon' size={20} aria-hidden='true' />}
            <span className='changes-text' aria-hidden={srChangeText ? 'true' : 'false'}>
              {changeText}
            </span>
            &nbsp;
            <span className='changes-periode' aria-hidden={srChangeText ? 'true' : 'false'}>
              {changePeriod}
            </span>
            {srChangeText ? <span className='sr-only'>{srChangeText}</span> : null}
          </div>
        )}
      </div>
    </div>
  )
}

export default KeyFigures
