import React from 'react'
import PropTypes from 'prop-types'
import { ArrowDown, ArrowUp, Minus } from 'react-feather'
import Number from '../Number'
import Glossary from '../Glossary'

const KeyFigures = ({
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
        {glossary ? (
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

KeyFigures.propTypes = {
  changes: PropTypes.shape({
    changeDirection: PropTypes.oneOf(['up', 'down', 'same']),
    changeText: PropTypes.string,
    changePeriod: PropTypes.string,
    srChangeText: PropTypes.string,
  }),
  className: PropTypes.string,
  icon: PropTypes.node,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  numberDescription: PropTypes.string,
  noNumberText: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  title: PropTypes.string,
  time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  glossary: PropTypes.string,
  greenBox: PropTypes.bool,
}

export default KeyFigures
